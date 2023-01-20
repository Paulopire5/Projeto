function criarFormBeneficios() {
    var div = document.createElement('div');
    div.classList.add("rendered--true")
    var leg = document.createElement('legend');
    leg.appendChild(document.createTextNode('⠀RECM'));
    div.appendChild(leg);
    div.appendChild(document.createElement('hr'));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Motivo:'));
    var input = document.createElement('select');
    input.style.marginLeft = '50px';

    var option = document.createElement('option');
    option.value = 'Escolha uma opção';
    option.text = 'Escolha uma opção';
    option.setAttribute('disabled', 'true');
    option.setAttribute('selected', 'true');
    input.appendChild(option);

    var opcs = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];
    for (var i = 0; i < opcs.length; i++) {
        option = document.createElement('option');
        option.value = opcs[i];
        option.text = opcs[i];
        input.appendChild(option);
    }
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Descrição: '));
    var input = document.createElement('input');
    input.style.width='80%';
    input.style.marginLeft = '29px';
    input.setAttribute('type', 'text');
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Data ínicio:'));
    var input = document.createElement('input');
    input.style.marginLeft = '27px';

    input.setAttribute('type', 'date');
    input.setAttribute('min', '2010-01-01');
    input.setAttribute('max', '2050-12-31');
    span.appendChild(input);

    span.appendChild(document.createTextNode('⠀Data fim:'));
    var input = document.createElement('input');
    input.style.marginLeft = '5px';
    input.setAttribute('type', 'date');
    input.setAttribute('min', '2010-01-01');
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    div.appendChild(document.createElement('hr'));
    //--------------------------------------------------------------------------//
    var leg = document.createElement('legend');
    leg.appendChild(document.createTextNode('⠀Isenção Taxa'));
    div.appendChild(leg);

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Motivo:'));
    var input = document.createElement('select');
    input.style.marginLeft = '50px';
    var option = document.createElement('option');
    option.value = 'Escolha uma opção';
    option.text = 'Escolha uma opção';
    option.setAttribute('disabled', 'true');
    option.setAttribute('selected', 'true');
    input.appendChild(option);

    for (var i = 0; i < motivosIsensaoTaxa.length; i++) {
        option = document.createElement('option');
        option.value = motivosIsensaoTaxa[i];
        option.text = motivosIsensaoTaxa[i];
        input.appendChild(option);
    }
    span.appendChild(input);

    div.appendChild(span);
    div.appendChild(document.createElement('br'));


    span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Descrição: '));
    var input = document.createElement('input');
    input.style.marginLeft = '29px';
    input.style.width = '80%';
    input.setAttribute('type', 'text');
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode('⠀Data ínicio:'));
    var input = document.createElement('input');
    input.style.marginLeft = '27px';
    input.setAttribute('type', 'date');
    input.setAttribute('min', '2010-01-01');
    input.setAttribute('max', '2050-12-31');
    span.appendChild(input);

    span.appendChild(document.createTextNode('⠀Data fim:'));
    var input = document.createElement('input');
    input.style.marginLeft = '5px';
    input.setAttribute('type', 'date');
    input.setAttribute('min', '2010-01-01');
    span.appendChild(input);
    div.appendChild(span);
    div.appendChild(document.createElement('br'));

    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Adicionar benefícios'));
    btn.classList.add('buttonSubmeter');
    btn.style.marginTop='30px';
    div.appendChild(btn);


    elementBeneficios.appendChild(div);

}