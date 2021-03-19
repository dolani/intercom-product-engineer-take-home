const { earth_radius_km } = require('../helpers/constant.js');
const { readInputFilePath, sortCustomerListByUserId, getCustomersFromDistance } = require('../helpers/program-tasks.js');
const camelcaseKeys = require('camelcase-keys');

exports.getCustomersWithinDistance = async function (inputFilePath, reqlatitude, reqlongitude, distance, radius = earth_radius_km) {
  let customers = [];
  //read input file path and get each customer
  await readInputFilePath(inputFilePath, (customerRecord) => {
    let customerDistance = null;
    const customer = camelcaseKeys(JSON.parse(customerRecord));

    if (customer) {
      customerDistance = getCustomersFromDistance(radius, reqlatitude, reqlongitude, customer.latitude, customer.longitude);
    }

    customerDistance < distance ? customers.push(customer) : "";
  })

  sortCustomerListByUserId(customers, "userId");

  return customers;



}