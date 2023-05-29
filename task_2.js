function primeNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "данные неверны";
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let randNum = Math.floor(Math.random() * 1500);
let p = primeNumber(randNum);
console.log("Число " + randNum + ' простое = ' + p);