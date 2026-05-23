// js/menu.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged }
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, get }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {

    /* ====================================================
    CAMINHO DO MENU
    ==================================================== */
    const menuPath = "components/menu.html";

    fetch(menuPath) 
    .then(res => {
        if (!res.ok) throw new Error("Menu não encontrado");
        return res.text();
    })
    .then(html => {

        const container = document.getElementById("menu");
        if (!container) return;

        container.innerHTML = html;

        /* =================================================
        ELEMENTOS
        ================================================= */
        const toggle = container.querySelector(".menu-toggle");
        const menu = container.querySelector(".menu");
        const submenuToggles = container.querySelectorAll(".submenu-toggle");

        const dashboardItem = container.querySelector(".painel-item");
        const adminItem = container.querySelector(".admin-item");

        /* ================================================
        MENU MOBILE
        ================================================ */
        if ( toggle && menu ) {
            toggle.addEventListener("click", e => {
                e.stopPropagation();
                menu.classList.toggle("show");
                toggle.classList.toggle("active");
            });

            document.addEventListener("click", e => {
                if(!menu.contains(e.target) && !toggle.contains(e.target)) {
                    menu.classList.remove("show");
                    toggle.classList.remove("active");
                }
            });
        }

        /* =================================================
        SUBMENU MOBILE
        ================================================ */
        submenuToggles.forEach(btn => {
            btn.addEventListener("click", e => {
                if (window.innerWidth > 768) return;

                e.preventDefault();

                const submenu= btn.nextElementSibling;

                submenuToggles.forEach(other => {
                    if (other !== btn) {
                        other.nextElementSibling.classList.remove("show");
                    }
                });

                submenu.classList.toggle("show");
            });
        });

        /* ================================================
        CONTROLE DE ACESSO (Firebase)
        =============================================== */
        if (dashboardItem) dashboardItem.style.display = "none";
        if (adminItem) adminItem.style.display = "none";

        onAuthStateChanged( auth, async user => {

            // Dashboard: usuário logado
                  if (dashboardItem) {
                    dashboardItem.style.display = user ? "list-item" : "none";
                  }

                  //Admin
                          if (!user || !adminItem) {
                            if (adminItem) adminItem.style.display = "none";
                            return;
                          }

                          try {
                            const snap = await get(ref(db, `users/${user.uid}`));
                            const data = snap.val();
                            const isAdmin = data && data.role === "admin";
                            adminItem.style.display = isAdmin ? "list-item" : "none";
                          } catch (err) {
                            console.error("Erro ao verificar admin:", err);
                            adminItem.style.display = "none";
                        
                          }
                        });

                    })
                    .catch(err => console.error("Erro ao carregar menu:", err));
                });