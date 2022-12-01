	//IMPORTAÇÃO DO PACOTE SEQUELIZE
	const Sequelize = require('sequelize');

	// CRIANDO CONEXÃO COM O BANCO DE DADOS
	const connection = new Sequelize(
			'bd_eletronicos_api',
			'root',
			'',
			{
				host:'localhost',
				dialect:'mysql',
				timezone: '-03:00'
			}				
		);

	module.exports = connection;
