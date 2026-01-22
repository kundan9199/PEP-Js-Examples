
//rest operator
function sum(...nums){
    let sum;
    let i;
    while(i < nums.length){
        sum += nums[i]
        i++
    }
    return sum
}
const r1 = sum(10, 20, 30)
const r2 = sum(10, 20, 30, 40)

console.log(r1)
console.log(r2)
