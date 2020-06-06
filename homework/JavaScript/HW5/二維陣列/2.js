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