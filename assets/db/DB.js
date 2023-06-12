
const customerData = "CUSTOMER_DATA"; // local storage saved key
const itemData = "ITEM_DATA"; // local storage saved key

export function getAllCustomerDB() {
    let customer_pre_data_arr = localStorage.getItem(customerData);
    let customer_data_arr = [];
    if (customer_pre_data_arr) {
        customer_data_arr = JSON.parse(customer_pre_data_arr);
    }
    return customer_data_arr;
}

export function saveCustomerDB(customer) {
    let customer_pre_data_arr = localStorage.getItem(customerData);
    let customer_data_arr = [];
    if (customer_pre_data_arr) {
        customer_data_arr = JSON.parse(customer_pre_data_arr);
    }
    customer_data_arr.push(customer);
    localStorage.setItem(customerData, JSON.stringify(customer_data_arr));
}
