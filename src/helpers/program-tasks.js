const { existsSync, createReadStream } = require('fs');
const { createInterface } = require('readline');
const { once } = require('events');
const { getPIDividedBy180 } = require('../helpers/constant.js');
//#region read input file
exports.readInputFilePath = async function (inputFilePath, customerRecordCallback) {
  if (!existsSync(inputFilePath)) {
    throw new Error('Input file path does not exist.');
  }

  const fileStream = createReadStream(inputFilePath, 'utf8');
  const fileStreamLineInterface = createInterface({ input: fileStream });

  fileStreamLineInterface.on('line', customerRecordCallback);

  await once(fileStreamLineInterface, 'close');
};

//#endregion

//#region sort customer list ASC
exports.sortCustomerListByUserId = function (objects, prop) {
  if (!Array.isArray(objects) || !prop) {
    throw new Error('Object is invalid');
  }

  let i, j;

  for (i = 0; i < objects.length; ++i) {
    const object = objects[i];

    if (
      typeof objects[i] === 'object' &&
      objects[i] &&
      !(
        typeof objects[i][prop] === 'number' ||
        typeof objects[i][prop] === 'string'
      )
    ) {
      throw new Error('customer array is invalid');
    }

    let j;

    for (j = i - 1; j >= 0 && objects[j][prop] > object[prop]; --j) {
      objects[j + 1] = objects[j];
    }

    objects[j + 1] = object;
  }

  return objects;
};
//#endregion

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

//#region private method
function degreesToRadians(degrees) {
  return degrees * getPIDividedBy180;
};

function haversineFunction(x, y) {
  const diffAsRads = degreesToRadians(y - x);
  const sin = Math.sin(diffAsRads / 2);

  return sin * sin;
};
//#endregion