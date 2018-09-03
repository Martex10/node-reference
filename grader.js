let scores = [90, 98, 89, 100, 100, 86, 94];
let scores2 = [40, 64, 77, 82, 80, 54, 73, 63, 95, 49];

const average = function(arr){
    let total = 0;
    arr.forEach(function(ar){
        total += ar;
    });
    return Math.round(total / arr.length);
}

console.log(average(scores));
console.log(average(scores2));