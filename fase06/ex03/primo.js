function primo(x){
    
    y=[];
    if (x < 0){
    x = x*-1}
    
    for (i=0;i<=x;i++){
        if (Number.isInteger(x/i))
        y.push(i);
    }
    if (y.length>2)
    return "Não";
    else if (x==1)
    return "Não";
    else
    return "Sim";
}
