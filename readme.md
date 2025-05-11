# Documentação - Tech Challenge FIAP Customer Microservice


## Running Instructions

# Node
npm install
npx prisma generate
npm run dev

# Docker
docker build . -t gabrielumbelino/restaurante-api-product-image:latest
docker run -p 3001:3001 gabrielumbelino/restaurante-api-product-image:latest 