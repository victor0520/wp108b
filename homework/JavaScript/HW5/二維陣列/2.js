/*參考自陳彥翔同學的版本，再自己寫出來*/ 
function neg(x){
    for(i=0;i<x.length;i++){
        for(j=0;j<x[i].length;j++){
            x[i][j]=x[i][j]*-1;
        }
    }
    return x;
}
var x=[[1,2],[3,4]];
console.log(neg(x));
/*對這個檔案的原始碼我可以完全理解*/