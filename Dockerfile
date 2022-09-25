FROM node:15
# Create app directory
WORKDIR /app

# Install app dependencies
# why copy package.json first?
# https://stackoverflow.com/questions/36996046/why-do-people-copy-their-package-json-before-their-source-code-into-their-docker
# to take advantage of Docker cache
# if the files changes then the cache is invalidated
# and the npm install is run again!!!! The Horrors!
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

