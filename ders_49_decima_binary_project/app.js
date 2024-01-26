"use strict";
convertDecimaltoBinary(6);

function convertDecimaltoBinary(number) {

    let binary="";
   
    while (true) //while true omur boyu donerim demek!
    {
        
        binary+=(number%2).toString();
        //binary+=number%2+"";
        number=Math.floor(number/2);
        if(number==1){
            //artik bolmke yok donguden cik
            binary+=1;
            console.log(typeof binary);

            break;
        }
    }
    let result =reverse(binary);
    console.log(result);
}


function reverse(binary) {
    let reverseBinary="";
    for(let i = binary.length-1 ; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
    
}