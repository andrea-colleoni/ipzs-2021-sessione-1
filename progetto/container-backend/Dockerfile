FROM openjdk:11.0.10
# ARG JAR_FILE=progetto-finale-0.0.1-SNAPSHOT.jar
RUN wget http://192.168.1.51:8080/job/progetto-sessione-1/lastSuccessfulBuild/artifact/devops/eclipse/progetto-finale/target/progetto-finale-0.0.1-SNAPSHOT.jar && cp progetto-finale-0.0.1-SNAPSHOT.jar app.jar
RUN rm progetto-finale-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/app.jar"]