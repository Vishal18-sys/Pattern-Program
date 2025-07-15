        // X-shape pattern program

let num = 8;
for(let i=1; i<=num; i++){
    let row = " ";
    for(let j=1; j<=num; j++){
        if(i == j || i+j == num+1){
            row = row + " * ";
        }else{
            row = row + " ";
        }
    }
    console.log(row)
}