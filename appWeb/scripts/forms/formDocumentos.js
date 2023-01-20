function criarFormDocumentos() {
    var div = document.createElement('div');
    div.classList.add("rendered--true")

    div.appendChild(document.createElement('hr'));

    var span = document.createElement('span');
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.marginLeft = '50px';;
    span.appendChild(document.createTextNode('⠀Comprovativo de morada:'));
    span.appendChild(input)
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.marginLeft = '155px';
    span.appendChild(document.createTextNode('⠀Passaporte:'));
    span.appendChild(input)
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.marginLeft = '205px';
    span.appendChild(document.createTextNode('⠀CPF:'));
    span.appendChild(input)
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    span = document.createElement('span');
    input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.marginLeft = '187px';
    span.appendChild(document.createTextNode('⠀CDAM:'));
    span.appendChild(input)
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    div.appendChild(document.createElement('hr'));

    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Submeter'));
    btn.classList.add('buttonSubmeter');
    div.appendChild(btn);


    elementDocumentos.appendChild(div);
}