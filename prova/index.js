const selectMap = {
    "BNB Chain": {
      name: "BNB Chain",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/56.png",
    },
    Ethereum: {
      name: "Ethereum",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/1.png",
    },
    "Polygon zkEVM": {
      name: "Polygon zkEVM",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/1101.png",
    },
    "zkSync Era": {
      name: "zkSync Era",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/324.png",
    },
    "Arbitrum One": {
      name: "Arbitrum One",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/42161.png",
    },
    Linea: {
      name: "Linea",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/59144.png",
    },
    Base: {
      name: "Base",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/8453.png",
    },
    opBNB: {
      name: "opBNB",
      imgSrc: "https://assets.pancakeswap.finance/web/chains/204.png",
    },
    Aptos: {
      name: "Aptos",
      imgSrc: "https://aptos.pancakeswap.finance/images/apt.png",
    },
  };
  
  const $menuItemList = document.querySelector("#menu-item-list");
  const $selectedValue = document.querySelector("#selected-value");
  
  const renderMenuList = () => {
    Object.entries(selectMap).forEach(([key, item], index) => {
      $menuItemList.innerHTML += `
                <li data-id="${key}" class="group/element flex gap-[10px] cursor-pointer mb-[5px] menu-item${index == 0 ? " active" : ""}">
                      <img data-id="${key}" class="w-6 h-6 menu-item" src="${item.imgSrc}" />
                      <span data-id="${key}" class="menu-item">${item.name}</span>
                </li>`;
    });
  };
  
  const setListeners = () => {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("menu-item")) {
        const id = event.target.dataset.id;
  
        $selectedValue.innerHTML = `
            <img class="w-6 h-6" src="${selectMap[id].imgSrc}" />
          <span>${selectMap[id].name}</span>
        `;
        
        $menuItemList.querySelectorAll("li").forEach(item => {
            if(item.dataset.id != id) {
              item.classList.remove("active");
          } else {
              item.classList.add("active");
          }
        })
      }
    });
  };
  
  const init = () => {
    renderMenuList();
    setListeners();
  };
  
  init();
  