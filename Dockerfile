# Stage 1: Build the jar
FROM maven:3.9.2-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml ./pom.xml
COPY bookstore/src ./src
RUN mvn clean package -DskipTests

# Stage 2: Runtime image
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
