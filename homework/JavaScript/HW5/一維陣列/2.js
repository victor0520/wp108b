/*參考自謝孟澔、魏美亞同學的版本，再自己寫出來*/ 
var data=[1,2,3,4,5];

var i=0, sum1=0, ans;
for(i=0;i<data.length;i++){
    sum1 += data[i];
}

ans = sum1 / data.length;

var i=0, sum2=0, ans;
for(i=0;i<data.length;i++){
    sum2 += Math.pow(data[i] - ans,2);
}
ans2 = Math.sqrt(sum2 / data.length); 
console.log("%s的標準差 = %f",data, ans2);
/*對這個檔案的原始碼我可以完全理解*/