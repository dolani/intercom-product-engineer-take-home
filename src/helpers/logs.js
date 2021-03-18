exports.getProcessStartLog = function (distance) {
  console.log(`Retrieving all customers within ${distance}km radius.....`)
}

exports.getTotalCustomersFound = function(totalCustomersFound){
  console.log(`Found ${totalCustomersFound} customers.`);
}

exports.writeCustomerRecordFile = function(fileOutput){
  console.log(`FILE OUTPUT: ${fileOutput}`);
}