/* ===================================
DASHBOARD.JS
=================================== */

import{auth, db} from "./firebase.js"; // Importa auth e db do firebase.js

import{onAuthStateChanged, signOut}
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import{ref, onValue, set}
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

/* ====================================
PROTEÇÃO DE ROTA 
==================================== */

onAuthStateChanged(auth, user => {
  if(!user) {

localStorage.removeltem("logado");
   window.location.href="index.html";
     return;    
  }
  localStorage.setltem("logado", "true");
  iniciarTempoReal();
});

/* =====================================
LEITURA EM TEMPO REAL 
===================================== */

function iniciarTempoReal() {

  // ===== SENSORES (ESP32) =====
  onValue(ref(db, "solaria/sensores/solo"), snap =>
    atualizar("solo", snap.val(), "%")
);

  onValue(ref(db, "solaria/sensores/luz"), snap =>
    atualizar("luz", snap.val()) // lux+classificação
);

  onValue(ref(db, "solaria/sensores/temperatura"), snap =>
    atualizar("temp", snap.val(), "°C")
);

  onValue(ref(db, "solaria/sensores/umidadeAr"), snap =>
    atualizar("ar", snap.val(), "%")
);

  // ===== CONTROLE =====

  onValue(ref(db, "solaria/controle"), snap => {
    const c= snap.val() || {};
    atualizarTexto("modo", c.modo === true? "🤖 AUTOMÁTICO":"🖐️ MANUAL");
    atualizarTexto("estadoBomba", c.bomba === true? "🟢 LIGADA":"🔴 DESLIGADA");

    // Bloqueio de botões no modo automático
    const btnLigar=
  document.querySelector(".ligar");
    const btnDesligar=
  document.querySelector(".desligar");

    if(btnLigar && btnDesligar) {
      const bloqueado= c.modo === true;
      btnLigar.disabled= bloqueado;
      btnDesligar.disabled= bloqueado;
    }
  });
}

  /* ======================================
  CONTROLES 
  ====================================== */

  window.setModo= function
  (modo) {
    set(ref(db, "solaria/controle/modo"), modo);
  };

  window.setBomba= function
  (estado) {
    set(ref(db, "solaria/controle/bomba"), estado);
  };

  /* =======================================
  LOGOUT
  ======================================= */

  window.logout= function() {
    signOut(auth).then(() => {

  localStorage.removeltem("logado");
    window.location.href=
  "index.html";
    });
  };

  /* ======================================
  FUNÇÕES AUXILIARES
  ====================================== */

  function atualizar(id, valor, sufixo="") {
    const el=
  document.getElementById(id);
    if(!el) return;

    if(valor === undefined || valor === null) {
      el.innerText="--";
      return;
    }
  
  /* ======================================
  LUMINOSIDADE COM CLASSIFICAÇÃO
  ====================================== */

  if(id === "luz") {
    sufixo="lx";
    let classificacao="";

    if(valor >= 0 && valor < 10)
  classificacao="-Muito Escuro";
    else if(valor >= 10 && valor < 50)
  classificacao="-Escuro";
    else if(valor >= 50 && valor < 300)
  classificacao="-Luz Fraca";
    else if(valor >= 300 && valor < 500)
  classificacao ="-Luz Moderada";
    else if(valor >= 500 && valor < 1000)
  classificacao="-Luz Adequada";
    else if(valor >= 1000 && valor < 2000)
  classificacao="-Luz Brilhante";
    else if(valor >= 2000)
  classificacao="-Luz Intensa";

    //🔽 AJUSTE 1 CASA DECIMAL

    const luxFormatado=
  Number(valor).toFixed(1);
    
    el.innerText='${luxFormatado}${sufixo}${classificacao}';
    return;
  }

  //Para demais sensores

  el.innerText='${valor}${sufixo}';
  }

  function atualizarTexto(id, texto) {
    const el= document.get.getElementById(id);
    if(el) el.innerText= texto;
  }
