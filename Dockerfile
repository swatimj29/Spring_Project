# ---------- Stage 1: Build the jar ----------
FROM maven:3.9.2-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml from repo root
COPY pom.xml ./pom.xml

# Copy source code from bookstore folder
COPY bookstore/src ./src

# Build the jar (skip tests)
RUN mvn clean package -DskipTests

# ---------- Stage 2: Runtime image ----------
FROM openjdk:17-slim

WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
