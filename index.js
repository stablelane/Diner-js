import menuArray from '/data.js'

const cards = document.getElementById('cards')

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddBtn(e.target.dataset.add)
    }
    else if(e.target.dataset.remove){
        handleRemoveBtn(e.target.dataset.remove)
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
                                            <h5>$${targetItem.price}</h5>
                                        </div>`
    totalPrice(targetItem.price)   
    item++      
    document.getElementById('order-card').classList.remove('hidden')                               
}

let total = 0
function handleRemoveBtn(id){
    console.log(id)
    document.getElementById(id).remove()
    handleOrderdiv()
}

function totalPrice(price){
    total += price
    document.getElementById('total-price').textContent = `$${total}`
}

function handleOrderdiv(){
    if(document.getElementsByClassName('items').length === 0){
        console.log('meh')
        document.getElementById('order-card').classList.add('hidden')
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