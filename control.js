const store = [
    {
        photo: "./media/cake1.jpg",
        category: "cake",
        Price: "Price: $10"
    },
    {
        photo: "./media/cake2.jpg",
        category: "cake",
        Price: "Price: $14"
    },
    {
        photo: "./media/cake3.jpg",
        category: "cake",
        Price: "Price: $12"
    },
    {
        photo: "./media/cake4.jpg",
        category: "cake",
        Price: "Price: $15"
    },
    {
        photo: "./media/cake5.jpg",
        category: "cake",
        Price: "Price: $14"
    },
    {
        photo: "./media/coffee1.jpg",
        category: "coffee",
        Price: "Price: $14"
    },
    {
        photo: "./media/coffee2.jpg",
        category: "coffee",
        Price: "Price: $14"
    },
    {
        photo: "./media/coffee3.jpg",
        category: "coffee",
        Price: "Price: $1"
    },
    {
        photo: "./media/coffee4.jpg",
        category: "coffee",
        Price: "Price: $14"
    },
    {
        photo: "./media/momo1.jpg",
        category: "momo",
        Price: "Price: $3"
    },
    {
        photo: "./media/momo2.jpg",
        category: "momo",
        Price: "Price: $2"
    },
    {
        photo: "./media/friedmomo1.jpg",
        category: "momo",
        Price: "Price: $2"
    },
    {
        photo: "./media/friedmomo2.jpg",
        category: "momo",
        Price: "Price: $3.2"
    },
    {
        photo: "./media/openmomo.jpg",
        category: "momo",
        Price: "Price: $2.1"
    }
]

const foods = document.getElementById("foods");
const btns = document.querySelectorAll(".btn");
window.addEventListener("DOMContentLoaded", function(){
    displayStore(store);
    
})
//buttons to choose the item in store
btns.forEach(function(button){
    button.addEventListener("click", function(e){
        const storeItem = e.currentTarget.dataset.id;
        const categoryItem = store.filter(function(items){
            if(items.category === storeItem){
                return storeItem;
            }

        })
        if(storeItem === "all"){
            displayStore(store);
        }
        else{
            displayStore(categoryItem);
        }
    })
})

//function to display items in the store
function displayStore(storesItem){
    const storeArray = storesItem.map(function(item){
       
        return `<div class="${item.category}">
        <img src=${item.photo} alt="${item.category}" style="height: 210px; width: 200px;">
        <span style="font-size: 20px;"><strong style="margin-right: 40px; font-size: 27px; color: rgb(73, 58, 58);">${item.category}</strong>${item.Price}</span>
        </div>`
    }).join('');
    foods.innerHTML = storeArray;
}