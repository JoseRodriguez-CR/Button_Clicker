
console.log( "This is linked correctly!" )


function logButton(element) {
    element.innerText = "Logout";
    console.log("element clicked", element);
}


function displayMessage(likeMessage) {
    console.log(likeMessage);
    alert('Ninja was liked');
}

function hide( element ) {
    console.log( "Add definition button was remove" );
    element.remove();
}