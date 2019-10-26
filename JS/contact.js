function sendMensaje(){
    let nombre, email,mensaje;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    mensaje = document.getElementById('form_message').value;

    Email.send({
        Host : "smtp.gmail.com", //servidor
        Username : "veramgro@gmail.com", //Micorrepo
        Password : "", //mic
        To : 'veramgro@gmail.com', //a donde lo mando
        From : email, //quien me lo envia
        Subject : nombre,
        Body : mensaje
    }).then(
      message => alert(message)
    );
}



/*function getEmail(){
    let email;
    email = document.getElementById('form_email');
    alert(email.value);
}
function getMensaje(){
    let mensaje;
    mensaje = document.getElementById('form_message');
    alert(mensaje.value);
}
alert(nombre+'\n'+email+'\n'+mensaje);
*/
