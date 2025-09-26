


// Arrow functions
function sum(a, b) {
    return a + b
}

const sumArrow = (a, b) => {
    return a + b;
}

const input = [1, 2, 3, 4, 5]

function transform(i) {
    return i * 2
}

const filterLogic = (n) => {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

const newArray = input.map(transform)

const ans = input.filter(filterLogic);

console.log(ans)