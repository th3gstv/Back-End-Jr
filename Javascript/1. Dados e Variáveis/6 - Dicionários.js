const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi, tudo bem?');
meuDicionario.set('blz', 'Beleza?');
meuDicionario.set('vc', 'Você');

//console.table(meuDicionario);
const palavra = meuDicionario.get('vc');
console.log(`${palavra} é magnífico!`);