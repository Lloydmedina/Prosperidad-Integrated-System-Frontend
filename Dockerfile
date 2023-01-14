# #stage 1
FROM node:18.9.0-alpine3.15 As build
WORKDIR /app
RUN apk add --no-cache g++ make python3
COPY package*.json ./
#RUN npm install --force
RUN npm install --force
COPY . .
# build project
# RUN node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build
RUN npm run build

# #stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/eegs-frontend /usr/share/nginx/html
