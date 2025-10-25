# ---------- Stage 1: Build the jar ----------
FROM maven:3.9.2-openjdk-17 AS build

WORKDIR /app

# Copy pom.xml first to cache dependencies
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build the jar (skip tests)
RUN mvn clean package -DskipTests

# ---------- Stage 2: Runtime image ----------
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
