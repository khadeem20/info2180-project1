/*document.addEventListener("DOMContentLoaded", function(){

    const email = document.getElementById('email');
    const message= document.getElementsByClassName('message');
    const form= document.getElementsByTagName('form');

    form.addEventListener('submit',(e) => {
           if (email.value === '' || email.value === null){
            message.innerText="Please enter a valid email address."
        }

        else{
            message.innerText= 'Thank you! Your email address' + email +
            'has been added to our mailing list!'
        }
    })

})*/


'use strict';

window.onload = loadjs;

function loadjs(){
    let button = document.querySelectorAll(".btn")[1];
        
    button.addEventListener('click', onClick);
}

function onClick(click){
    click.preventDefault();

    var email = document.getElementById("email").value;


    if(email === "" || email === null){
        document.getElementsByClassName("message")[0].innerText = "Please enter a valid email address.";
    }
    else{
        document.getElementsByClassName("message")[0].innerText= "Thank You! Your email address " + email + " has been added to our mailing list";
    }

}