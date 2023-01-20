var selectACES = document.getElementById('selectACES');
var selectCentroSaude = document.getElementById('selectCentroSaude');
var selectUnidadeFuncional = document.getElementById('selectUnidadeFuncional');
var fieldMedicoFamilia = document.getElementById('medicoFamilia');
var rbNacional = document.getElementById('rbNacional');
var rbEstrangeira = document.getElementById('rbEstrangeira');
var residencia = document.getElementById('fieldResidencia')
var fieldUltimoContacto = document.getElementById('fieldUltimoContacto');
var documentoIdentificacao = document.getElementById('selectDocumentoIdentificacao');
var duracaoInscricao = document.getElementById('fieldDuracao');

const candidaturaFile = '../scripts/candidatura.json';
var candidatura;
fetch(candidaturaFile)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        candidatura = JSON.parse(data);

        selectACES.value = candidatura.ACES;
        selectCentroSaude.value = candidatura.centroSaude;
        selectUnidadeFuncional.value = candidatura.unidadeFuncional;

        fieldMedicoFamilia.setAttribute('value', candidatura.medicoFamilia);

        switch (candidatura.moradaTipologia) {
            case 'Nacional':
                rbNacional.checked = true;
                break;
            case 'Estrangeiro':
                rbEstrangeira.checked = true;
                break;
            default:
                break;
        }

        residencia.setAttribute('value',candidatura.residencia);
        fieldUltimoContacto.setAttribute('value',candidatura.ultimoContactoCSP)

        documentoIdentificacao.value=candidatura.tipoDocumentoIdentificacao;
        duracaoInscricao.setAttribute('value',candidatura.duracaoInscricao);
    });