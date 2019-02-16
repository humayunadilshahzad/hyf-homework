class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice(currency){
        if(currency==='usd' )
            this.product.price /=7.4;
        else if(currency==='gbp')
            this.product.price /= 8.55;
        else if(currency==='eur')
            this.product.price /=7.25;

        return this.product.price;
    }
};


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here
        this.products.splice(this.products.indexOf(product), 1);
    }

    getTotal() {
        // Implement functionality here

        let sum = this.products.reduce((acc, val) => {
            return acc = acc + val.price;
        }, 0);
        return sum;
    }

    renderProducts() {
        // Implement functionality here
        const header = document.createElement('h3');
        header.innerHTML = "Shoping Cart";
        let targetDiv = document.getElementById('main')
        targetDiv.appendChild(header);

        const customerName = document.createElement('h4');
        this.getUser().then(user => { customerName.innerHTML = 'Customer Name: ' + user.name });
        targetDiv.appendChild(customerName);

        let prodDiv = document.createElement('div');
        prodDiv.id = "product";
        let TotalLable = document.createElement('label');
        TotalLable.className = "fltleft bold";
        TotalLable.innerHTML = 'Title Name';
        prodDiv.appendChild(TotalLable);

        let PriceSumLable = document.createElement('label');
        PriceSumLable.className = "fltright right bold";
        PriceSumLable.innerHTML = 'Price';
        prodDiv.appendChild(PriceSumLable);
        targetDiv.appendChild(prodDiv);

        setTimeout(() => {
            for (let itemsInCart = 0; itemsInCart < this.products.length; itemsInCart++) {


                let prodDiv = document.createElement('div');
                prodDiv.id = 'product';

                let prodLable = document.createElement('label');
                prodLable.className = "fltleft";
                prodLable.innerHTML = this.products[itemsInCart].name;
                prodDiv.appendChild(prodLable);

                let prodPriceLable = document.createElement('label');
                prodPriceLable.className = "fltright right";
                prodPriceLable.innerHTML = '£ ' + this.products[itemsInCart].price;
                prodDiv.appendChild(prodPriceLable);
                if (itemsInCart % 2 == 0)
                    prodDiv.style.backgroundColor = "white";
                else
                    prodDiv.style.backgroundColor = "lightgray";
                targetDiv.appendChild(prodDiv);

            }


        }, 800);

        setTimeout(() => {

            prodDiv = document.createElement('div');
            prodDiv.id = "product nobor";
            TotalLable = document.createElement('label');
            TotalLable.className = "fltleft right bold";
            TotalLable.innerHTML = 'Grand Total';
            prodDiv.appendChild(TotalLable);

            PriceSumLable = document.createElement('label');
            PriceSumLable.className = "fltright right bold";
            PriceSumLable.innerHTML = '£ ' + this.getTotal();
            prodDiv.appendChild(PriceSumLable);
            targetDiv.appendChild(prodDiv);

        }, 1000);


    }

    getUser() {
        // Implement functionality here


        const p = new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()));

                reject();

            }, 500);

        })
        return p;



        ///////////////////////////////////////////////////     
    }
};

/*  creating product instances */

const flatscreen = new Product('flat-screen', 5000);
const playstation = new Product('play-station', 3000);
const thinkpad = new Product('think-pad', 9000);
const ipad = new Product('Ipad', 7900);
const fridge = new Product('fridge', 6500);

/* shoping card instance */

const shoppingCart = new ShoppingCart([]);

/* adding product instances to shping card insatance  and then console log */

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(playstation);
shoppingCart.addProduct(thinkpad);
shoppingCart.addProduct(ipad);
shoppingCart.addProduct(fridge);

console.log(shoppingCart);

/* removing a product from cart and console log updated cart*/

//shoppingCart.removeProduct(ipad);

//console.log(shoppingCart);

//console.log('Grand Total=' + shoppingCart.getTotal());

shoppingCart.getUser().then(shoppingCart.renderProducts());



