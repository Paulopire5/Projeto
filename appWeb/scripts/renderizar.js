function renderizar(isSetup, selected) {
    if (!isSetup) {
        var renderizados = document.getElementsByClassName("rendered--true");
        while (renderizados.length) {
            renderizados[0].remove();
        }
    }
    if (selected == 1) {
        criarFormInscricao();
    } if (selected == 2) {
        criarFormDocumentos();
    } if (selected == 3) {
        criarFormBeneficios();
    } if (selected == 4) {
        criarFormSubsistemas();
    } if (selected == 5) {
        criarFormVerificacao();
    } if(selected == 6){
        criarFormEntidades();
    }
}
