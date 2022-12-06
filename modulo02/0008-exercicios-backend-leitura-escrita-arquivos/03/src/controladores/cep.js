const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');

const encontarCEP = async (req, res) => {
  const { cep } = req.params;

  const cepEditado1 = cep.slice(0, 5);
  const cepEditado2 = cep.slice(5);

  const cepPesquisa = cepEditado1 + '-' + cepEditado2;

  try {
    const arquivoEnderecos = await fs.readFile('./src/enderecos.json');

    // converte arquivo json para js
    const enderecoJson = JSON.parse(arquivoEnderecos);

    const enderecoLocalizado = enderecoJson.find(endereco => {
      return cepPesquisa === endereco.cep;
    });

    if (!enderecoLocalizado) {
      const endereco = await buscarEndereco(cep);

      enderecoJson.push(endereco);

      // converte arquivo js para json
      const arrayJson = JSON.stringify(enderecoJson);

      await fs.writeFile('./src/enderecos.json', arrayJson);

      return res.status(200).json(endereco);
    }

    return res.status(200).json(enderecoLocalizado);
  } catch (erro) {
    return res.status(400).json(`Erro: ${erro.message}`);
  }
};

module.exports = encontarCEP;
