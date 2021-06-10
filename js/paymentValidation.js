function validateCc(){
    var ccNum = document.forms["creditCard"]["ccNumber"].value;
    var holderName = document.forms["creditCard"]["holderName"].value;
    var expiration = document.forms["creditCard"]["expiration"].value;
    var ccv = document.forms["creditCard"]["ccv"].value;
    if ((ccNum == "") || (holderName == "") || (expiration == "") || (ccv == "")){
        alert("Missing Field");
        return false;
    }
    else{
        window.location.href='/html/Confirmation.html'
    }
}
function validatePayment(){
    var fullName = document.forms["payment"]["fullName"].value;
    var address1 = document.forms["payment"]["address1"].value;
    var city = document.forms["payment"]["city"].value;
    var state = document.forms["payment"]["state"].value;
    var zip = document.forms["payment"]["zip"].value;

    var ccNum = document.forms["creditCard"]["ccNumber"].value;
    var holderName = document.forms["creditCard"]["holderName"].value;
    var expiration = document.forms["creditCard"]["expiration"].value;
    var ccv = document.forms["creditCard"]["ccv"].value;
    
    if ((fullName == "") || (address1 == "") || (city == "") 
        || (state == "")|| (zip == "") || (ccNum == "") || (holderName == "") || 
        (expiration == "") || (ccv == "")){
        alert("Missing Field");
        return false;
    }
    else{
        window.location.href='/html/Confirmation.html'
    }
}
