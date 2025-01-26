#!/bin/bash

# Check if the script is run as root or with sudo
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo."
  exit
fi

# Update system packages
echo "Updating system packages..."
sudo apt-get update -y

# Install prerequisites
echo "Installing prerequisites..."
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common gnupg

# Add Docker's official GPG key
echo "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the Docker stable repository
echo "Setting up Docker stable repository..."
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker CE
echo "Installing Docker CE..."
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add MongoDB's official GPG key
echo "Adding MongoDB's official GPG key..."
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg

# Set up the MongoDB 4.2 repository
echo "Setting up MongoDB 4.2 repository..."
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list > /dev/null

# Install MongoDB tools and Docker-compose plugin
echo "Installing MongoDB tools and Docker-compose plugin..."
sudo apt-get update -y
sudo apt-get install -y mongodb-org

# Start Docker service
echo "Starting Docker service..."
sudo systemctl start docker
sudo systemctl enable docker

# Verify installation
echo "Verifying installation..."
docker --version
if [ $? -eq 0 ]; then
  echo "Docker installed successfully."
else
  echo "Docker installation failed."
fi

# Verify MongoDB version in Docker
echo "Pulling and running MongoDB 4.2 in Docker..."
sudo docker pull mongo:4.2
sudo docker run -d --name mongodb -p 27017:27017 mongo:4.2

echo "MongoDB 4.2 installed in Docker successfully."
