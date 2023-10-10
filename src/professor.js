class Professor {

  constructor(nome, horario, periodo, sala){

    this.nome = nome
    this.horario = horario
    if (periodo == "Noturno" || periodo == "Integral") {
      this.periodo = periodo
    }else throw new Error("Periodo invalido");
    if (sala >0 && sala <= 30){
      this.sala = sala
      this.predio = Math.ceil(sala/5)
    }else{
      throw new Error("Sala invalida");
    }
  }

  attNome(nome) {
    this.nome = nome;
  }

  attHorario(horario) {
    if (this.periodo == "Noturno"){
      if (horario == "19:30" || horario == "21:30"){
        this.horario = horario
      }else throw new Error("Horario invalido");
    }else if (this.periodo == "Integral"){
      if (horario == "08:00" || horario == "10:00" || horario == "13:30" || horario == "15:30" || horario == "17:30"){
        this.horario = horario
      }else throw new Error("Horario invalido");
    }else throw new Error("Horario invalido");
  }

  attPeriodo(periodo) {
    if (periodo == "Noturno" || periodo == "Integral") {
      this.periodo = periodo
    }else throw new Error("Periodo invalido");
  }

  attSala(sala) {
    if (sala > 0 && sala <= 30) {
      this.sala = sala
      this.predio = Math.ceil(sala/5)
    }else throw new Error("Sala invalida");
  }
}

module.exports = { Professor };