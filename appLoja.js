// Função para alterar a quantidade de um produto
function alterarQtd(produto, alterar) {
    // Seleciona os elementos HTML correspondentes à quantidade, valor e total do produto
    const quantidade = document.getElementById('quantidade_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);

    // Verifica se a quantidade é 0 e se a ação é diminuir
    if (alterar == '-' && quantidade.innerHTML == 0) {
        alert('Atenção! A quantidade não deve ser menor que 0.'); // Exibe um alerta
    } else {
        // Altera a quantidade: incrementa ou decrementa
        alterar == "+" ? quantidade.innerHTML++ : quantidade.innerHTML--;

        // Calcula o valor total do produto
        const valorTotal = quantidade.innerHTML * parseFloat(valor.innerHTML.replace('R$', '').replace(',', '.'));

        // Atualiza o valor total no HTML
        total.innerHTML = formatarValor(valorTotal);

        // Chama a função para atualizar o subtotal
        soma();
    }
}

// Função para calcular o subtotal de todos os produtos
function soma() {
    let soma = 0; // Inicializa a variável soma

    // Itera pelos produtos (assumindo que há 6 produtos)
    for (let i = 1; i < 7; i++) {
        // Obtém o valor total de cada produto e converte para número
        let numero = parseFloat(document.getElementById('total_' + i).innerHTML.replace('R$', '').replace(',', '.'));

        // Adiciona o valor ao subtotal
        soma += numero;
    }

    // Atualiza o subtotal no HTML
    document.getElementById('subtotal').innerHTML = formatarValor(soma);
}

// Função para formatar um número como valor monetário em reais
function formatarValor(n) {
    return 'R$ ' + n.toFixed(2).replace('.', ','); // Formata o número com duas casas decimais e substitui o ponto por vírgula
}
