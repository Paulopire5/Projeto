
var fieldNome = document.getElementById('nomeCompletoUtente');
var radioButtonGeneroM = document.getElementById('rbMasculino');
var radioButtonGeneroF = document.getElementById('rbFeminino');
var fieldDataNascimento = document.getElementById('dataNascimento');
var selectPaisNacionalidade = document.getElementById('paisNacionalidade');
var selectPaisNaturalidade = document.getElementById('paisNaturalidade');
var fieldRegiao = document.getElementById('regiaoUtente');
var fieldCidade = document.getElementById('cidadeUtente');
var selectDocumentoIdentificacao = document.getElementById('documentoIdentificacao');
var fieldDadosDocumento = document.getElementById('dadosDocumento');
var fieldNIF = document.getElementById('fieldNIF');
var fieldNISS = document.getElementById('fieldNISS');
var fieldVistoResidencia = document.getElementById('fieldVistoResidencia');
var fieldDuracaoVisto = document.getElementById('fieldDuracaoVisto');
var fieldProfissao = document.getElementById('fieldProfissao');
var selectSitProfissional = document.getElementById('selectProfissao');
var selectNivelEscolaridade = document.getElementById('nivelEscolaridade');


const candidaturaFile = '../scripts/candidatura.json';
var candidatura;
fetch(candidaturaFile)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        candidatura = JSON.parse(data);
        fieldNome.setAttribute('value', candidatura.nomeCompleto)
        switch (candidatura.genero) {
            case 'Masculino':
                radioButtonGeneroM.checked = true;
                break;
            case 'Feminino':
                radioButtonGeneroF.checked = true;
                break;
            default:
                break;
        }

        fieldDataNascimento.setAttribute('value', candidatura.dataNascimento);
        selectPaisNacionalidade.value = candidatura.paisNacionalidade;
        selectPaisNaturalidade.value = candidatura.paisNaturalidade;

        fieldRegiao.setAttribute('value', candidatura.regiao);
        fieldCidade.setAttribute('value', candidatura.cidade);

        selectDocumentoIdentificacao.value = candidatura.docIdentificacao;

        fieldDadosDocumento.setAttribute('value', candidatura.dadosDocumento);


        fieldNIF.setAttribute('value', candidatura.NIF);
        fieldNISS.setAttribute('value', candidatura.NISS);
        fieldVistoResidencia.setAttribute('value', candidatura.nVistoResidencia);
        fieldDuracaoVisto.setAttribute('value', candidatura.validadeVistoResidencia);

        fieldProfissao.setAttribute('value',candidatura.profissao);
        selectSitProfissional.value = candidatura.situacaoProfissional;
        selectNivelEscolaridade.value = candidatura.nivelEscolaridade;

    });


