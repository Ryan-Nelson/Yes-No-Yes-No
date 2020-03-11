function yesNo(arr){
    let new_arr = [...arr];
    for (let i = 0; i < new_arr.length; i++) {
        let spliced = new_arr.splice(i+1,1);
        new_arr = new_arr.concat(spliced);
    }
    return new_arr;
}
