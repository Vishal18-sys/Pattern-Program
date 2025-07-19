        // Right Side Triangle or Reverse Triangle Pattern

let num = 6;

for(let i=num; i>1; i--){
    let row = " ";

    for(let j=1; j<=num-i; j++){
        row = row + "   ";
    }

    for(let k=1; k<=i; k++){
        row = row + " * ";
    }

    console.log(row);
}

for(let i=1; i<=num; i++){
    let row = " ";

    for(let j=num; j>i; j--){
        row = row + "   ";
    }

    for(let k=1; k<=i; k++){
        row = row + " * ";
    }

    console.log(row);
}

