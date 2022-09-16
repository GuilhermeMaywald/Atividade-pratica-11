/*
a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

*/

{
    function recebeCPFUsuario(cpf) {
        if (cpf.length == 11) {
            return true;
        } else {
            return false;
        }
    }
    let recebeCPF = prompt('Digite seu CPF (apenas números): ');
    let cpfValido = recebeCPFUsuario(recebeCPF);
    function cpfFormatado(cpf,cpfVerdadeiro) {
        if (cpfVerdadeiro == true) {
            let parte1 = cpf.slice(0, 3);
            let parte2 = cpf.slice(3, 6);
            let parte3 = cpf.slice(6, 9);
            let parte4 = cpf.slice(9, 11);
            return cpf = `${parte1}.${parte2}.${parte3}-${parte4}`;
        } else {
            return 'Digite um CPF válido!';
        }
    }
    alert(cpfFormatado(recebeCPF, cpfValido));
}
