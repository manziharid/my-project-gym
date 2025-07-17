class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log(Item.getCount()); // 0