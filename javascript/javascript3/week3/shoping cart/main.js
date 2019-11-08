class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    converToCurrency(currency) {
        if (currency === '£')
            // console.log(currency);
            return this.price * .12;
        else if (currency === '€')
            //console.log(currency);
            return this.price * .13;
        else if (currency === '$')
            //console.log(currency);
            return this.price * .15;
        else
            return this.price;

    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {

        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here

        let ind = this.products.indexOf(product);
        if (ind == -1)
            console.log('Product not found');
        else
            this.products.splice(ind, 1);
    }


    searchProduct(productName) {
        // Implement functionality here

        const searchResult = this.products.filter(product => product.name == productName.name);
        console.log("search products", searchResult);

    }


    getTotal() {

        // Implement functionality here

        let initialValue = 0;
        let grandTotal = this.products.reduce((t, c) => { return t + c.price }, initialValue);
        console.log(`Grand Total : ${grandTotal}`);
        return (grandTotal);

    }


    renderProducts(username) {
        // Implement functionality here
        let myLable = document.getElementsByTagName("label");

        if (username == undefined) {
            myLable[0].innerHTML = `<h4>User name : ${username}</h4>`;
            return false;
        }
        myLable[0].innerHTML = `<h4>User name : ${username}</h4>`;


        let targetTable = document.getElementsByTagName("table");
        this.products.forEach(product => {

            const myRow = document.createElement("tr");
            const myData1 = document.createElement("td");
            const myData2 = document.createElement("td");

            myData1.innerHTML = product.name;
            myData2.innerHTML = product.price;

            myRow.appendChild(myData1);
            myRow.appendChild(myData2);

            targetTable[0].appendChild(myRow);

        });

        const myRow = document.createElement("tr");
        const myHeader1 = document.createElement("th");
        const myHeader2 = document.createElement("th");

        myHeader1.innerHTML = "Grand Total";
        myHeader2.innerHTML = "DK  " + this.getTotal();

        myRow.appendChild(myHeader1);
        myRow.appendChild(myHeader2);

        targetTable[0].appendChild(myRow);
    }


    getUser() {
        // Implement functionality here
        const User = new Promise((res, rej) => {
            res(fetch('https://jsonplaceholder.typicode.com/users/2'));
            rej('User not found');

        })
        return User;

    }
}


const flatscreen = new Product('flat-screen', 5000);
const Laptop = new Product('Lenove', 8000);
const washigMachine = new Product('Washing Machine', 4500);
const iron = new Product('Iron', 500);
const foodprocessor = new Product('Food Processor', 3500);

console.log(foodprocessor.name + " Price in GBP :" + foodprocessor.converToCurrency('£'));

//////const myshoppingCart = new ShoppingCart([flatscreen,Laptop,washigMachine,Laptop]);

const myshoppingCart = new ShoppingCart([]);

myshoppingCart.addProduct(flatscreen);
myshoppingCart.addProduct(Laptop);
myshoppingCart.addProduct(washigMachine);
myshoppingCart.addProduct(washigMachine);
myshoppingCart.addProduct(iron);
myshoppingCart.addProduct(foodprocessor);


// myshoppingCart.removeProduct(flatscreen);
// myshoppingCart.removeProduct(Laptop);
//myshoppingCart.removeProduct(washigMachine);

myshoppingCart.searchProduct(washigMachine);
// myshoppingCart.searchProduct(Laptop);
// myshoppingCart.searchProduct(flatscreen);

//myshoppingCart.getTotal();

myshoppingCart.getUser()
    .then(user => user.json())
    .then(data => {
        myshoppingCart.renderProducts(data.username);
    })
    .catch(err => console.log(err));
