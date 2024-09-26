import menuArray from '/data.js'

const cards = document.getElementById('cards')

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddBtn(e.target.dataset.add)
    }
    else if(e.target.dataset.remove){
        handleRemoveBtn(e.target.dataset.remove)
    }
    else if(e.target.id === 'complete-order-btn'){
        handleCompleteBtn()
    }
    else if(e.target.id === 'pay-btn'){
        handlePayBtn()
    }

})


let item = 111110
function handleAddBtn(id){
    const targetItem = menuArray.filter(function(item)  {
        return item.id === Number(id)})[0]
        
       
    document.getElementById('items').innerHTML += 
                            `<div class="items" id="${item}">
                                <h4>${targetItem.name}</h4>
                                <button class="remove" data-remove=${item}>remove</button>
                                <h5 class="price">$${targetItem.price}</h5>
                            </div>`
    totalPrice(targetItem.price)   
    item++      
    document.getElementById('order-card').classList.remove('hidden')                               
}

let total = 0
function handleRemoveBtn(id){
    
    let div = document.getElementById(id)
    div.remove()
    let price = div.querySelector('.price').textContent  
    totalPrice(-Number(price.replace('$','')))
    handleOrderdiv()
}

function totalPrice(price){
    total += price
    document.getElementById('total-price').textContent = `$${total}`
}

function handleOrderdiv(){
    if(document.getElementsByClassName('items').length === 0){
        
        
        document.getElementById('order-card').classList.add('hidden')
    }

}
function handleCompleteBtn(){
    document.getElementById('modal').style.display = 'inline'
}
function handlePayBtn(){
    const name = document.querySelector('input')
    const cardNumber = document.querySelector('input[name="cardNumber"]')
    const cvv = document.querySelector('input[name="cvv"]')
    if (input.value.trim() === '' && cardNumber.value.trim() === '' 
                    && cvv.value.trim() === '') {
        input.setCustomValidity('Please fill out this field'); // Set custom error message
        input.reportValidity(); // Show the validation message
    } else {
        input.setCustomValidity('');
       
        confirmId = 1
    }
}
let confirmId = 0
handleOrderConfirmDiv(confirmId)
function handleOrderConfirmDiv(confirmId){
    if(confirmId === 1){
        document.getElementById('order-confirmation').style.display = 'block'

    }
    else{
        document.getElementById('order-confirmation').style.display = 'none'
    }
}
const itemsHtml = menuArray.map(item => {
    return `<div class="card">
                <h2 class="logo">${item.emoji}</h2>
                <div class="card-text">
                    <h2>${item.name}</h2>
                    <h3>pepporoni,mushroom,mozarella</h3>
                    <h4>$${item.price}</h4>
                </div>
                <button id="add-btn" data-add="${item.id}">+</button>
            </div>`
            
})

handleOrderdiv()
cards.innerHTML += itemsHtml