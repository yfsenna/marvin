function precoMedio(...args){
    y=0
    max=""
    maxn=0
    for (i=0; i < arguments.length; i++){
        if (args[i].preco > maxn){ 
            maxn = args[i].preco
            max = args[i].nome
        }
    y+=args[i].preco
    }
   console.log("O produto mais caro se chama \""+max+"\" ")
    return y/args.length 
}

