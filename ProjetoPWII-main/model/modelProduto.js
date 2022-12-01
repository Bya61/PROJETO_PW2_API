	//IMPORTAÇÃO DO PACOTE SEQUELIZE
	const Sequelize = require('sequelize');

	//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
	const connection = require('../database/database');

	
	const modelProduto = connection.define(
		'tb_produtos',
		{
		    cod_produto:{
		      type: Sequelize.INTEGER,
		      primaryKey: true,
		      autoIncrement: true
		    },
		    nome_produto:{
		      type: Sequelize.STRING(200),
		      allwNull: false
		    },
			preco_produto:{
				type: Sequelize.DECIMAL(8,2),
				allwNull: true
			  },
			  qt_estoque: {
				type: Sequelize.INTEGER,
				allwNull: true
			  }
		}
	);
29
30	 ;
    //modelProduto.sync({force:true});
31
	module.exports = modelProduto;