const getColor = () =>{
    //create a random number 
    const randomNumber =Math.floor(Math.random() * 16777215);
    //convert the number to hexa value
    const randomCode = '#' + randomNumber.toString(16);
    //change the main body color with button click
    document.body.style.backgroundColor  = randomCode;
    //print the background color hexa value in the main page
    document.getElementById('ColorCode').innerText = randomCode;
    //copy the hexa value in cliipeboard
    navigator.clipboard.writeText(randomNumber);
}
//run the function on the button click
document.getElementById('Btn').addEventListener(
    "click",
    getColor

)
//intial calling
getColor();