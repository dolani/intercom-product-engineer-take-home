const { existsSync, createReadStream } = require('fs');
const { createInterface } = require('readline');
const { once } = require('events');
const { getPIDividedBy180 } = require('../helpers/constant.js');

// #region read input file
exports.readInputFilePath = async function (inputFilePath, customerRecordCallback) {
  if (!existsSync(inputFilePath)) {
    throw new Error('Input file path does not exist.');
  }

  const fileStream = createReadStream(inputFilePath, 'utf8');
  const fileStreamLineInterface = createInterface({ input: fileStream });

  fileStreamLineInterface.on('line', customerRecordCallback);

  await once(fileStreamLineInterface, 'close');
};

// #endregion

// #region sort customer list ASC
exports.sortCustomerListByUserId = function (customers, prop) {
  if (!Array.isArray(customers)) {
    throw new Error('Customer array is invalid.');
  }

  if (!prop) {
    throw new Error('Property name is invalid.');
  }

  let i, j;

  for (i = 0; i < customers.length; ++i) {
    const object = customers[i];

    if (
      typeof customers[i] === 'object' &&
      customers[i] &&
      !(
        typeof customers[i][prop] === 'number' ||
        typeof customers[i][prop] === 'string'
      )
    ) {
      throw new Error('customer array is invalid');
    }

    let j;

    for (j = i - 1; j >= 0 && customers[j][prop] > object[prop]; --j) {
      customers[j + 1] = customers[j];
    }

    customers[j + 1] = object;
  }

  return customers;
};
// #endregion

exports.getCustomersFromDistance = function (radius, reqlatitude, reqlongitude, customerLatitude, customerLongitude) {
  if (!radius || (reqlatitude === customerLatitude && reqlongitude === customerLongitude)) {
    return 0;
  }

  const lat1AsRads = degreesToRadians(reqlatitude);
  const lat2AsRads = degreesToRadians(customerLatitude);

  const haversineLat = haversineFunction(reqlatitude, customerLatitude);
  const haversineLon = haversineFunction(reqlongitude, customerLongitude);

  const a = Math.sqrt(
    haversineLat + Math.cos(lat1AsRads) * Math.cos(lat2AsRads) * haversineLon
  );

  return 2 * radius * Math.asin(a);

}

// #region private method
function degreesToRadians(degrees) {
  return degrees * getPIDividedBy180;
};

function haversineFunction(x, y) {
  const diffAsRads = degreesToRadians(y - x);
  const sin = Math.sin(diffAsRads / 2);

  return sin * sin;
};
// #endregion