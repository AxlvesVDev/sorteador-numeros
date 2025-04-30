// Selecionando os elementos do formulário
var inputQtd = document.getElementById("qtd")
var inputMin = document.getElementById("min")
var inputMax = document.getElementById("max")
var btnSortear = document.getElementById("btn-sortear")
var resultadoContainer = document.querySelector(".resultado-container")

// Evento de clique no botão
btnSortear.onclick = function () {
  // Pegando os valores digitados
  var qtd = parseInt(inputQtd.value)
  var min = parseInt(inputMin.value)
  var max = parseInt(inputMax.value)

  // Validação simples
  if (isNaN(qtd) || isNaN(min) || isNaN(max)) {
    alert("Preencha todos os campos corretamente!")
    return
  }

  if (min >= max) {
    alert("O número mínimo deve ser menor que o máximo!")
    return
  }

  if (qtd > (max - min + 1)) {
    alert("Quantidade maior que o intervalo disponível!")
    return
  }

  // Geração dos números
  var numeros = []
  while (numeros.length < qtd) {
    var n = Math.floor(Math.random() * (max - min + 1)) + min
    if (numeros.indexOf(n) === -1) {
      numeros.push(n)
    }
  }

  // Limpa resultados anteriores
  resultadoContainer.innerHTML = ""

  // Exibe os números um por um com animação
  for (var i = 0; i < numeros.length; i++) {
    (function (i) {
      setTimeout(function () {
        var span = document.createElement("span")
        span.classList.add("numero-sorteado")
        span.textContent = numeros[i]
        span.style.opacity = 0
        span.style.transform = "translateY(-20px)"
        resultadoContainer.appendChild(span)

        setTimeout(function () {
          span.style.transition = "all 0.4s ease"
          span.style.opacity = 1
          span.style.transform = "translateY(0)"
        }, 50)
      }, i * 500)
    })(i)
  }
}