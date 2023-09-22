class item {
    constructor (name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const potion = new item ("Life potion", 80,"potion.png");
const sword = new item ("sword", 140, "sword.png");
const shield = new item ("shield", 100, "shield.png");

const inventary = []

let gold = 800;

const elGold = document.querySelector("#gold span");
elGold.innerText = gold;
const elInventary = document.getElementById("inventory");

function buy(item){
  if (gold - item.price >= 0){
    inventary.push(item);
    gold -= item.price;
    actualizarHTML()

  } else {
    alert(`you dont have gold enough to buy ${item.name}.`);
  }
}

function actualizarHTML(){
    elGold.innerText = gold;
    elInventary.innerHTML = "";
    for (const item of inventary);
    const indice = inventary.indexOf(item);
    const li = `
     <li>
     <img src="img/${item.image}" alt="${item.image}" />
     </li>`;
    elInventary.innerHTML += li;
}