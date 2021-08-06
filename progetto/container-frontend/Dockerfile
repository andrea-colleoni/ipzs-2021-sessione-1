FROM nginx
RUN apt update
RUN apt install -y wget unzip
RUN wget http://192.168.1.51:8080/job/progetto-sessione-1/lastSuccessfulBuild/artifact/devops/frontend/webapp/dist/dist.zip && unzip dist.zip
RUN rm dist.zip
RUN cp /dist/webapp/* /usr/share/nginx/html
RUN rm -r /dist