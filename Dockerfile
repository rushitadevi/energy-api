FROM  node:17.3.0

# Create app directory
RUN mkdir -p /app
WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src

ARG BASE_URL=https://develop.exnaton.com/api/v2/
ENV BASE_URL=${BASE_URL}
RUN echo $BASE_URL
RUN echo "BASE_URL=$BASE_URL" > .env
ENV DATABASE_URL=mongodb://localhost:27017/exnaton-energy
ENV PORT=2000


RUN npm install
EXPOSE 4005
CMD ["npm","run","dev"]