# DAOtest Hardhat Project

This repository contains a simple Hardhat setup with a custom `EnterpriseToken` contract. The project deploys five instances of the token.

## Installation

Install dependencies using npm:

```bash
npm install
```

## Deployment

Configure your `.env` file with `SEPOLIA_RPC_URL` and `PRIVATE_KEY` then run:

```bash
npx hardhat deploy --network sepolia
```

This uses the script in `scripts/deploy.js` to deploy tokens with company IDs 1 through 5.
