function x(str, str2){
    str=str+"x"
    if (str == "")
    return 0
    else 
    str = str.match(/x/ig)
    return str.length-1
}
