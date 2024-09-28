const item_a = document.getElementById('item_a');
const item_b = document.getElementById('item_b');
const preço_item_a = document.getElementById('preço_item_a').textContent.replace('R$', '').trim();
const preço_item_b = document.getElementById('preço_item_b').textContent.replace('R$', '').trim();
const carrinho = document.getElementById('carrinho');

// Função para adicionar um item ao carrinho
function adicionarItem(item, preço) {
    // Enviar dados para o servidor
    fetch('http://localhost:3000/api/adicionar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item, preço: parseFloat(preço) })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Item adicionado com sucesso:', data);
        // Atualizar o DOM com o novo item
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item} - R$${preço}`;
        carrinho.appendChild(itemElement);
    })
    .catch(error => {
        console.error('Erro ao adicionar item:', error);
    });
}

// Adicionar evento de clique aos botões
item_a.addEventListener('click', () => {
    adicionarItem('Item A', preço_item_a);
});

item_b.addEventListener('click', () => {
    adicionarItem('Item B', preço_item_b);
});