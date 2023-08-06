var c=document.getElementById('i2').value;
var k=document.getElementById('i3').value;
function ClickF()
{
    var f=document.getElementById('i1').value;
    var g=parseFloat(f);
    // console.log();
    document.getElementById('h2').innerHTML=(g-32)/(1.8);
    document.getElementById('h3').innerHTML=(g-32)/(1.8)+273;
}
function ClickC()
{
    var f=document.getElementById('i2').value;
    var g=parseFloat(f);
    // console.log();
    document.getElementById('h1').innerHTML=1.8*(g)+32;
    document.getElementById('h3').innerHTML=g+273;
}
function ClickR()
{
    var f=document.getElementById('i3').value;
    var g=parseFloat(f);
    // console.log();
    document.getElementById('h2').innerHTML=g-273;
    document.getElementById('h1').innerHTML=1.8*(g-273)+32;
}
