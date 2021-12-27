#!/bin/sh
sudo git pull origin main
sudo npm install
touch .env
echo DATABASE_URL=${{ secrets.DATABASE_URL }} >> .env
sudo npm run dev