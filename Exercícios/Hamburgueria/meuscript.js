const cart_modal = document.getElementById('cart_modal')
const cart_btn = document.getElementById('cart-btn')
const close_model_btn = document.getElementById("close-model-btn")
const cart_items = document.getElementById('cart-items')
const menu = document.getElementById('menu')
const cart_total = document.getElementById('cart-total')
const checkout_btn = document.getElementById('checkout-btn')
const cart_count = document.getElementById('cart-count')
const adress_warn = document.getElementById('adress-warn')
const adress = document.getElementById('adress')
const adress_pagamento = document.getElementById('adress_pagamento')
const adress_warn_pagamento = document.getElementById('adress-warn-pagamento')
const btn_editar = document.getElementById('btn_editar')
    let cart = []
    cart_btn.addEventListener('click',()=>{
    updateCartmodal()
    cart_modal.classList.add('flex')
    cart_modal.classList.remove('hidden')

})


close_model_btn.addEventListener('click',(evt)=>{
    cart_modal.classList.add('hidden')
    cart_modal.classList.remove('flex')
    
})

cart_modal.addEventListener('click',(evt)=>{
    if(evt.target === cart_modal){
        cart_modal.classList.add('hidden')
        cart_modal.classList.remove('flex')
    }
})

menu.addEventListener('click',(evt)=>{
    //Aqui eu estou verficando qual foi o item clicado ou o parent proximo dele
    //Ou seja se eu clicar no id ou na classe que eu falei ou prox do id ou da classe ele ira me retornar o id ou a classe que eu pedi
    let parentButton = evt.target.closest('.add-to-cart-btn')
    // Aqui eu estou falando: se você clicou na class add-to-cart-btn ele ira adicionar no carrinho o item que você clicou
    if(parentButton){
        //Aqui eu estou pegando o data-name e o data-price
        const name = parentButton.getAttribute('data-name')
        const price = parseFloat(parentButton.getAttribute('data-price'))
       
        //Adicionar no carrinho
        //Nos paramtros eu estou passando o nome e o preço do item clicado
        addCart(name,price)
    }
})


//Função para adiionar no carrinho
function addCart(name,price){
    //O find vai passar pelo nosso array e vai verificar se o nome do item ja foi adicionado, para mudar a quantidade
    const item_exist = cart.find(item => item.name === name )

    if(item_exist){
        //Se o item ja existe aumenta apenas a quantidade
        item_exist.quantity +=1
    }else{
        cart.push({
            name,
            price,
            quantity:1,
        })
    }
    updateCartmodal()
}

//Atualiza o carrinho
function updateCartmodal(){
    cart_items.innerHTML = ''
    let total = 0

    cart.forEach(item =>{
        const cartItemElement = document.createElement('div')
        cartItemElement.classList.add('flex','justify-between','mb-4','flex-col')

        cartItemElement.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
            <p class="font-medium">Nome: ${item.name}</p>
            <p>Qtd: ${item.quantity}</p>
            <p class="font-medium mt-1">Preço: R$ ${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-item" data-name="${item.name}"> 
            Remover
            </button>
           

        </div>
        `
        // Eu estou fazendo vezes a quantidade pq se tiver 2 cocas por exemplo vai ser o preço da coca vezes 2
        total += item.price * item.quantity
        
        cart_items.appendChild(cartItemElement)
    })

    cart_total.textContent = total.toLocaleString('pt-br',{
        style:'currency',
        currency: 'BRL'
    })
    cart_count.innerHTML = cart.length
}


//Função para remover item
cart_items.addEventListener('click',(evt)=>{
    if(evt.target.classList.contains('remove-item')){
        const name = evt.target.getAttribute('data-name')
        removeItemcart(name)
    }
})

function removeItemcart(name){
    //Ent se ele encontrar o nome que eu quero remover ele vai passar a posição dele  na lista 
    const index = cart.findIndex( item => item.name === name)

    if(index !== -1){
        const item = cart[index]
        
        if(item.quantity >1){
            item.quantity -=1
            updateCartmodal()
            return
        }
        // Ent o splice pega a posição que estamos mandando e remove ela 
        cart.splice(index,1)
        updateCartmodal()

    }
}

adress.addEventListener('input',(evt)=>{
    let inputValue = evt.target.value

    if(inputValue !== ''){
        adress.classList.remove('border-red-500')
        adress_warn.classList.add('hidden')
    }

})

adress_pagamento.addEventListener('input',(evt)=>{
    let inputValue = evt.target.value

    if(inputValue !==''){
        adress_pagamento.classList.remove('border-red-500')
        adress_warn_pagamento.classList.add('hidden')

    }

})

checkout_btn.addEventListener('click',()=>{
    /*const isOpen = verificar_horario()*/

    /*if(!isOpen){
        alert('Restaurante fechado')
        return
    }*/

    if(cart.length === 0) return

    if(adress.value === ''){
        adress_warn.classList.add('flex')
        adress_warn.classList.remove('hidden')
        adress.classList.add('border-red-500')

    }

    if(adress_pagamento.value ===''){
        adress_warn_pagamento.classList.add('flex')
        adress_warn_pagamento.classList.remove('hidden')
        adress_pagamento.classList.add('border-red-500')
        return
    }

    const cart_items = cart.map((item)=>{
        return (
            `${item.name}  Quantidade: ${item.quantity}  Preço: R$${item.price.toFixed(2)} | `
        )
        
    })
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const dados = {
        items:cart_items,
        address: adress.value,
        paymentMethod: adress_pagamento.value,
    }

   
    console.log(dados)
    fetch('http://localhost:3000/order/checkout',{
        method:'POST',
        headers:{
            'Content-Type':'Application/json',
        },
        body: JSON.stringify(dados)
    })
    .then((res)=>{
        if(!res.ok){
            throw new Error('Erro ao salvar o pedido.')
        }

        console.log('Pedido salvo com sucesso')

        //Enviar para a api do whats 
    
    const message = cart_items.map(item => encodeURI(item)).join("")
    const phone = '5516993743632'

    window.open(`https://wa.me/${phone}?text=${message} Endereço:${adress.value} Forma de pagamento:${adress_pagamento.value}`,"_blank")

    cart = []
    updateCartmodal()
    }).catch((err)=>{
        console.log('Algo deu errado'+err)
    })
})


