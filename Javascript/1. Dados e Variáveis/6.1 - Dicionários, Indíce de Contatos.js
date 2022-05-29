 const meuDicionario = new Map()
meuDicionario.set('vc', 'Você')
meuDicionario.set('blz', 'Beleza')
meuDicionario.set('oi', 'Oi, tudo bem?')
//console.log(meuDicionario.delete('gmail'));
//expected outside: false
//1ª FORMA (meu raciocínio)
if(!meuDicionario.has('boa')) console.table(meuDicionario.set('boa', 'Boa noite'));
console.log('forEach (Valor: Chave): \n');
meuDicionario.forEach( (values, key) =>{
    console.table(`${values}: ${key}`);
})
console.log('\n')
console.log('Entradas: \n')

for (let entrada of meuDicionario.entries()){
  console.log(entrada);
}

console.log('\n');
console.log('Valores: \n')
for (let valores of meuDicionario.values()){
  console.log(valores);
}

console.log('\n');
console.log('Chaves: \n')
for (let chaves of meuDicionario.keys()){
  console.log(chaves);
}

console.log('\n')
console.log(`Elementos do Meu Dicionário: ${meuDicionario.size}`);