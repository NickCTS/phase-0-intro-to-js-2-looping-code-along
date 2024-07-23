// Code your solutions in this file 
function writeCards(Names) {
    let thankYouMessages = []; // Use a different name for the array
  
    for (let i = 0; i < Names.length; i++) {
      let message = `Thank you, ${Names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message); // Add the message to the array
    }
  
    return thankYouMessages;
  }
  
  let Names = ["Guadalupe", "Ollie", "Aki"];
  console.log(writeCards(Names));

function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
}
countDown(10);