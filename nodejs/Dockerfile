FROM node:latest

# Install production dependencies.
WORKDIR /app

COPY bin .

RUN npm install \
    && npm install --save-dev nodemon

# Run the web service on container startup.
CMD ["node", "./server.js"]
