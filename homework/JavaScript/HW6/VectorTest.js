const Vector = require('./Vector')

var a=new Vector(1,2,3);
var b=new Vector(1,1,1);
console.log('va.add(vb)=', a.add(b))
console.log('va.add(vb)=',a.sub(b))
console.log('va.dot(vb)=', a.dot(b))
console.log('va.neg()=', a.neg())