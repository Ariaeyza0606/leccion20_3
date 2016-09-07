window.addEventListener("load", function() {
    var calcular = document.getElementById("calcular");
    calcular.addEventListener("click", function() {
        var seconds = parseInt(document.getElementById("seconds").value);
        var firstNumber = parseInt(document.getElementById("firstNumber").value);
        intervalo (firstNumber, seconds);
    });

    function intervalo (firstNumber, seconds){
        setInterval(function({
            document.getElementById("resultado").innerHTML = firstNumber++; }, seconds*1000);
        document.getElementById("sconds").value = "";
        document.getElementById("firstNumber").value = "";
    }
});