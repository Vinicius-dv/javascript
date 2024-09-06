class msg {
    titulo = null
    texto = null
    cor = null
    destino = null
    div_msg = null
  
    constructor(config) {
      this.titulo = config.titulo
      this.texto = config.texto
      this.cor = config.cor
      this.destino = document.body
    }
  
    mostrar = () => {
      this.div_msg = document.createElement('div')
      const estilo_divmsg = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
      `
      this.div_msg.setAttribute('id', 'divmsg')
      this.div_msg.setAttribute('style', estilo_divmsg)
      this.destino.prepend(this.div_msg)
  
      const estilo_area = `
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 300px;
      `
  
      const area_msg = document.createElement('div')
      area_msg.setAttribute('style', estilo_area)
      this.div_msg.appendChild(area_msg)
  
      const estilo_tituloCxmsg = `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background-color: ${this.cor};
        color: #fff;
        padding: 5px;
        border-radius: 5px 5px 0px 0px;
      `
  
      const titulo_msg = document.createElement('div')
      titulo_msg.innerHTML = this.titulo
      titulo_msg.setAttribute('style', estilo_tituloCxmsg)
      area_msg.appendChild(titulo_msg)


      const estilo_corpo = 
      `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        background-color: #eee;
        color: #000;
        padding: 30px 5px;
        
      `

      const corpo_msg = document.createElement('div')
      corpo_msg.innerHTML = this.texto
      corpo_msg.setAttribute('style', estilo_corpo)
      area_msg.appendChild(corpo_msg)


      const estilo_rodape = `
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      background-color: #ccc;
      color: #000;
      padding: 5px;
      border-radius: 0px 0px 5px 5px;
    `
      const rodape_msg = document.createElement('div')
      rodape_msg.setAttribute('style', estilo_rodape)
      area_msg.appendChild(rodape_msg)


      const estilo_botão =
      `
      background-color:${this.cor};
      color:#fff;
      padding:10px 50px;
      border-radius:5px
      cursor:pointer;
      text-transform:uppercase;
      `
      const btn_ok = document.createElement('button')
      btn_ok.innerHTML = 'ok'
      btn_ok.addEventListener('click',(evt)=>{
        this.ocultar()
      })
      btn_ok.setAttribute('style', estilo_botão)
      area_msg.appendChild(btn_ok)
    }
  
    ocultar = () => {
      this.div_msg.remove()
    }
  }