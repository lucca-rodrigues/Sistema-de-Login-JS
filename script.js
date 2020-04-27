function entrar(){
  var area = document.getElementById('login');
  var user = prompt('Digite seu nome?');
  var pass = prompt('Digite sua senha?');


  if (user === 'alpar' && pass === '12345'){
      console.log('Login realizado com Sucesso!');
      area.innerHTML = 'Área de Membros ';
  }
  else{
    alert('Login Incorreto, tente novamente.');
  }
}