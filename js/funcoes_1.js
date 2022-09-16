/*
a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

986.848.766-87
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
    alert(recebeCPFUsuario(recebeCPF));

    function cpfFormatado(cpf) {
        if (cpf == true) {
            let parte1 = cpf.slice(0, 3);
            let parte2 = cpf.slice(4, 7);
            let parte3 = cpf.slice(8, 11);
            let parte4 = cpf.slice(12, 14);
            return cpf = `${parte1}.${parte2}.${parte3}-${parte4}`;
        }
    }
    alert(cpfFormatado(cpf));
}
