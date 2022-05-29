const myFamily = new Set(['Juscileia', 'Anny', 'Samuel', 'Darlon']);
if(!myFamily.has('Odara')) myFamily.add('Odara');
console.table(myFamily);
console.log(`My family has ${myFamily.size} members.`);