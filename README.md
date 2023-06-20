# ERC-721 Token Deployment and Minting

This repository contains the code for deploying and minting ERC-721 tokens using Hardhat.

## Prerequisites

Before proceeding, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/irakibul7/deploy-ERC-721-token.git

  ```

2. Navigate to the project directory:

  ```bash
  cd deploy-ERC-721-token

  ```

3. Install the required dependencies:
   ```bash
   npm install

   ```

4. Create Hardhat Project
   ```bash
   npx hardhat

   ```

5. Update hardhat.config.js
   Change your desired network


## **Deployment**

1. Edit the **`.env`** file and set the necessary environment variables:
    - **`API_URL`**: The URL of the Ethereum or Polygon network you want to deploy the contract to (e.g., Infura, Alchemy).
    - **`PRIVATE_KEY`**: The private key of the deploying account.
2. Compile the contracts:

    ```bash
    npx hardhat compile

    ```

3. Deploy the contract:

    ```bash

    npx hardhat run scripts/deploy.js --network <network-name>

    ```

    Replace **`<network-name>`** with the desired network configuration from **`hardhat.config.js`** (e.g., **`mumbai`**, **`polygon`**, **`mainnet`**).

4. Note the contract address displayed in the console upon successful deployment.

## **Minting Tokens**

1. Edit the **`.env`** file and set the following environment variable:
    - **`CONTRACT_ADDRESS`**: The address of the deployed ERC-721 contract.
2. Modify the minting script in **`scripts/mint.js`** with the desired token metadata and recipients.
3. Execute the minting script:

    ```bash

    npx hardhat run scripts/mint.js --network <network-name>

    ```

    Replace **`<network-name>`** with the appropriate network configuration.

4. The script will mint the tokens and display the transaction details for each minted token.

## **Customization**

Feel free to customize the contract, including additional functionalities, metadata, and event handling, as per your project requirements.

## **License**

This project is open source and available under the Unlicense. You are free to use, modify, and distribute the code in any way you like.