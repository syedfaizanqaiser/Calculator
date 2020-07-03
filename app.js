function getNumber(num) {
    var result = document.getElementById("inputfield");
    if(result.value == "0"){
        var result = document.getElementById("inputfield");
        result.value = '';
    }
    result.value += num;
}
function clearScr() {
    var inputtext = document.getElementById('inputfield');
    inputtext.value = "0";
}
function backspace() {
    var back = document.getElementById('inputfield');
    back.value = back.value.substring(0, back.value.length - 1);
}
function cal(){
    var calculation = document.getElementById("inputfield");
    calculation.value = eval(calculation.value);
    }

function negativeval(){
    var neg_sign = document.getElementById("inputfield");
    neg_sign.value = -neg_sign.value;
    
}
function reciprocal(nu){
    var a = document.getElementById('inputfield');
    a.value += nu;

}
function square(){ 
    var sq_val = document.getElementById('inputfield');
    sq_val.value = sq_val.value+"*"+sq_val.value;
 
}
function sqRoot(){
    var SQR = document.getElementById('inputfield');
    SQR.value = eval(Math.sqrt(SQR.value));
}
function percentage(){
    var per = document.getElementById('inputfield');
    per.value = eval(per.value/100);
}







