function organizarDatas(x){

    function comp(y1, y2) {
        return new Date(y1.dataDeChegada) - new Date(y2.dataDeChegada);
    }
    x.sort(comp);
    return x;
}
