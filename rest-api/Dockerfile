FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Nếu bạn có script build thì bật:
# RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
