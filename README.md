# Intercom Engineer
A program that produces the list of customers within a specified distance in a given coordinates

### Installation

```bash
Node version >= 14.16.0
NPM version >= 6.14.11
```

### Getting Started

```bash
npm install # Install required dependencies

npm run customer-invitation # Generate output file with result
or `node index.js -- 100 53.339428 -6.257664` with last 3 arguments as `distance`, `latitude` and `longitude`

npm run test # Execute tests
```

### Code Architecture

###### Source code can be found under the `src` directory.

###### `index.js` acts as the entry point.

###### The `src/helpers` folder contains constants and helper variables to process the operation.

###### The `src/helpers/program-tasks` file contains extracted methods to get sorted customers list within a distance.

###### The `src/program` folder contains customer input file and the index program for the customer invitation.

###### Testing framework used is `mocha`. All tests can be found under the `/test` folder.

### Output

[output](https://github.com/dolani/intercom-product-engineer-take-home/blob/main/output.txt)
