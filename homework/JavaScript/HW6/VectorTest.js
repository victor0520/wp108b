/*參考自謝孟澔同學的版本，再自己照著寫一遍*/ 
const Vector = require('./Vector')

var a=new Vector(1,2,3);
var b=new Vector(1,1,1);
console.log('va.add(vb)=', a.add(b))
console.log('va.add(vb)=',a.sub(b))
console.log('va.dot(vb)=', a.dot(b))
console.log('va.neg()=', a.neg())
/*對這個檔案的原始碼我可以完全理解*/