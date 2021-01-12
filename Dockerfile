# 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/recipeApp /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
