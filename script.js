function adicionarValor(valor) {
    document.getElementById('resultado').value += valor;
}

function limpar() {
    document.getElementById('resultado').value = '';
}

function calcular() {
    try {
        let expressao = document.getElementById('resultado').value;

        // Substitui o '%' por ' * 0.01' na expressão
        expressao = expressao.replace(/(\d+)%/g, (match, p1) => {
            return `(${p1} * 0.01)`; // Converte a porcentagem para decimal
        });

        // Verifica se a expressão contém uma divisão por zero
        if (/\/\s*0/.test(expressao)) {
            throw new Error("Divisão por zero");
        }

        // Avalia a expressão final
        const resultado = eval(expressao);
        document.getElementById('resultado').value = resultado;
    } catch (e) {
        document.getElementById('resultado').value = 'Erro';
    }
}
