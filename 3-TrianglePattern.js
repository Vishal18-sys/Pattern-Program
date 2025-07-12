        // Reverse Triangle Pattern

for(let i=1; i<=6; i++){
    let row = " ";

    for(let j=6; j>=i; j--){
        row = row + " #";
    }
    console.log(row);
}