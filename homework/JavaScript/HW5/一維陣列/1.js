/*參考自謝孟澔同學的版本，再自己寫出來*/ 
var data=[1,3,5,7,11];

var i=0, sum=0, ans;
for(i=0;i<data.length;i++){
    sum += data[i];
}

ans = sum / data.length;

console.log("%s的平均值 = %d", data, ans);
/*對這個檔案的原始碼我可以完全理解*/


