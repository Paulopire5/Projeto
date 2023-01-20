function criarFormInscricao() {
    var div = document.createElement('div');
    div.classList.add("rendered--true")

    var legend = document.createElement('legend');
    legend.appendChild(document.createTextNode('⠀Dados da inscrição'));

    div.appendChild(legend)
    div.appendChild(document.createElement('hr'));
    div.appendChild(document.createTextNode('⠀Utente sem inscrição ativa.'));
    div.appendChild(document.createElement('br'));
    var span = document.createElement('span');
    span.classList.add('fila--btns');
    var btn1 = document.createElement('button');
    btn1.disabled = true;
    btn1.classList.add('btn--menu--disabled');
    btn1.style.marginLeft='15px'

    var btn2 = document.createElement('button');
    btn2.disabled = true;
    btn2.classList.add('btn--menu--disabled');

    var btn3 = document.createElement('button');
    btn3.disabled = true;
    btn3.classList.add('btn--menu--disabled');

    var btn4 = document.createElement('button');
    btn4.classList.add('btn--menu--enabled');

    var btn5 = document.createElement('button');
    btn5.classList.add('btn--menu--enabled');

    var btn6 = document.createElement('button');
    btn6.disabled = true;
    btn6.classList.add('btn--menu--disabled');

    btn1.appendChild(document.createTextNode('Fechar inscrição.'));
    btn2.appendChild(document.createTextNode('Alt. tipo utente.'));
    btn3.appendChild(document.createTextNode('Médico.'));
    btn4.appendChild(document.createTextNode('Nova inscrição.'));
    btn5.appendChild(document.createTextNode('Hist. inscrições.'));
    btn6.appendChild(document.createTextNode('Hist. médicos.'));

    span.appendChild(btn1);
    span.appendChild(btn2);
    span.appendChild(btn3);
    span.appendChild(btn4);
    span.appendChild(btn5);
    span.appendChild(btn6);

    div.appendChild(span);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('hr'));
    legend = document.createElement('legend');
    legend.appendChild(document.createTextNode('⠀Família'));

    div.appendChild(legend);

    span = document.createElement('span');

    var btn7 = document.createElement('button');
    btn7.classList.add('btn--menu--enabled');
    btn7.style.marginLeft='20px';

    var btn8 = document.createElement('button');
    btn8.classList.add('btn--menu--enabled');
    btn8.style.marginLeft='20px';

    btn7.appendChild(document.createTextNode('Associar família.'));
    btn8.appendChild(document.createTextNode('Hist. família.'));

    span.appendChild(btn7);
    span.appendChild(btn8);

    div.appendChild(span);

    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createTextNode('⠀⠀Sem processo de família associado.'));


    elementInscricao.appendChild(div);
}