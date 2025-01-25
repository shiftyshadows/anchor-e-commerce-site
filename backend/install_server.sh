#!/bin/bash
echo "PORT=5000" > .env
echo "MONGO_URI=mongodb://localhost:27017/anchor_ecommerce" >> .env
echo "SECRET_KEY=$(openssl rand -base64 32)" >> .env
npm install
npm run dev