//Verificar se a loja esta aberta

/*function verificar_horario(){
    const data = new Date()
    const horas = data.getHours()
    return horas>=18 && horas<22
}

const spanItem = document.getElementById('date-span')
const esta_aberto = verificar_horario()

if(esta_aberto){
    spanItem.classList.remove('bg-red-500')
    spanItem.classList.add('bg-green-600')

}else{
    spanItem.classList.remove('bg-green-600')
    spanItem.classList.add('bg-red-500')
}*/


//SISTEMA DE AVALIAÇÕES

    const stars = document.querySelectorAll('#star-rating span')
    let selectedRating = 0
  
    
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        // Resetar todas as estrelas
        stars.forEach(s => s.classList.remove('text-yellow-400'))
        stars.forEach(s => s.classList.add('text-gray-400'))
    
        // Adicionar a cor amarela até a estrela clicada
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('text-yellow-400')
          stars[i].classList.remove('text-gray-400')
        }
    
        // Armazenar a avaliação selecionada
        selectedRating = star.getAttribute('data-value')
      })
    })
    
    document.getElementById('submit-review').addEventListener('click', () => {
        const reviewText = document.getElementById('review-text').value;
    
        if (selectedRating === 0) {
            alert('Por favor, selecione uma avaliação de estrelas.');
            return;
        }
    
        if (reviewText.trim() === "") {
            alert('Por favor, escreva sua avaliação.');
            return;
        }
    
        const dados = {
            stars: selectedRating,
            reviewText: reviewText
        };
    
        fetch('http://localhost:3000/sistema/avaliacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao salvar a avaliação');
            }
            return res.json();
        })
        .then(data => {
            // Limpar o textarea após o envio bem-sucedido
            document.getElementById('review-text').value = '';
    
            // Aqui você pode também atualizar a lista de avaliações se necessário
            fetchAvaliacoes(); // Se quiser atualizar a lista após enviar a avaliação
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    })
    

    function fetchAvaliacoes() {
        fetch('http://localhost:3000/sistema/avaliacoes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar avaliações');
                }
                return response.json();
            })
            .then(avaliacoes => {
                const avaliacoesContainer = document.getElementById('avaliacoes-container').querySelector('div');
                avaliacoesContainer.innerHTML = ''; // Limpa o container
    
                avaliacoes.forEach(ava => {
                    const avaliacaoDiv = document.createElement('div');
                    avaliacaoDiv.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-4', 'border', 'border-gray-300');
                    avaliacaoDiv.dataset.id = ava._id

                    const estrelasHtml = Array.from({ length: 5 }, (_, index) => {
                        return `<span class="estrela text-yellow-500 text-2xl cursor-pointer" data-value="${index + 1}">${index < ava.stars ? '★' : '☆'}</span>`;
                    }).join('');

                    avaliacaoDiv.innerHTML = `
                        <div class="flex items-center mb-2">
                             <div class="estrelinhas">
                            ${estrelasHtml}
                            </div>
                        </div>
                        <p class="text-gray-800 mb-4 avaliacao-texto" onclick="editarAvaliacao(this)">${ava.reviewText}</p>
                        <button class="font-bold" onclick="removerAvaliacao(this)" id="btn_remover">Remover</button>
                
                    `;
                    avaliacoesContainer.appendChild(avaliacaoDiv);
                    editarEstrelas(avaliacaoDiv.querySelector('.estrelinhas'));
                    
                });
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }



    //Criando a opção de editar as estrelinhas
    function editarEstrelas(estrelinhasDiv) {
        const estrelas = estrelinhasDiv.querySelectorAll('.estrela');
    
        estrelas.forEach(estrela => {
            estrela.addEventListener('click', () => {
                console.log('olá')
                const novaAvaliacao = parseInt(estrela.dataset.value);
                atualizarEstrelas(estrelinhasDiv, novaAvaliacao);
                // Aqui você pode adicionar lógica para enviar a nova avaliação para o servidor
                const avaliacaoDiv = estrelinhasDiv.closest('div[data-id]'); // Filtra apenas divs que têm data-id
                const avaliacaoId = avaliacaoDiv ? avaliacaoDiv.dataset.id : undefined;

                if (avaliacaoId) {
                    enviarNovaAvaliacao(avaliacaoId, novaAvaliacao);
                } else {
                    console.error('ID da avaliação não encontrado');
                }
                console.log(avaliacaoId,avaliacaoId)
                enviarNovaAvaliacao(avaliacaoId, novaAvaliacao)
            });
        });
    }
    
    function atualizarEstrelas(estrelinhasDiv, novaAvaliacao) {
        const estrelas = estrelinhasDiv.querySelectorAll('.estrela');
        estrelas.forEach((estrela, index) => {
            estrela.textContent = index < novaAvaliacao ? '★' : '☆'; // Atualiza a representação das estrelas
        });
    }
    

    function enviarNovaAvaliacao(avaliacaoId, novaAvaliacao) {
        fetch(`http://localhost:3000/sistema/avaliacoes/${avaliacaoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ stars: novaAvaliacao }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            fetchAvaliacoes(); // Atualiza as avaliações
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
    //Fim edição estrelinhas    





    
    //Criando a opção de editar avaliação
    function editarAvaliacao(elemento){
        //Aqui eu estou pegando o conteúdo do paragrafo que eu cliquei e armazeno nessa const abaixo
        const conteudoAtual = elemento.innerText


        //Aqui eu vou criar a area onde vai ser feita a edição do paragrafo
        const input = document.createElement('textarea')
        input.value = conteudoAtual
        input.minLength = 10
        input.maxLength = 100
        input.onblur = function(){
            //Quando eu sair do textarea ele salva o que eu digitei
            salvarAvaliacao(this)
        }

        elemento.parentNode.replaceChild(input,elemento)
        input.focus()
    }

    function salvarAvaliacao(inputElement){
        const novoConteudo = inputElement.value
        console.log(novoConteudo)
        const p = document.createElement('p')
        p.classList.add('avaliacao-texto')
        p.innerHTML = novoConteudo

        p.onclick = function(){
            editarAvaliacao(this)
        }

        inputElement.parentNode.replaceChild(p,inputElement)
    }

    function removerAvaliacao(elemento){
        const avaliacao = elemento.closest('div.bg-white')
        const avalicaoId = avaliacao.dataset.id
        if(avaliacao){
            fetch(`http://localhost:3000/avaliacoes/${avalicaoId}`,{
                method:'DELETE',
            })
            .then(res=>{
                if(res.ok){
                    avaliacao.remove()
                    console.log('Avaliação removida com sucesso')
                }else{
                    console.error('Erro ao remover a avaliação')
                }
            })
            .catch(error=>{
                console.error('Erro ao fazer a requisição')
            })
        }
        
    }
   
    // Chame a função para buscar as avaliações quando a página carregar
    document.addEventListener('DOMContentLoaded', fetchAvaliacoes());
   
    



//FIM AVALIAÇÕES