# Lolly for Polly

Lolly for Polly - it’s a place where crypto farmers meet farmers with real-world assets (agricultural).

# Important Links

Smart contract deployed on the baobab testnet:
 - address [0x19D96560a9089EB2FB73AD8f0cBF31dBa5bE8B1D.](https://baobab.scope.klaytn.com/account/0x19D96560a9089EB2FB73AD8f0cBF31dBa5bE8B1D)

# Description
## 1. Problem:

**A. Enormous interest rate for loan.** For example, for many Indian farmers, the only source of loans are local moneylenders, who charged anywhere from 36 to 60 percent as interest. Therefore, many Indians farmers will stay indebted forever. 

**B. Lack of government support for farmers.** For example, in Ukraine 60% of agricultural products are made by middle-sized agricultural business, but for them government can give max \$3.8mln in total, compare with US where farmers can get up to \$1 billion loans from government.
![Problems and sulutions](https://cdn.dorahacks.io/static/files/18c1d20538554a18c5907174038bc927.png)


## 2. Solution:

We’ve built a platform (mobile up), where real world farmers can monetise their social network (socialFi) or tokenise their real words assets (RWA) such as lands, tractors and receive a loan.

## 3. Key features:

- Real-world farmer can sync up contacts from their social network and ask for a loan.
- Real-world farmer can tokenise their real words assets (RWA) such as lands, tractors and receive a loan.
- Crypto farmer can give a loan to their friends from social network and earn interest.

![Perks](https://cdn.dorahacks.io/static/files/18c1d25536c2e4b60495ed8427eab14e.png)


## Setup

### Initial setup

1. Clone this repository locally.
2. Install pre-requisites:
   - Make sure to have installed:
     - [Node.js](https://nodejs.org/en/download)
     - [Kaikas](https://docs.klaytn.foundation/content/dapp/developer-tools/getting-started/kaikas)
   - Bootstrap your local environment: run `npm install` within this folder to install all dependencies.
3. Open the project and start debugging / developing on:
   - `npx hardhat compile` to compile smart contracts and produce artifacts
   - `npx hardhat run scripts/deploy.ts [--network localnet|baobab|cypress]` to deploy

### Continuous Integration / Continuous Deployment (CI/CD)

TBD

## Tools

This project makes use of Solidity and React to build Klaytn smart contracts. The following tools are in use:

- Node.js, Hardhat
- React and related dependencies including Tailwind CSS, daisyUI, npm

## Next Steps

- Add RWA colateral borrowing
- Add native mobile app
