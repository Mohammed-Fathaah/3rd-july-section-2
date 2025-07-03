function addItems(arr){
    return arr.reduce((sum,current)=>sum+current,0)
}
console.log(addItems([2,5,3,7]))
console.log(addItems([]))