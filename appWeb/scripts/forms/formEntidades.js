function criarFormEntidades() {
    var main = document.createElement('main');
    main.classList.add("rendered--true");
    main.style.width = '700px';
    main.style.height = '400px';

    var legend = document.createElement('legend');
    legend.appendChild(document.createTextNode('⠀Pesquisa'));
    main.appendChild(legend);
    main.appendChild(document.createElement('hr'));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Código:'));
    var input = document.createElement('input');
    input.style.marginLeft = '70px';
    span.appendChild(input);
    main.appendChild(span);
    main.appendChild(document.createElement('br'));

    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Desc. Abrev.:'));
    var input = document.createElement('input');
    input.style.marginLeft='35px';
    span.appendChild(input);
    main.appendChild(span);
    main.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Descrição:'));
    input = document.createElement('input');
    input.style.marginLeft = '53px';
    span.appendChild(input);
    main.appendChild(span);
    main.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Tipo:'));
    var select = document.createElement('select');
    select.style.marginLeft= '90px';
    var option = document.createElement('option');
    option.value = 'Escolha uma opção';
    option.text = 'Escolha uma opção';
    option.setAttribute('selected', 'true');
    option.setAttribute('disabled', 'true');
    select.appendChild(option);
    for (var i = 0; i < tipoEntidades.length; i++) {
        option = document.createElement('option');
        option.value = tipoEntidades[i];
        option.text = tipoEntidades[i];
        select.appendChild(option);
    }
    span.appendChild(select);
    main.appendChild(span);
    main.appendChild(document.createElement('br'));

    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀País:'));
    select = document.createElement('select');
    select.style.marginLeft = '94px'
    option = document.createElement('option');
    option.value = 'Escolha uma opção';
    option.text = 'Escolha uma opção';
    option.setAttribute('selected', 'true');
    option.setAttribute('disabled', 'true');
    select.appendChild(option);
    for (var i = 0; i < paises.length; i++) {
        option = document.createElement('option');
        option.value = paises[i];
        option.text = paises[i];
        select.appendChild(option);
    }
    span.appendChild(select);
    main.appendChild(span);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode('Pesquisar'));
    btn.style.backgroundColor='black';
    btn.style.color = 'white';
    btn.style.marginLeft = '200px';
    span.appendChild(btn);
    main.appendChild(document.createElement('br'));


    legend = document.createElement('legend');
    legend.appendChild(document.createTextNode('⠀Resultados pesquisa'));
    main.appendChild(legend);
    main.appendChild(document.createElement('hr'));
    var span = document.createElement('span');
    var btnPesquisar = document.createElement('button');
    btnPesquisar.appendChild(document.createTextNode('Selecionar'));
    btnPesquisar.style.backgroundColor='black';
    btnPesquisar.style.color = 'white';
    span.appendChild(btnPesquisar);
    var btnVoltar = document.createElement('button');
    btnVoltar.appendChild(document.createTextNode('Voltar'));
    btnVoltar.style.marginLeft='10px'
    btnVoltar.style.backgroundColor='black';
    btnVoltar.style.color = 'white';
    span.appendChild(btnVoltar);

    main.appendChild(span);
    main.appendChild(document.createElement('br'));

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var cabecalho = ['', 'Código', 'Descrição', 'Tipo', 'País'];
    for (var i = 0; i < cabecalho.length; i++) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(cabecalho[i]));
        tr.appendChild(th);
    }

    for (var r = 0; r < tabelaEntidades.length; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c < tabelaEntidades[r].length; c++) {
            if (c == 0) {
                var td = document.createElement('td');
                var input = document.createElement('input')
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio');
                td.appendChild(input)
                tr.appendChild(td);
            }
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(tabelaEntidades[r][c]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    main.appendChild(table);

    elementEntidades.appendChild(main);

}