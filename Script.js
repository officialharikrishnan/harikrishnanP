var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
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

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxyiZlquNQaDyO-7T9mh9RS24vgkf3tNGSNaWqmtqaCihO-5avzXFyIF2hrcLr2zBdB/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})