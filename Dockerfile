FROM node:18-alpine
WORKDIR /hotel-nactar
ENV PATH="./node_modules./bin:$PATH"
COPY package.json .
RUN npm install
COPY . .


CMD ["npm",  "start"]