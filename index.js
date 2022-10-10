const {getProcessStartLog, logTotalCustomersFound, writeCustomerRecordFile} = require('./src/helpers/logs.js');
const intercomGetCustomers = require('./src/program/index.js');
const { join } = require('path');
const { writeFile } = require('fs');
const { promisify } = require('util');

var customerOutputFile = join(__dirname, 'output.txt');
var customerInputFile = join(__dirname, 'src/program/customers.txt');

const getCustomersWithinRequiredDistance = async (distance, latitude, longitude) => {
  getProcessStartLog(distance);
  const customers = await intercomGetCustomers.getCustomersWithinDistance(customerInputFile,latitude,longitude,distance);
  logTotalCustomersFound(customers.length);

  await promisify(writeFile)(
    customerOutputFile,
    JSON.stringify(customers)
  );

  writeCustomerRecordFile(customerOutputFile);
}
//get the last 3 command line arguments
const args = [...process.argv.slice(3)];
getCustomersWithinRequiredDistance(...args);