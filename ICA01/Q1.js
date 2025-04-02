let Budget = 60;
let Keyboard_prices = [40, 50, 60];
let Mouse_prices = [5, 8, 12];
let sumArray = []; // Store valid sums


for (let i = 0; i < Keyboard_prices.length; i++) {
    for (let j = 0; j < Mouse_prices.length; j++) {
        let sum = Keyboard_prices[i] + Mouse_prices[j];
        if (sum < Budget) {
            sumArray.push(sum);
			console.log("Buyer can purchase a "+Keyboard_prices[i]+" Rupees keyboard and an"+ Mouse_prices[j]+" Rupees mouse, so the maximum purchasable value less than the budget is returned, which is "+ sum)
        }
    }
}


if (sumArray.length > 0) {
    let max = Math.max(...sumArray);
    console.log(max);
} else {
    console.log(-1);
}

