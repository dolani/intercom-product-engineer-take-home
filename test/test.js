'use strict';

const chai = require('chai');
const expect = chai.expect;
const {latitude, longitude} = require('../src/helpers/constant.js');
const intercomGetCustomers = require('../src/program/index.js');
const { join } = require('path');
var customerInputFile = join(__dirname, '../src/program/customers.txt');


describe('Customer Invitation', () => {
    it('Should return list of 16 customers within 100km of specified longitude and latitude ', async () => {
        const customers = await intercomGetCustomers.getCustomersWithinDistance(customerInputFile,latitude,longitude,100);
        expect(customers).to.be.an('array');
        expect(customers).to.have.lengthOf(16);
    });
    
    it('Should return empty an list', async () => {
        const customers = await intercomGetCustomers.getCustomersWithinDistance(customerInputFile,latitude,longitude,0);
        expect(customers).to.have.lengthOf(0);
    });

});