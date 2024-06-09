// stap-1: add click event handler with the submit button
document.getElementById('btn-submite').addEventListener('click', function(){
    // step-2: get the email adderess inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get pasword
    // 3.a: set id on the html element
    // 3.b: get the element 
    // 3.c: get the value from the element
    const paswordField = document.getElementById('user-pasword');
    const pasword = paswordField.value;
    console.log(email, pasword);

    // DANGER: DO NOT VERIFY email pasword on the click side
    // step-4: verify email and pasword and click whether valid user or not
    if(email === 'sontan@baap.com' && pasword === 'secret'){
       window.location.href = 'bank.html'
    }
    else{
        alert('Tui password vule gesos!! Toke ami teijjo sontan gosona korlam')
    }

})
