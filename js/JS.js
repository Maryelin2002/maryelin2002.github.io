alert("Hola, Bienvenido al CV de Maryelin :)");

function comparar()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    
    if (num1>num2) {
        rs = "El número mayor es: "+num1+" y el número menor es: "+num2;
        alert(rs);
    }else if (num1==num2){
        rs = "Ambos números son iguales";
        alert(rs);
    }else{
        rs = "Número mayor es: "+num2+" y el número menor es: "+num1;
        alert(rs);
    }
}

function prom()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);

    var prom = (num1 + num2)/2;
    res = "El promedio es: "+prom;
    document.getElementById('res').value = res;
}

function suma()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 + num2;
    document.getElementById('res').value = res;
}

function resta()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 - num2;
    document.getElementById('res').value = res;
}

function multiplicar()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 * num2;
    document.getElementById('res').value = res;
}

function dividir()
{
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var res = num1 / num2;
    document.getElementById('res').value = res;
}