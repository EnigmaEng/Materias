FROM node:16.16.0 as builder

WORKDIR /app

COPY package*.json ./

# Instala las dependencias
RUN npm install

COPY . /app/

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
