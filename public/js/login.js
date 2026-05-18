window.login = function () {

  const email =
    document.getElementByld("email").value.trim();
  const senha =
    document.getElementByld("senha").value.trim();
  const msg =
    document.getElememtByld("msg");

  if (!email || !senha) {
    msg.innerText = "Preencha email e senha";
    msg.style.color = "red";
    return; 
  }

  msg.innerText = "Conectando...";
  msg.style.color = "black"; 

  signlnWithEmailAndPassword(auth, email, senha)
   .then(() => {
     localStorage.setltem("logado", "true");
     msg.innerText = "Login realizado com sucesso!",
       msg.style.color = "green";

         setTimeout(() =>{
           window.location.href = "dashboard.html"; 
         }, 800);
   })
  .catch(err =>{
    console.error("Erro login:", err);
    msg.innerText = "Email ou senha inválidos";
    msg.style.color ="red";
  });
};
