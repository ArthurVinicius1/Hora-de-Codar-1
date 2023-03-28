var formas = prompt(
  "1.Retangulo\n" +
    "2.Quadrado\n" +
    "3.Losango\n" +
    "4.Trapézio\n" +
    "5.Paralelogramo\n" +
    "6.Triângulo\n" +
    "7.Circulo\n"
);

switch (formas) {
  case "1":
    var base = prompt("Qual valor da sua base? ");
    var altura = prompt("Qual valor da sua altura?");

    alert("A área do retangulo é de " + base * altura);
    break;

  case "2":
    var lado = prompt("Qual valor do seu lado? ");
    alert("A área do seu quadrado é de " + lado * lado);
    break;

  case "3":
    var diagonal_maior = prompt("Qual valor da sua diagonal maior? ");
    var diagonal_menor = prompt("Qual valor da sua diagonal menor? ");
    alert(
      "A área do seu Losango é de " + (diagonal_maior * diagonal_menor) / 2
    );
    break;

  case "4":
    var base_maior = prompt("Qual valor da sua base maior? ");
    var base_menor = prompt("Qual valor da sua base menor? ");
    var height = prompt("Qual valor da sua height?");

    alert(
      "A área do seu Trapézio é de " + ((base_maior + base_menor) * height) / 2
    );
    break;

  case "5":
    var base = prompt("Qual valor da sua base? ");
    var altura = prompt("Qual valor da sua altura?");

    alert("A área do paralelogramo é de " + base * altura);
    break;

  case "6":
    var base = prompt("Qual valor da sua base? ");
    var altura = prompt("Qual valor da sua altura?");

    alert("A área do triângulo é de " + (base * altura) / 2);
    break;

  case "7":
    var raio = prompt("Digite o raio do circulo? ");
    raio = parseFloat(raio);
    var area = Math.PI * Math.pow(raio, 2);
    alert("A área do circulo é de " + area.toFixed(2));
    break;
}
