function digit (num){
    //contador base para número menor que 10
    let count = 1;
    //looping divisor de dezenas
    for(i = 9; i < num;){
        num /= 10;
        //contador de dezenas
        count += 1;
    }
    return count;
}