let blueSteel = 0;

let clickUpgrades = {
  pickaxe: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  carts: {
    price: 1000,
    quantity: 0,
    multiplier: 50,
  }
}

let autoUpgrades = {
  miners: {
    price: 500,
    quantity: 0,
    multiplier: 10
  },
  drills: {
    price: 10000,
    quantity: 0,
    multiplier: 100
  }
}

let elemCounter = document.querySelector("#scoreboard");
let elemPickaxe = document.querySelector("#pickaxe");
let elemCart = document.querySelector("#cart")
function mine() {
  blueSteel++;
  blueSteel += clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.multiplier;
  blueSteel += clickUpgrades.carts.quantity * clickUpgrades.carts.multiplier;
  update()
}

function update() {
  elemCounter.innerHTML = `
  <h1>Blue Steel: ${blueSteel}</h1>`
  elemPickaxe.innerHTML = `
    Pickaxe: ${clickUpgrades.pickaxe.quantity}
    `
  elemCart.innerHTML = `
    Cart: ${clickUpgrades.carts.quantity}`
}

function buyPickaxe() {
  if (blueSteel >= clickUpgrades.pickaxe.price) {
    clickUpgrades.pickaxe.quantity++;
    blueSteel -= clickUpgrades.pickaxe.price;
    elemPickaxe.innerHTML = `
    Pickaxe: ${clickUpgrades.pickaxe.quantity}
    `
    update();
  }
  // TODO disable button
}

function buyCart() {
  if (blueSteel >= clickUpgrades.carts.quantity) {
    clickUpgrades.carts.quantity++;
    blueSteel -= clickUpgrades.carts.price;
    elemCart.innerHTML = `
    Cart: ${clickUpgrades.carts.quantity}`
    update()
  }
}
buyPickaxe()







update()
