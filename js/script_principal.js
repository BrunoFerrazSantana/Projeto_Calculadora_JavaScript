function calcular(tipo, valor){
	if(tipo === 'acao'){

		//Limpar o input que contém o resultado da expressão
		if(valor === 'c'){
			document.getElementById('resultado').value = ''
		}

		//Faz a tratativa da operãção que o usuário escolheu
		if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
			document.getElementById('resultado').value += valor
		}
		//Faz a trativa do operação aritmética final
		if (valor === '='){
			var valor_campo = eval(document.getElementById('resultado').value)
			
			document.getElementById('resultado').value = valor_campo
		}
	}//Tratativa para exibir o usuário a expressão que ele está montando
	else if(tipo === 'valor'){

		document.getElementById('resultado').value += valor
	}
}