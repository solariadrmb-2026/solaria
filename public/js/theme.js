document.addEventListener("DOMContentLoaded", ()=>{

    const body = document.body

    const THEMES=[
        { class:"theme-light",icon:},//padrão
        { class: "theme-dark", icon}
    ];

    function applyTheme(theme) {
        body.classList.remove("theme-light", "theme-dark");
        body.classList.add(theme.class);
        localStorage.setItem("theme", theme.class);
    }

    function initThemeToggle(){

        const toggle = document.querySelector("#darkToggle");
        if(!toggle)return;

    /*======================
    ESTADO INICIAL
    ========================*/
    const savedClass = localStorage.getItem("theme") || "theme-light";
    const currentTheme =
    THEMES.find(t=> t.class === savedClass) || THEMES[0];

    applyTheme(currentTheme);
    toggle.textContent = currentTheme.icon;

    /*===============================
    ALTERNAR TEMA
    =============================*/
    toggle.addEventListener("click",()=> {

        const currentIndex = THEMES.findIndex(t=>
            body.classList.contains(t.class)
        );

        const nextTheme =
        THEMES[(currentIndex + 1) % THEMES.length];

        applyTheme(nextTheme);
        toggle.textContent = nextTheme.icon;
    });
}

/**
 * Botão vem de HTML carregado via fetch
 */
const observer = new MutationObserver(()=>{
    if (document.querySelector("#darkToggle")){
        initThemeToggle();
        observer.disconnect();
    }
});

observer.observe(document.body,{
    childList: true,
    subtree:true
});

});
