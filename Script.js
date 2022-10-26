var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
        // e.preventDefault()
        console.log("hhhh");
        nameError.innerHTML='write name';
        return false;
    }
    if(!name.match(/^[A-Za-z]/)){
        nameError.innerHTML='entername';
        return false;
    }
    nameError.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
    return true;
}
function validateEmail(){
    
    var email=document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML='Email is rquired'
        return false
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML='enter valied email address'
        return false;
    }
    emailError.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    if(message.length == 0){
        var size=30;
        var balanceSize=size-message.length;
        // if(balanceSize>0){
        messageError.innerHTML= balanceSize + 'more character required';
        return false;
        // }
    }
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() ){
        submitError.innerHTML='need to fill details';
        console.log("err");
        return false;
    }else{
    return true
    }

}
function clearForm(){
    nameError.innerHTML='';
    emailError.innerHTML='';
    messageError.innerHTML='';
}