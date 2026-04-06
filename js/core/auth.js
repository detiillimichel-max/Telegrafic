// CONTROLE DE USUÁRIO

function getUser() {
    return localStorage.getItem("vibe_user");
}

function setUser(nome) {
    localStorage.setItem("vibe_user", nome);
}

function checkAuth() {
    const user = getUser();
    if (!user) {
        window.location.href = "login.html";
    }
}
