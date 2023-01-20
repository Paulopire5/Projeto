function changeForm(activeButton, child = false) {
    if (!child) {
        var selectedForm = document.getElementsByClassName("form--selected");
        selectedForm[0].classList.remove("form--selected");
    }
    for (var i = 0; i < formsColl.length; i++) {
        formsColl[i].setAttribute("hidden", "hidden");
    }

    if (activeButton == 1) {
        btnInscricao.classList.add("form--selected");
        elementInscricao.removeAttribute("hidden");
    } else if (activeButton == 2) {
        btnDocumentos.classList.add("form--selected");
        elementDocumentos.removeAttribute("hidden");
    } else if (activeButton == 3) {
        btnBeneficios.classList.add("form--selected");
        elementBeneficios.removeAttribute("hidden");
    } else if (activeButton == 4) {
        btnSubsistemas.classList.add("form--selected");
        elementSubsistemas.removeAttribute("hidden");
    } else if (activeButton == 5) {
        btnVerificacao.classList.add("form--selected");
        elementVerificacao.removeAttribute("hidden");
    } else if (activeButton == 6) {
        elementEntidades.removeAttribute("hidden");
    }
    renderizar(false, activeButton);
}

btnInscricao.addEventListener("click", function () {
    changeForm(1);
});

btnDocumentos.addEventListener("click", function () {
    changeForm(2);
});

btnBeneficios.addEventListener("click", function () {
    changeForm(3);
});

btnSubsistemas.addEventListener("click", function () {
    changeForm(4);
});

btnVerificacao.addEventListener("click", function () {
    changeForm(5);
});

renderizar(true, 1);
