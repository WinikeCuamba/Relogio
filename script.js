const setClock = () => {
  
  //Variaveis do tempo da maquina
  data = new Date()
  var timeHoras = data.getHours() 
  var timeMinutos = data.getMinutes()
  var timeSecundos = data.getSeconds()
  setInterval(() => {
    timeHoras = data.getHours()
    timeMinutos = data.getMinutes()
    timeSecundos = data.getSeconds()
  }, 1000)
  
  //Variaveis dos elementos html
  let horas = document.querySelector(".horas")
  let minutos = document.querySelector(".minutos")
  let secundos = document.querySelector(".secundos")
  
  //Conversor de horas para graus
  const converterHorParaGraus = (horas) => {
    let graus = horas * 30
    return graus
  
  }
  
  
  //Conversor de minutos para graus
  const converterMinParaGraus = (minutos) => {
    let graus = minutos * 30 / 5
    return graus
  }
  
  //Conversor de secundos para graus 
  const converterSecParaGraus = (secundos) => {
    let graus = secundos * 30 / 5
    return graus
  }
  // Atualizador de possicão
  const atualizarRelogio = (elemento, graus) => {
    elemento.style.transform = `rotate(${graus}deg)`
  }
  
  // Convertendo de tempo para graus
  let grausHor = converterHorParaGraus(timeHoras)
  let grausMin = converterMinParaGraus(timeMinutos)
  let grausSec = converterSecParaGraus(timeSecundos)
  
    atualizarRelogio(horas, grausHor)
    atualizarRelogio(minutos, grausMin)
    atualizarRelogio(secundos, grausSec)
}

setClock()

setInterval(setClock, 1000)
