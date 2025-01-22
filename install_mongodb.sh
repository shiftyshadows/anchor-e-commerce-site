#!/bin/bash

# Script to install MongoDB from the official MongoDB repository
# Tested on Ubuntu 20.04 and later

set -e

echo "Updating system packages..."
sudo apt update -y
sudo apt upgrade -y

echo "Importing the MongoDB public GPG key..."
wget -qO - https://pgp.mongodb.com/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg

echo "Creating a list file for MongoDB..."
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.com/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

echo "Updating the package database..."
sudo apt update -y

echo "Installing MongoDB..."
sudo apt install -y mongodb-org

echo "Enabling MongoDB service to start on boot..."
sudo systemctl enable mongod

echo "Starting MongoDB service..."
sudo systemctl start mongod

echo "Verifying MongoDB service status..."
sudo systemctl status mongod --no-pager

echo "MongoDB installation completed!"
echo "To test, run: mongo --eval 'db.runCommand({ connectionStatus: 1 })'"
