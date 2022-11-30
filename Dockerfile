# Install an image of the Node.js version.
FROM node:16

# Create app directory
WORKDIR /user/src/app

# Copy the package.json file into the container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Run a command-line inside the container: npm install to install all dependencies in package.json
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

#  Once the image is created, run the script npm start
CMD ["node", "server.js"]

# To run the container, in the terminal:
# docker build . -t 7ing7ing/file-metadata-microservice
# Then:
# docker run -p 49160:8080 -d 7ing7ing/file-metadata-microservice
# And visit http://localhost:49160/ in browser

