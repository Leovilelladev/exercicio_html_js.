const form = document.getElementById('meuFormulario');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');

const mensagemSucesso = "O valor B está maior que o A, por isso está adequado.";
const mensagemError = "O valor B está menor que o A, por isso operação falhou.";

form.addEventListener('submit', function(event) {
        event.preventDefault();
        verificar();
    })


    function verificar(){
        let valorA = parseFloat(campoA.value);
        let valorB = parseFloat(campoB.value);


        if(valorB > valorA){
            const containerMensagemSucesso = document.querySelector('#sucess-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            document.querySelector('#error-message').style.display = 'none';

            campoA.value = '';
            campoB.value = '';
            campoA.style.border = '';
            campoB.style.border = '';
        }
        else {
            const containerMensagemErro = document.querySelector('#error-message');
            containerMensagemErro.innerHTML = mensagemError;
            containerMensagemErro.style.display = 'block';

            document.querySelector('#sucess-message').style.display = 'none';

            campoA.style.border = '1px solid red';
            campoB.style.border = '1px solid red';
        }
    }