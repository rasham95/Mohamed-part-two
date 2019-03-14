let inputEvent = 'casual';

let eventType = inputEvent;

switch(eventType){

case 'casual':

eventType='something comfy';

break;

case 'semi-formal':

eventType='a polo';

break;

case 'formal':

eventType='a suit';

break;

default:

eventType='anything you want';

break;

}

let inputTemp = 75;

let tempFahr = inputTemp;

if(tempFahr <54){

tempFahr='a coat';

} else if(53 < tempFahr && tempFahr < 71){

tempFahr='a jacket';

}else{

tempFahr='no jacket';

}

console.log(`Since it is ${inputTemp} degrees and you are going to a ${inputEvent}, you should wear ${eventType} and ${tempFahr}.`);

Attachments area
