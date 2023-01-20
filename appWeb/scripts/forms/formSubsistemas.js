function criarFormSubsistemas() {

    var div = document.createElement('div');
    div.classList.add("rendered--true")
    div.appendChild(document.createElement('hr'));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Entidade:'));
    var input = document.createElement('input');
    input.setAttribute('disabled', 'true');
    input.style.marginLeft= '60px';
    const btnEntidades = document.createElement('button');
    btnEntidades.setAttribute('id', 'btn-entidades');
    btnEntidades.appendChild(document.createTextNode('Selecionar entidade'));
    btnEntidades.style.backgroundColor='black';
    btnEntidades.style.color = 'white';
    btnEntidades.style.marginLeft='10px';
    btnEntidades.addEventListener("click", function () {
        changeForm(6, true);
    })
    span.appendChild(input);
    span.appendChild(btnEntidades);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Nº Benefício:'));
    input = document.createElement('input');
    input.style.marginLeft= '35px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Tipo doc:'));
    input = document.createElement('input');
    input.style.marginLeft= '61px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Nº Cartão / Doc:'));
    input = document.createElement('input');
    input.style.marginLeft= '10px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Data emissão:'));
    input = document.createElement('input');
    input.style.marginLeft= '29px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Válido de:'));
    input = document.createElement('input');
    input.style.marginLeft= '58px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Válido até:'));
    input = document.createElement('input');
    input.style.marginLeft= '54px';
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('⠀Submeter'));
    btn.style.marginTop='20px';
    btn.classList.add('buttonSubmeter');
    div.appendChild(btn);

    elementSubsistemas.appendChild(div);
}