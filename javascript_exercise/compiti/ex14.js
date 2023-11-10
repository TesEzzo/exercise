function filterOutOdds(...numbers) {
    console.log(numbers.filter(numbers=> numbers % 2 === 0));
};

filterOutOdds(1,2,3,4,5,6,7,8,9,10,11,12);