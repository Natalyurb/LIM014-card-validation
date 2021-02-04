
 //Validar el numero de tarjeta//
 //Algoritmo de luhn//
export const validator = function () {
  return document.getElementById("userNum").value;
}

//Validacion de algoritmo de luhn//
export function luhnCheck(){
 let cardNum = validator();
 let cardNumSplit = cardNum.split("");
 let sum = 0;
 //validCard = 0;
 let singleNum = [], doubleNum = [], finalArry = undefined;
 if((!/\d{15,16}(~W[a-zA-Z])*$/g.test(cardNum)) || (cardNum.length > 16)) {
     return false;
 }
 
 if(cardNum.length === 15){
    for(let i = cardNumSplit.length-1; i>=0; i--){
       if(i % 2 === 0 ) {
           singleNum.push(cardNumSplit[i]);
       }else{
           doubleNum.push((cardNumSplit[i] * 2).toString( ));
       }
    } 
 }else if(cardNum.length === 16){
     for(let i = cardNumSplit.length-1; i>=0; i--){
         if(i % 2 !== 0 ) {
             singleNum.push(cardNumSplit[i]);
         }else{
             doubleNum.push((cardNumSplit[i] * 2).toString());
         }
      }
 }
 doubleNum = doubleNum.join("").split("");
 finalArry = doubleNum.concat(singleNum);
 for(let j = 0 ; j<finalArry.length; j++){
     sum += parseInt(finalArry[j],10); 
 }
 if(sum % 10 === 0){
    return true;
 }
 else{
   return false;
 }
}

export function maskify(){
 let cardNum = validator();
 let cardNumSplit = cardNum.split("");
 let first= cardNumSplit.slice(0,-4);
 let lastDigit= cardNumSplit.slice(-4)
 let mask = 0;
 let num="";
 let ultNum="";

    for (let i = 0, l = first.length-1; i <= l; i++) {
    num=num +"*"
    }

    ultNum=lastDigit.join('')
    mask = num + ultNum;
   return mask 
}