var x = 45,i = 2;
var array=[];
while(x>1){
    if(x%i==0){
        array.push(i); 
        x=x/i;
        continue;
    }
    i++; 
}
console.log("因式分解為%s",array);