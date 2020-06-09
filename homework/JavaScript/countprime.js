/*此程式參考自陳彥翔同學的版本，再自己寫出來*/
x=3,y=7,z=0
function isPrime(i){
    for(j=2;j<i;j++){
        if(i%j==0){
            return false;
        }
    }
    return true;
}
for(i=x;i<=y;i++){
    if(isPrime(i)){
        z+=1;
    }
}
/*對這個檔案的原始碼我可以完全理解*/