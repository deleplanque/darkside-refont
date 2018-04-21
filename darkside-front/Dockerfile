FROM node:9

COPY * /usr/src/darksidefront/
RUN cp -R src /usr/src/darksidefront/
RUN cp -R e2e /usr/src/darksidefront/
RUN cd /usr/src/darksidefront/
RUN npm install
RUN npm start
