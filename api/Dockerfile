FROM openjdk:17-jdk-slim
RUN addgroup --system spring && adduser --system --ingroup spring spring
USER spring:spring
ARG JAR_FILE=dist/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
