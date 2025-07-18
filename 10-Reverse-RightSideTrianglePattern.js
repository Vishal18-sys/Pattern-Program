        //  Reverse Right Side Triangle Pattern

let num = 6 ;
for(let i = num; i>=1; i--){
    let row = " ";

    for(let j=1; j<=num-i; j++){
        row = row + "   "; 
    }

    for(let k=1; k<=i; k++){
        row = row + " * ";
    }

    console.log(row);
}        