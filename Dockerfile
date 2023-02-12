FROM node:18

COPY ["./package.json", "/usr/src"]

WORKDIR /usr/src

RUN npm install 

COPY [".", "/usr/src"]

EXPOSE 5000

CMD ["node","src/app.js"]