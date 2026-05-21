//js/contatos.js
import {db} from './firebase.js';
import { ref, onValue }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById("conteudo");
    if (!container) return;

    onValue(ref(db, "paginas/contatos"), (snapshot) => {

        container.innerHTML = "";

        if(!snapshot.exists()) {
            container.innerHTML = "<p>Conteúdo ainda não cadastrado.</p>";
            return;
        }

        snapshot.forEach(item => {
            const dados = item.val();

            const div = document.createElement("div");
            div.className = "item";

            div.innerHTML = `
                <div class="texto">
                 <h2>${dados.titulo || ""}</h2>
                 <div class="texto-sistema">
                 ${dados.texto || ""}
                 </div>
                </div>
            `;

            container.appendChild(div);
        });
    });
        });