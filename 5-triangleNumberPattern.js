        // Triangle Number pattern 

let num = 6;
for(let i=1; i<=6; i++){
    let row = " ";
    for(let j=1; j<=i; j++){
        row = row + i + " ";
        num--;
    }
    console.log(row)
}