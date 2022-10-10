exports.logProcessStart = function (distance) {
  console.log(`Retrieving all customers within ${distance}km radius.....`)
}

exports.logTotalCustomersFound = function(totalCustomersFound){
  console.log(`Found ${totalCustomersFound} customers.`);
}

exports.logCustomerRecordFile = function(fileOutput){
  console.log(`File output: ${fileOutput}`);
}