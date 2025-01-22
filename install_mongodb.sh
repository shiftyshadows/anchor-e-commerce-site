#!/bin/bash

# Script to install the latest MongoDB version compatible with the current Ubuntu version

set -e

echo "Checking Ubuntu version..."
UBUNTU_CODENAME=$(lsb_release -cs)
echo "Ubuntu codename detected: $UBUNTU_CODENAME"

# Supported MongoDB versions for Ubuntu
declare -A MONGO_SUPPORTED_CODENAMES=(
  ["noble"]="8.0"
  ["focal"]="6.0"
  ["jammy"]="6.0"
  ["bionic"]="5.0"
)

# Determine the MongoDB version to install
if [[ -n "${MONGO_SUPPORTED_CODENAMES[$UBUNTU_CODENAME]}" ]]; then
  MONGO_VERSION="${MONGO_SUPPORTED_CODENAMES[$UBUNTU_CODENAME]}"
  echo "MongoDB version $MONGO_VERSION is supported for $UBUNTU_CODENAME."
else
  echo "Error: MongoDB does not officially support the $UBUNTU_CODENAME codename."
  exit 1
fi

echo "Updating system packages..."
sudo apt update -y
sudo apt upgrade -y

echo "Importing the MongoDB public GPG key..."
wget -qO - https://pgp.mongodb.com/server-${MONGO_VERSION}.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-${MONGO_VERSION}.gpg

echo "Creating a list file for MongoDB..."
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-${MONGO_VERSION}.gpg ] https://repo.mongodb.org/apt/ubuntu $UBUNTU_CODENAME/mongodb-org/${MONGO_VERSION} multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-${MONGO_VERSION}.list

echo "Updating the package database..."
sudo apt update -y

echo "Installing MongoDB $MONGO_VERSION..."
sudo apt install -y mongodb-org

echo "Enabling MongoDB service to start on boot..."
sudo systemctl enable mongod

echo "Starting MongoDB service..."
sudo systemctl start mongod

echo "Verifying MongoDB service status..."
sudo systemctl status mongod --no-pager

echo "MongoDB $MONGO_VERSION installation completed!"
echo "To test, run: mongo --eval 'db.runCommand({ connectionStatus: 1 })'"
