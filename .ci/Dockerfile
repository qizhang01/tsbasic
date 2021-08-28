FROM nexus-docker.mycyclone.com/testdev/fe-base:latest

WORKDIR /home/rpa

COPY dist/ /home/rpa/dist/
COPY .ci/ci-console.conf /etc/nginx/conf.d/
ENTRYPOINT ["nginx", "-g", "daemon off;"]