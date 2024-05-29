// Pegando os elementos do HTML pelo ID
var formulario = document.getElementById("formulario");
var cep = document.getElementById("cep");

// Função responsável por buscar o CEP
function buscarCep(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Pegando o valor do INPUT DE CEP
  var valorDoCep = cep.value;

  console.log(valorDoCep);

  // Fazendo uma requisição para a API VIA CEP
  fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Pegando o elemento do HTML pelo ID
      var resultado = document.getElementById("resultado");

      // Adicionando o conteúdo no HTML
      resultado.innerText = `CEP: ${data.cep} - ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    });
}

// Adicionando um evento de SUBMIT (ENVIO) no formulário
formulario.addEventListener("submit", buscarCep);


// Função responsável por adicionar a máscara no CEP
function mascaraCep(event) {
  event.currentTarget.maxLength = 9

  console.log('EVENT', event)
  console.log('Current Target', event.currentTarget)


  var value = event.currentTarget.value
  
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  
  event.currentTarget.value = value

  return event
}

// Adicionando um evento de INPUT (DIGITAÇÃO) no campo de CEP
cep.addEventListener("keyup", mascaraCep);