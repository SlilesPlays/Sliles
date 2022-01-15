function cTof(celsius)
{
    var cTemp = celsius;
    var cTofar = cTemp * 9 / 5 + 32;
    var message = cTemp+'C is '+ cTofar + ' F.'; 
         console.log(message);
}

function fToc(fahrenheit)
{
    var fTemp = fahrenheit;
    var fTocel = (fTemp - 32) *  5 / 9;
    var message = fTemp+' F is ' + fTocel + 'C.';
    console.log(message)
}
cTof(29); // celsuis
fToc(41); // fahrneheit 