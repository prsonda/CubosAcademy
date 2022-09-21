let dados = '*Canis %lupus )familiaris';

/*
será removido todos os símbolos designados dentro de /[]/g- !@#$%&*().
*/
console.log(dados.replace(/[!@#$%&*().]/g, ''));

dados = 'Felis) silvestris *catus&';

console.log(dados.replace(/[!@#$%&*().]/g, ''));

dados = '$Ailuropoda@ melanoleuca!';

console.log(dados.replace(/[!@#$%&*().]/g, ''));
