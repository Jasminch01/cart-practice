const cartBtn = document.querySelectorAll(".cart-btn");
const cartContainer = document.querySelector('.cart-container');
const p = document.querySelector('.total');

const itemsCount = {}
for (const btns of cartBtn) {
    btns.addEventListener('click', function(e){
        const items = e.target.parentElement.parentElement.children[0].innerText;
        if(itemsCount[items]){
            itemsCount[items]++;
            updateCartItem(items)
        }else{
            itemsCount[items] = 1;
            createItems(items);
        }
       

    })
}

function createItems(items){
    const li = document.createElement('li');
    li.innerText = `${items}(${itemsCount[items]})`
    cartContainer.insertBefore(li, p);
}

function updateCartItem(items){
    const cartItems = cartContainer.getElementsByTagName('li');
    for(const li of cartItems){
        if(li.innerText.startsWith(items)){
            li.innerText = `${items}(${itemsCount[items]})`
            return;
        }
    }

}
