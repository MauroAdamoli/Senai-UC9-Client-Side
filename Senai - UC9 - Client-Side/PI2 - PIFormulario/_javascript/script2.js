function confere_login() {
  let login_json = '{"login": "NewUser"}';
  let v_login = JSON.parse(login_json);
  if (v_login.login == document.form.login.value)
    return true;
  else {
    alert("Login não confere com JSON!");
    document.form.login.focus();
    return false;
  }
}

function confere_senha() {

  let v_senha = JSON.parse('{"senha": "123%ABC"}');
  if (v_senha.senha == document.form.senha.value)
    return true
  else {
    alert("Senha não confere com JSON!")
    document.form.senha.focus()
    return false
  }
}

function validar_nome() {
  let value = document.getElementById("nome").value;
  let expressao = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!expressao.test(value)) {
    alert('Somente caracteres alfabéticos No nome');
    document.form.nome.focus();
    return false;
  }
  return true;
}


function verificar_campos() {
  let nome = document.getElementById("nome");
  if (validar(nome, "", "Nome") == false) return false;

  let cpf = document.getElementById("cpf");
  if (validar(cpf, "", "CPF ou CNPF") == false) return false;
  let tel = document.getElementById("tel");
  if (validar(tel, "", "Telefone") == false) return false;
  let cel = document.getElementById("cel");
  if (validar(cel, "", "Celular") == false) return false;
  let cep = document.getElementById("cep");
  if (validar(cep, "", "CEP") == false) return false;

  let login = document.getElementById("login");
  if (validar(login, "", "Login") == false) return false;

  let senha = document.getElementById("senha");
  if (validar(senha, "", "Senha") == false) return false;


  return true;

}

function validar(campo, valor_inicial, nome_campo) {
  if (campo.value == "" || campo.value == null || valor_inicial == campo.value) {
    alert('Conteúdo ' + nome_campo + ' não informado');
    campo.focus();
    return false;
  }
  return true;
}


function validar_tudo() {
  alert("Validando !");
  if (verificar_campos() && validar_nome() && confere_login() && confere_senha()) {
    document.getElementById("butassin").disabled = false;
    return true;
  }

  return false;
}

function limpa_formulário_cep() {
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
  document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
    document.getElementById('ibge').value = (conteudo.ibge);
  }
  else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  var cep = valor.replace(/\D/g, '');

  if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {

      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";
      document.getElementById('ibge').value = "...";

      var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      document.body.appendChild(script);

    }
    else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  }
  else {
    limpa_formulário_cep();
  }
};