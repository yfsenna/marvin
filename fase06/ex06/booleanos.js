function booleanos(x){
for (i=x.length-1; i>=0; i--){
if (x[i]=== false || x[i]=== true)
x.splice(i, 1)
}
return x
}
