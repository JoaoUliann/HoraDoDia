function carregar(){
    let msg = window.document.getElementById('mensagem');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `<strong> Agora são ${hora} horas. </strong>`
    if(hora >= 0 && hora < 12){
        //bom dia
        
        img.src = 'fotoManha2.png'
        document.body.style.background = '#967824'
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'fotoTarde2.png'
        document.body.style.background = '#cd9755'
        
    } else {
        //Boa noite
        img.src = 'fotoNoite2.png'
        document.body.style.background = '#161332'
    }
}