const $ulList = document.querySelector("#list");
const $ulChilds = document.querySelectorAll(".list")
const $buttonList = document.querySelector("#buttonList");
const $buttonReset = document.querySelector("#buttonReset");
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
    
    li.setAttribute("class","list")
    
    inputText.setAttribute("type", "text");
    inputText.setAttribute("value", `${text}`);
    $inputListBorn.value=""
    checkbox.setAttribute("type", "checkbox");
    
    $ulList.appendChild(li);
    li.appendChild(inputText);
    li.appendChild(checkbox);
  }
};

const resetProduct = () => {
  while ($ulList.firstChild) {
    $ulList.removeChild($ulList.firstChild)
  }
}
const cancProduct = () => {
  $ulList.removeChild($ulList.lastChild)
}

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
  
//   li.setAttribute("class","list")
  
//   inputText.setAttribute("type", "text");
//   inputText.setAttribute("value", `${text}`);
//   $inputListBorn.value=""
//   checkbox.setAttribute("type", "checkbox");
  
//   $ulList.appendChild(li);
//   li.appendChild(inputText);
// li.appendChild(checkbox);
//   }
// });