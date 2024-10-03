const form = document.getElementById('meuFormulario');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');
const arrayCampo = [campoA, campoB];
console.log(arrayCampo[0]);


function validaCampo() {
    let v1 = arrayCampo[0];
    let v2 = arrayCampo[1];
    return v1 > v2
}

    form.addEventListener('submit', function(e) {
        let ValidaECampo = false;
        e.preventDefault();

        const mensagemSucesso = "O valor B está maior que o A, por isso está adequado.";
        const mensagemError = "O valor B está menor que o A, por isso operação falhou.";

        ValidaECampo = validaCampo (arrayCampo.value)
    if (ValidaECampo) {
        const containerMensagemSucesso = document.querySelector('#sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        campoA.value ='';
        campoB.value ='';

    } else {
        const containerMensagemErro = document.querySelector('#error-message')
        campoA.style.border = '1px solid red';
        document.querySelector('#error-message');
        containerMensagemErro.innerHTML = mensagemError;
        containerMensagemErro.style.display = 'block'
    
        }
    })
