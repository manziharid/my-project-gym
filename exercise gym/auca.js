function getItems() {
  return [10, 20];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log({ thirdItem }); // 0