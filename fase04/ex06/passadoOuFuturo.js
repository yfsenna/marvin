function passadoOuFuturo(date){
    
    var today = new Date("21 october 2015");
    if (date < today) {
        return "Passado";
    }
     
     else 
        return "Futuro";
    }
