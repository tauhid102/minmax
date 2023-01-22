let data=[10,1000,1,59.10,120,4,-1,30]
let max=data[0];
let min=data[0]
for(let i=0;i<=data.length;i++){
    if(data[i]>max){
        max=data[i]
    }
    else if(data[i]<min){
        min=data[i]
    }
}
console.log(max);
console.log(min);