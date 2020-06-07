function add(a,b){
    var x=[];
    for(i=0;i<a.length;i++){
        x[i]=[];
        for(j=0;j<a[i].length;j++){
            x[i][j]=a[i][j]+b[i][j];
        }
    }
    return x;
}
var array1=[[1,2],[3,4]],array2=[[1,1],[1,1]];
console.log(add(array1,array2));