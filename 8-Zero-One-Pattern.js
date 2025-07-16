            // Print trangle with the help of 0 and 1

let a;
for(let i=1; i<=7; i++){
    let row = "";

    if( i%2 != 0){
        a = 1;
    }else{
        a = 0;
    }

    for(let j=1; j<=i; j++){
        row =row + a + " ";

        if(a == 0){
            a = 1;
        }else{
            a = 0;
        }
    }
    console.log(row);
}