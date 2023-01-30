var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //console.log(customerName)
}

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "david";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "mike";
}