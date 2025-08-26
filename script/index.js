// function getElement(id){
//     const element = document.getElementById(id)
//     return element;
// }

//  traditional way

// document.getElementById('kitchen-btn-2').addEventListener('click', function(){
//    const title = getElement('kitchen-title-2').innerText;
//    const price = getElement('kitchen-price-2').innerText;
//    const totalPrice = getElement('total-price').innerText;
//     currentTotal = Number(price) + Number(totalPrice); 
  
//    getElement('total-price').innerText = currentTotal

//    const cartContainer =getElement('cart-container');
//    const newCart = document.createElement('div')
//     newCart.innerHTML=`
                //  <div class=" flex justify-between items-center bg-gray-200 m-2 p-5 rounded-lg">
                //             <img class="w-16" src="./assets/kitchen-1.png" alt="">
                //             <div>
                //             <h2 class="font-bold">${title}</h2>
                //                <h2>${price}</h2>
                //             </div>

//                    `
//     cartContainer.appendChild(newCart)
// });

//==================================================================================


//travarse techneq

function getElement(id){
    const element = document.getElementById(id)
    return element;
}

const cartsBtn = document.getElementsByClassName('cart-btn');

for(const cartButton of cartsBtn){
    cartButton.addEventListener('click',function(){
        
         const productImg =cartButton.parentNode.parentNode.parentNode.children[0].children[0].src
         const productTitle = cartButton.parentNode.parentNode.parentNode.children[1].children[1].innerText
         const productPrice =cartButton.parentNode.parentNode.parentNode.children[1].children[2].children[0].innerText
        

         const totalPrice = getElement('total-price').innerText
         const currentTotal =Number(totalPrice)+Number(productPrice)
          getElement('total-price').innerText =currentTotal
        //  console.log(currentTotal)


        const cartContainer = getElement('cart-container');
        const newCart = document.createElement('div')
        newCart.innerHTML = `
         <div class=" flex justify-between items-center bg-gray-200 m-2 p-5 rounded-lg">
                            <img class="w-16" src="${productImg}" alt="">
                            <div>
                            <h2 class="font-bold">${productTitle}</h2>
                               <h2>${productPrice}</h2>
                            </div>

        
        `
         cartContainer.appendChild(newCart)


         const quantity = getElement('total-quantity').innerText
         const currentQuantity = Number(quantity)+1;
         getElement('total-quantity').innerText = currentQuantity;
         
    })
}


 const deleteBtn = getElement('delete-btn').addEventListener('click',function(){
       getElement('cart-container').innerText =''
       getElement('total-quantity').innerText = 0
       getElement('total-price').innerText = 0
      
       
 })

