    // Triangle + Reverse Triangle Star Pattern

let num = 6;

for(let i=num; i>1; i--){
    let row = " ";

    for(let j=1; j<=i; j++){
        row = row + " * ";
    }
    console.log(row);
}


for(let i=1; i<=num; i++){
    let row = " ";

    for(let j=1; j<=i; j++){
        row = row + " * ";
    }
    console.log(row);
}

