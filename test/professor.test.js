const { Professor } = require("../src/professor");
var assert = require('assert');

describe("Testando a classe professor", () => {
  
  beforeEach(function () {
    professor1 = new Professor("Chris", "15:30", "Integral", 22)
    professor2 = new Professor("Marcelo", "10:00", "Integral", 5)
    professor3 = new Professor("Renzo", "19:30", "Noturno", 17)
  });

  //sucessos
  it("Testando se o nome do professor1 foi salvo corretamente", () => {
    assert.equal(professor1.nome, "Chris");
  });

  it("Testando se o predio foi calculado corretamente", () => {
    assert.equal(professor1.predio, 5)
  });

  it("Testando a atualização de nome", () => {
    professor2.attNome("Marcelinho")
    assert.equal(professor2.nome, "Marcelinho");
  });

  it("Testando a atualização de horario (noturno)", () => {
    professor3.attHorario("21:30")
    assert.equal(professor3.horario, "21:30");
  });

  it("Testando mudança de sala", () => {
    professor1.attSala(1)
    assert.equal(professor1.sala, "1");
  });

  it("Testando se ao mudar a sala o predio atualiza automaticamente", () => {
    professor1.attSala(1)
    assert.equal(professor1.predio, "1");
  });

  it("Testando a atualização de periodo (para noturno)", () => {
    professor2.attPeriodo("Noturno")
    assert.equal(professor2.periodo, "Noturno");
  });

  it("Testando a atualização de periodo (para integral)", () => {
    professor2.attPeriodo("Integral")
    assert.equal(professor2.periodo, "Integral");
  });

  it("Testando a atualização de horario (integral)", () => {
    professor1.attHorario("10:00")
    assert.equal(professor1.horario, "10:00");
  });

  it("Criando um novo professor", () => {
    professor4 = new Professor("Yvo", "13:30", "Integral", 8)
    assert.equal(professor4.nome, "Yvo");
    assert.equal(professor4.horario, "13:30");
    assert.equal(professor4.periodo, "Integral");
    assert.equal(professor4.sala, "8");
    assert.equal(professor4.predio, "2");
  });

  //falhas
  it("Testando a atualização para horario integral em um professor do noturno", () => {
    expect(() => {professor3.attHorario("15:30");}).toThrow("Horario invalido");
  });

  it("Testando a geração de um professor com sala invalida", () => {
    expect(() => {professor4 = new Professor("Yvo", "13:30", "Integral", -1);}).toThrow("Sala invalida");
  });

  it("Testando se é possivel mudar para uma sala de numero negativo", () => {
    expect(() => {professor2.attSala(-3);}).toThrow("Sala invalida");
  });

  it("Atualização do periodo com falha", () => {
    expect(() => {professor2.attPeriodo("noturno");}).toThrow("Periodo invalido");
  });

  it("Atualização de sala com falha", () => {
    expect(() => {professor2.attSala(42);}).toThrow("Sala invalida");
  });

  it("Atualização de horario que nao tem atendimento", () => {
    expect(() => {professor2.attHorario("14:38");}).toThrow("Horario invalido");
  });

  it("Testando a geração de um professor com periodo invalido", () => {
    expect(() => {professor4 = new Professor("Yvo", "21:30", "Integral e noturno", 8);}).toThrow("Periodo invalido");
  });

  it("Tentando fazer um professor estar sempre em atendimento", () => {
    expect(() => {professor2.attHorario("Sempre");}).toThrow("Horario invalido");
  });

  it("Recebendo formato de hora errado", () => {
    expect(() => {professor3.attHorario("21h 30min");}).toThrow("Horario invalido");
  });

  it("Sala inclui uma letra", () => {
    expect(() => {professor2.attSala("15b");}).toThrow("Sala invalida");
  });

});
