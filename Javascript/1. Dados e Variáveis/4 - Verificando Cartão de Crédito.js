const rigthName = 'Gustavo Silva'
const rigthPass = 2708
const rightCode = 787

function verificacao(name, pass, code) {
  const correctName = rigthName === name
  if (correctName) {
    console.log(`Seu nome é: ${rigthName}`)
  } else {
    console.log('Nome Inválido! Tente novamente.')
  }
  const correctPass = rigthPass === pass
  if (correctPass) {
    console.log(`Senha aprovada!`)
  } else {
    console.log(`Olá, ${name}! Sua senha está inválida.`)
  }
  const correctCode = rightCode === code
  if (correctCode) {
    console.log('Código aceito!')
  } else {
    console.log('O seu código está inválido!')
  }

  const everythingCorrect = correctName && correctCode && correctPass

  if(everythingCorrect){
    console.log('Seja bem vindo à nossa plataforma!')
  }else{
    console.log('Tente novamente!')
  }
  return everythingCorrect;
}

const validCard = verificacao('Gustavo Silva', 2708, 787)
console.log(validCard)
