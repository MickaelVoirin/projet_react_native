FROM node

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /app

# Install dependencies
RUN cd /app; \
    npm install --production

EXPOSE 3000

# Run our app.
CMD ["node", "/app/index.js"]
