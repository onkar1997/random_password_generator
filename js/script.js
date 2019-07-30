var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
var tmp = '';

function generatePass(plength){
    tmp = '';
    for(i=0; i<plength; i++){
        tmp += keylist.charAt(Math.random()*keylist.length); 
    }
    return tmp;
}

function populateForm(enterLength){
    document.passGen.output.value = generatePass(enterLength);
}

