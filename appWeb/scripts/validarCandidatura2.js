var fieldTelefone = document.getElementById('telefoneUtente')
var fieldTelemovel = document.getElementById('telemovelUtente')
var fieldEmail = document.getElementById('emailUtente')
var selectOutroContacto = document.getElementById('outroContacto');
var dadosOutroContacto = document.getElementById('dadosOutroContacto');
var observacoes = document.getElementById('observacoes');
var radioButtonMoradaNacional = document.getElementById('rbNacional');
var radioButtonMoradaEstrangeira = document.getElementById('rbEstrangeira');

var fieldRua = document.getElementById('fieldRua');
var fieldDescricao = document.getElementById('fieldDescricao');
var fieldEdificio = document.getElementById('fieldEdificio');
var fieldPorta = document.getElementById('fieldPorta');
var fieldAndar = document.getElementById('fieldAndar');
var fieldLado = document.getElementById('fieldLado');
var fieldLugar = document.getElementById('fieldLugar');
var fieldLocalidade = document.getElementById('fieldLocalidade');
var fieldDistrito = document.getElementById('fieldDistrito');
var fieldConselho = document.getElementById('fieldConselho');
var fieldFreguesia = document.getElementById('fieldFreguesia');
var fieldCodPostal1 = document.getElementById('fieldCodPostal1');
var fieldCodPostal2 = document.getElementById('fieldCodPostal2');
var fieldLugarPostal = document.getElementById('fieldLugarPostal');


const candidaturaFile = '../scripts/candidatura.json';
var candidatura;
fetch(candidaturaFile)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        candidatura = JSON.parse(data);
        fieldTelefone.setAttribute('value', candidatura.telefone);
        fieldTelemovel.setAttribute('value', candidatura.telemovel);
        fieldEmail.setAttribute('value', candidatura.email);
        selectOutroContacto.value = candidatura.outroContacto;
        dadosOutroContacto.setAttribute('value', candidatura.dadosContacto);
        observacoes.setAttribute('value', candidatura.observacoes);
        switch (candidatura.moradaUtente) {
            case 'Nacional':
                radioButtonMoradaNacional.checked = true;
                break;
            case 'Estrangeiro':
                radioButtonMoradaEstrangeira.checked = true;
                break;
            default:
                break;
        }
        fieldRua.setAttribute('value', candidatura.rua);
        fieldDescricao.setAttribute('value', candidatura.descricaoRua);
        fieldEdificio.setAttribute('value', candidatura.edificio);
        fieldPorta.setAttribute('value', candidatura.porta);
        fieldAndar.setAttribute('value', candidatura.andar);
        fieldLado.setAttribute('value', candidatura.lado);
        fieldLugar.setAttribute('value', candidatura.lugar);
        fieldLocalidade.setAttribute('value', candidatura.localidade);
        fieldDistrito.setAttribute('value', candidatura.distrito);
        fieldConselho.setAttribute('value', candidatura.conselho);
        fieldFreguesia.setAttribute('value', candidatura.freguesia);
        fieldCodPostal1.setAttribute('value', candidatura.codigoPostal1);
        fieldCodPostal2.setAttribute('value', candidatura.codigoPostal2);
        fieldLugarPostal.setAttribute('value', candidatura.lugarPostal);
    });


