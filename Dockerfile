FROM cypress/included:10.8.0
WORKDIR /test
RUN npm init -y
COPY . .
ENTRYPOINT []