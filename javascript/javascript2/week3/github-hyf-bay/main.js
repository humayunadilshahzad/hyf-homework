
const product = getAvailableProducts();

for(let p=0;p<product.length;p++)
        {
             let myList= document.createElement('li');

            let myDiv= document.createElement('div');
            myDiv.className='name';
            myDiv.innerHTML=product[p].name;
            document.querySelector('.products ul').appendChild(myList);
            myList.appendChild(myDiv);


            myDiv= document.createElement('div');
            myDiv.className='price';
            myDiv.innerHTML=product[p].price;
            document.querySelector('.products ul').appendChild(myList);
            myList.appendChild(myDiv);

            myDiv= document.createElement('div');
            myDiv.className='rating';
            myDiv.innerHTML=product[p].rating;
            document.querySelector('.products ul').appendChild(myList);
            myList.appendChild(myDiv);
   
            myDiv= document.createElement('div');
            myDiv.className='ships-to';
            myDiv.innerHTML=product[p].shipsTo;
            document.querySelector('.products ul').appendChild(myList);
            myList.appendChild(myDiv);
 

            let myButton= document.createElement('button');
            myButton.setAttribute('data-id','Drone23787' );
            myButton.innerHTML='Add to cart';
            myList.append(myButton);
    }

