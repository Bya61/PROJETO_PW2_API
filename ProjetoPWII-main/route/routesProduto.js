	/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
	const express = require('express');

	const modelProduto = require('../model/modelProduto');

	/*GERENCIADOR DE ROTAS DO EXPRESS*/
	const router = express.Router();

	/** ROTAS DE CRUD DE VENDA **/
	//ROTA DE CADASTRO DE VENDA
	//NOME(P1, P2, P3, P4){}
	router.post('/cadastrarProduto', (req, res)=>{
		console.log(req.body);
	
		let{nome_produto, qt_estoque, preco_produto} = req.body;
		modelProduto.create(
			{nome_produto},
			{qt_estoque},
			{preco_produto}
			)
		.then(
			()=>{
					return res.status(200).json({
						erroStatus:false,
						mensagemStatus:"PRODUTO CADASTRADO! :)"
					});
			}
		)
		.catch(
			(error)=>{
					return res.status(400).json({
						erroStatus:true,
						mensagemStatus:"ERRO AO CADASTRAR PRODUTO! :(",
						errorObject:error
					});
			}
		)
	});
	   
	    
	

	//ROTA DE LEITURA DE PRODUTO SEM CRITÉRIO
	router.get('/listarProduto', (req, res)=>{

		modelProduto.findAll()
		.then(
			(response)=>{
				return res.status(200).json({
					erroStatus:false,
					mensagemStatus:"PRODUTOS LISTADOS COM SUCESSO!!! :)",
					data:response
				});
			}
		)
		.catch(
			(error)=>{
				return res.status(400).json({
					erroStatus:true,
					mensagemStatus:"ERRO AO LISTAR PRODUTOS :(",
					errorObject:error
				});
			}
		)
	});

	// ROTA PARA LISTAR PRODUTO ATRAVÉS DA PK

	router.get("/listarProdutoPK/:cod_produto", (req, res)=>{

		console.log(req.params)

		let {cod_produto} = req.params;

		modelProduto.findByPk(cod_produto)
		.then(
			(response)=>{
				return res.status(200).json({
					erroStatus:false,
					mensagemStatus:"PRODUTO LISTADO ATRAVÉS DA PK COM SUCESSO!!! :)",
					data:response

				});
			}
		).catch(
			(error)=>{
				return res.status(400).json({
					erroStatus: true,
					mensagemStatus:"ERRO AO LISTAR PRODUTOS POR PK :(",
					errorObject:error
				});
			}
		)
	});

	//ROTA DE LEITURA DE PRODUTO POR NOME
router.get("/listarProdutoNOME/:nome_produto", (req, res)=>{
    let {nome_produto} = req.params;
    modelProduto.findOne({attributes:['cod_produto','nome_produto'], where:{nome_produto}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PRODUTOS  LISTADOS POR NOME COM SUCESSO!!! :)",
                data:response
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR PRODUTO POR NOME :(",
                errorObject:error
            });
        }
    )
});
	


	//ROTA DE ALTERAÇÃO DE PRODUTO SEM CRITÉRIO
	router.put('/alterarProduto', (req, res)=>{

		const{nome_produto,cod_produto} = req.body;
		modelProduto.update(
			{nome_produto},
			{where: {cod_produto}}
		)
		.then(
			()=>{
				return res.status(200).json({
					erroStatus:false,
					mensagemStatus:"INFORMAÇÕES SOBRE O PRODUTO ALTERADAS COM SUCESSO!!!  :)"
				});
			}
		)
		.catch(
			(error)=>{
				return res.status(400).json({
					erroStatus:true,
					mensagemStatus:"ERRO AO ALTERAR PRODUTO  :(",
					errorObject:error 
				});
			}
		)
	});
	
	

	//ROTA DE EXCLUSÃO DE VENDA
	router.delete('/excluirProduto/:cod_produto', (req, res)=>{
	
    console.log(req.params);
    let {cod_produto} = req.params;
    modelProduto.destroy(
        {where:{cod_produto}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"PRODUTO EXCLUIDO COM SUCESSO!!!  :)",
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR PRODUTO  :(",
                errorObject:error
            });
        }
    )
});




	module.exports = router;	
