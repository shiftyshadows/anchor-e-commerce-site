#!/bin/bash

# Function to check if MongoDB is already installed
check_mongodb_installed() {
  if command -v mongod >/dev/null 2>&1; then
    echo "MongoDB is already installed."
    mongod --version
    exit 0
  fi
}

# Function to install MongoDB 4.2 using APT
install_mongodb_apt() {
  echo "Installing MongoDB 4.2 from the APT repository..."

  # Add MongoDB GPG key securely
  echo "Adding MongoDB GPG key..."
  wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo tee /usr/share/keyrings/mongodb-archive-keyring.gpg >/dev/null

  # Determine Ubuntu version
  UBUNTU_VERSION=$(lsb_release -sc)
  echo "Detected Ubuntu version: $UBUNTU_VERSION"

  if [[ "$UBUNTU_VERSION" == "focal" || "$UBUNTU_VERSION" == "bionic" || "$UBUNTU_VERSION" == "jammy" ]]; then
    echo "Adding MongoDB 4.2 repository..."
    echo "deb [ arch=amd64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg ] https://repo.mongodb.org/apt/ubuntu $UBUNTU_VERSION/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

    sudo apt-get update
    sudo apt-get install -y mongodb-org
    sudo systemctl start mongod
    sudo systemctl enable mongod

    echo "MongoDB 4.2 installed and started."
  else
    echo "No APT repository available for MongoDB 4.2 on $UBUNTU_VERSION."
    use_docker=true
  fi
}

# Function to install Docker using APT
install_docker_apt() {
  echo "Installing Docker via APT..."
  sudo apt-get update
  sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /usr/share/keyrings/docker-archive-keyring.gpg >/dev/null
  echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install -y docker-ce
}

# Function to install MongoDB 4.2 using Docker
install_mongodb_docker() {
  echo "Installing MongoDB 4.2 using Docker..."

  # Check if Docker is installed
  if ! command -v docker >/dev/null 2>&1; then
    install_docker_apt
  fi

  # Pull MongoDB 4.2 Docker image
  sudo docker pull mongo:4.2

  # Run MongoDB container
  sudo docker run -d --name mongodb-4.2 -p 27017:27017 mongo:4.2

  echo "MongoDB 4.2 is running in a Docker container."
  echo "You can connect to it on localhost:27017."
}

# Main script execution
use_docker=false
check_mongodb_installed
install_mongodb_apt

if [ "$use_docker" = true ]; then
  install_mongodb_docker
fi

echo "Installation completed."
