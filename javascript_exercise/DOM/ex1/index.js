const html = document.documentElement;

const body = html.children[1];

const ul = body.children[0]

const li = ul.children

console.group("start")
console.log(ul.parentElement);
console.log(li[1]);
console.log(li[1].nextElementSibling);
console.log(li[1].previousElementSibling);
console.groupEnd()