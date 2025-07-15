        // Star pattern in square form

let num=6;
for(let i=1; i<=num; i++){
    let row = " ";
    for(let j=1; j<=num; j++){
        if(i == 1 || i == num || j == 1 || j == num ){
            row = row +  " * ";
        }else{
            row = row + "   ";
        }
    }
    console.log(row);
}