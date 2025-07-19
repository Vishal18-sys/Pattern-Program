    // Diamond Star pattern

let num = 6;

for(let i=1; i<=num; i++){
    let row = " ";

    for(let j=num; j>i; j--){
        row = row + "   ";
    }

    for(let k=1; k<=(2*i-1); k++){
        row = row + " * ";
    }

    console.log(row);
}

for(let i=num-1; i>=1; i--){
    let row = " ";

    for(let j=num; j>i; j--){
        row = row + "   ";
    }

    for(let k=1; k<=(2*i-1); k++){
        row = row + " * ";
    }

    console.log(row);
}