FROM node:16

RUN mkdir -p /home/apilocal

COPY . /home/apilocal/

WORKDIR /home/apilocal

RUN npm install

EXPOSE 5000

CMD ["node","src/app.js"]