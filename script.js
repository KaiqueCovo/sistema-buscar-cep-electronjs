// Pegando os elementos do HTML pelo ID
var formulario = document.getElementById("formulario");
var cep = document.getElementById("cep");
var tbody = document.getElementById("tbody");

var listaDeCeps = [];

// Função responsável por buscar o CEP
function buscarCep(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Pegando o valor do INPUT DE CEP
  var valorDoCep = cep.value;

  // Fazendo uma requisição para a API VIA CEP
  fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Adicionando o CEP na lista de CEPs
      listaDeCeps.push(data)

      var novaLinha = tbody.insertRow();

      var celulaCep = novaLinha.insertCell(0);
      var celulaLogradouro = novaLinha.insertCell(1);
      var celulaBairro = novaLinha.insertCell(2);
      var celulaLocalidade = novaLinha.insertCell(3);
      var celulaUf = novaLinha.insertCell(4);

      console.log('teste', listaDeCeps.reverse())
      listaDeCeps.reverse().forEach(item => {

        celulaCep.innerText = item.cep;
        celulaLogradouro.innerText = item.logradouro || "Não informado";
        celulaBairro.innerText = item.bairro || "Não informado";
        celulaLocalidade.innerText = item.localidade;
        celulaUf.innerText = item.uf;


      })


      // Pegando o elemento do HTML pelo ID
      // var resultado = document.getElementById("resultado");

      // Adicionando o conteúdo no HTML
      // resultado.innerText = `CEP: ${data.cep} - ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    });
}

// Adicionando um evento de SUBMIT (ENVIO) no formulário
formulario.addEventListener("submit", buscarCep);


// Função responsável por adicionar a máscara no CEP
function mascaraCep(event) {
  event.currentTarget.maxLength = 9

  var value = event.currentTarget.value
  
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  
  event.currentTarget.value = value

  return event
}

// Adicionando um evento de INPUT (DIGITAÇÃO) no campo de CEP
cep.addEventListener("keyup", mascaraCep);