function fetchDataFromAPI(callback) {
    setTimeout(() => {
        console.log(callback())
    },2000)
  }
  
  function handleData(data) {
    const user = { name: "John", age: 30 }
    return user
  }
  
  fetchDataFromAPI(handleData);

  //non ho ben capito la consegna spero sia giusto non linciarmi