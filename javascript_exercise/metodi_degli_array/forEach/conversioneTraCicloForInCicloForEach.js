const items = ["item1", "item2", "item3"];
const copyItems = [];

//before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

//after
items.forEach((item) => {
  copyItems.push(item);
});

console.log(copyItems);

//un loop di un for each