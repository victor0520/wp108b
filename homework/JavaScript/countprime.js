x=3,y=7,z=0
function isPrime(i){
    for(j=2;j<i;j++){
        if(i%j==0){
            return false;
        }
    }
    return true;
}
//x=3,y=15,z=0
for(i=x;i<=y;i++){
    if(isPrime(i)){
        z+=1;
    }
}
console.log("countPrime(%d,%d),have %d prime",x,y,z);
