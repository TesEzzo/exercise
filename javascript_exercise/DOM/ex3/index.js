const $ulList = document.querySelector("#list");
const $buttonList = document.querySelector("#buttonList");
const $inputListBorn = document.querySelector("#textBorn");

const addProduct = () => {
  const text= $inputListBorn.value;
  if (text === "") {
    $inputListBorn.placeholder="Add something";
    setTimeout(() => {
      $inputListBorn.placeholder="";
    },2000);
  } else {
  const li = document.createElement("li");
  const inputText = document.createElement("input");
  const checkbox= document.createElement("input");

  inputText.setAttribute("type", "text");
  inputText.setAttribute("value", `${text}`);

  checkbox.setAttribute("type", "checkbox");

  $ulList.appendChild(li).appendChild(checkbox);
  li.appendChild(inputText);
  }
};

// $buttonList.addEventListener("click", () => {
//   const text= $inputListBorn.value;
//   if (text === "") {

//     $inputListBorn.placeholder="Add something";
//     setTimeout(() => {
//       $inputListBorn.placeholder="";
//     },2000);
//   } else {
//   const li = document.createElement("li");
//   const inputText = document.createElement("input");
//   const checkbox= document.createElement("input");

//   inputText.setAttribute("type", "text");
//   inputText.setAttribute("value", `${text}`);

//   checkbox.setAttribute("type", "checkbox");

//   $ulList.appendChild(li).appendChild(checkbox);
//   li.appendChild(inputText);
//   }
// });