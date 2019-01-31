function animais(obj){
    for (i=0; i<obj.length; i++){
     delete (obj[i].altura)   
    obj[i].idade=5+i
    }
    return obj
}

