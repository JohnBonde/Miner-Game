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

let collectionInterval = 0;
let elemCounter = document.querySelector("#scoreboard");
let elemPickaxe = document.querySelector("#pickaxe");
let elemCart = document.querySelector("#cart");
let elemMiner = document.querySelector("#miner");
let elemDrill = document.querySelector("#drill");

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
    Pickaxe: ${clickUpgrades.pickaxe.quantity} - $${clickUpgrades.pickaxe.price}
    `
  elemCart.innerHTML = `
    Cart: ${clickUpgrades.carts.quantity} - $${clickUpgrades.carts.price}`
  elemMiner.innerHTML = `
    Miner: ${autoUpgrades.miners.quantity} - $${autoUpgrades.miners.price}`
  elemDrill.innerHTML = `
    Drill: ${autoUpgrades.drills.quantity} - $${autoUpgrades.drills.price}`
  pickUpdate();
  minerUpdate();
  cartUpdate();
  drillUpdate()
}

function pickUpdate() {
  if (blueSteel >= clickUpgrades.pickaxe.price) {
    elemPickaxe.disabled = false
  }
  else {
    elemPickaxe.disabled = true
  }
}

function minerUpdate() {
  if (blueSteel >= autoUpgrades.miners.price) {
    elemMiner.disabled = false
  }
  else {
    elemMiner.disabled = true
  }
}

function cartUpdate() {
  if (blueSteel >= clickUpgrades.carts.price) {
    elemCart.disabled = false
  }
  else {
    elemCart.disabled = true
  }
}

function drillUpdate() {
  if (blueSteel >= autoUpgrades.drills.price) {
    elemDrill.disabled = false
  }
  else {
    elemDrill.disabled = true

  }
}

function buyPickaxe() {
  if (blueSteel >= clickUpgrades.pickaxe.price) {
    clickUpgrades.pickaxe.quantity++;
    blueSteel -= clickUpgrades.pickaxe.price;
    clickUpgrades.pickaxe.price += 10;
    elemPickaxe.innerHTML = `
    Pickaxe: ${clickUpgrades.pickaxe.quantity} - $${clickUpgrades.pickaxe.price}
    `;
    update();
  }
}

function buyCart() {
  if (blueSteel >= clickUpgrades.carts.price) {
    clickUpgrades.carts.quantity++;
    blueSteel -= clickUpgrades.carts.price;
    clickUpgrades.carts.price += 100;
    elemCart.innerHTML = `
    Cart: ${clickUpgrades.carts.quantity} - $${clickUpgrades.carts.price}`;
    update()
  }
}

function buyMiner() {
  if (blueSteel >= autoUpgrades.miners.price) {
    autoUpgrades.miners.quantity++;
    blueSteel -= autoUpgrades.miners.price;
    autoUpgrades.miners.price += 50;
    elemMiner.innerHTML = `
    Miner: ${autoUpgrades.miners.quantity} - $${autoUpgrades.miners.price}`;
    update()
  }

}

function buyDrill() {
  if (blueSteel >= autoUpgrades.drills.price) {
    autoUpgrades.drills.quantity++;
    blueSteel -= autoUpgrades.drills.price;
    autoUpgrades.drills.price += 1000;
    elemDrill.innerHTML = `
    Drill: ${autoUpgrades.drills.quantity} - $${autoUpgrades.drills.price}`
    update()
  }
}
function collectAutoUpgrades() {
  blueSteel += autoUpgrades.miners.quantity * autoUpgrades.miners.multiplier;
  blueSteel += autoUpgrades.drills.quantity * autoUpgrades.drills.multiplier;
  update()
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000)
}




startInterval();
update()
