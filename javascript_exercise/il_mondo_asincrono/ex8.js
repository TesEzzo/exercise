function runCallbacks(callbacks) {
    callbacks.forEach(element => {
        element()
    });
  }
  function firstCallback() {
    console.log("Io");
  }
  function secondCallback() {
    console.log("sono");
  }
  
  function thirdCallback() {
    console.log("leggenda");
  }
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);