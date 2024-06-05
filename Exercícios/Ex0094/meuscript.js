const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click',(evt) =>{
    //window.location = 'https://www.google.com.br'
    //window.history.forward()
    window.location = url.value
})






/*Propriedades do objeto history
length
Descrição: Retorna o número de entradas no histórico de navegação.

state
Descrição: Retorna o estado atual do histórico.
Métodos do objeto history

back()
Descrição: Navega para a página anterior no histórico.

forward()
Descrição: Navega para a próxima página no histórico.

go(delta)
Descrição: Navega para uma página específica no histórico, onde delta é um número inteiro. Um valor positivo avança e um valor negativo retrocede no histórico.

pushState(state, title, [url])
Descrição: Adiciona uma entrada ao histórico de navegação.
Parâmetros:
state: Um objeto de estado associado à nova entrada no histórico.
title: Um título para a nova entrada no histórico (atualmente ignorado por todos os navegadores).
url: Um URL opcional para a nova entrada no histórico.

replaceState(state, title, [url])
Descrição: Modifica a entrada atual no histórico de navegação.
Parâmetros:
state: Um objeto de estado associado à nova entrada no histórico.
title: Um título para a nova entrada no histórico (atualmente ignorado por todos os navegadores).
url: Um URL opcional para a nova entrada no histórico.*/



/*Propriedades de location
href: URL completa do documento atual.
protocol: Protocolo da URL (ex: http:, https:).
host: Hostname e porta da URL (se especificada).
hostname: Apenas o hostname da URL.
port: Porta especificada na URL, ou string vazia se não houver.
pathname: Caminho da URL após o hostname.
search: String de consulta (query string) da URL, incluindo o ?.
hash: Fragmento (hash) da URL, incluindo o #.
origin: Origem da URL (combinação de protocol, hostname e port).
Métodos de location
assign(url): Carrega o recurso na URL especificada. , a diferença entre assign e replace ,  é que o replace , não tem o botão de voltar , ja o assign tem.
replace(url): Substitui o documento atual pelo recurso especificado, sem criar uma nova entrada no histórico do navegador.
reload(forcedReload): Recarrega a página atual. Se forcedReload for true, recarrega do servidor (ignorando o cache).
toString(): Retorna a URL completa como uma string (equivalente a location.href).*/