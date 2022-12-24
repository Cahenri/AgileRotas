// Script do bloco de calculo do gasto de combustivel
//------------------------------------------------
let distancia = document.getElementById('Dkm')
let desenpenho = document.getElementById('Dcar')
let preco = document.getElementById('Pbust')
let volta = 2

Number.parseFloat(document.getElementById('Dkm'))
Number.parseFloat(document.getElementById('Dcar'))
Number.parseFloat(document.getElementById('Pbust'))
Number.parseFloat(volta)

function calcularValorCombustivel() {

	if (document.getElementById('resul') != '') {
	document.getElementById('resul').value = ''
	}
				
	distancia = document.getElementById('Dkm').value.toString().replace(",", ".")
	desenpenho = document.getElementById('Dcar').value.toString().replace(",", ".")
	preco = document.getElementById('Pbust').value.toString().replace(",", ".")

	if (isNaN(distancia) || isNaN(desenpenho) || isNaN(preco)) {
	distancia = 0
	desenpenho = 0
	preco = 0

	let tratativa = distancia + desenpenho + preco

		document.getElementById('resul').value += tratativa
	}

	if (distancia == '' || desenpenho == '' || preco == '') {
		alert('Há dados preenchidos de modo incorreto!!!')

		} else {
		let resultadototal1 = distancia * volta * preco / desenpenho

		document.getElementById('resul').value += resultadototal1.toFixed(2);

		}			
	}
	// Fim do Script do bloco do calculo do gasto de combustivel
//--------------------------------------------------------------
// Inicio do calculo de padagios

let pedIda1 = document.getElementById('pI1')
let pedIda2 = document.getElementById('pI2')
let pedIda3 = document.getElementById('pI3')
let pedIda4 = document.getElementById('pI4')
let pedVol1 = document.getElementById('pV1')
let pedVol2 = document.getElementById('pV2')
let pedVol3 = document.getElementById('pV3')
let pedVol4 = document.getElementById('pV4')
			
function calcularPedagio() {

	if (document.getElementById('resultadoPed') != '') {
		document.getElementById('resultadoPed').value = ''
	}

	pedIda1 = document.getElementById('pI1').value.toString().replace(",", ".")
	pedIda2 = document.getElementById('pI2').value.toString().replace(",", ".")
	pedIda3 = document.getElementById('pI3').value.toString().replace(",", ".")
	pedIda4 = document.getElementById('pI4').value.toString().replace(",", ".")
	pedVol1 = document.getElementById('pV1').value.toString().replace(",", ".")
	pedVol2 = document.getElementById('pV2').value.toString().replace(",", ".")
	pedVol3 = document.getElementById('pV3').value.toString().replace(",", ".")
	pedVol4 = document.getElementById('pV4').value.toString().replace(",", ".")

	if (isNaN(pedIda1) || isNaN(pedIda2) || isNaN(pedIda3) || isNaN(pedIda4) || isNaN(pedVol1) || isNaN(pedVol2) || isNaN(pedVol3) || isNaN(pedVol4)) {
		pedIda1 = 0
		pedIda2 = 0
		pedIda3 = 0
		pedIda4 = 0
		pedVol1 = 0
		pedVol2 = 0
		pedVol3 = 0
		pedVol4 = 0
		alert('Por favor!! Insira dados validos!!')
	}
	
	if (pedIda1 == '') {
		pedIda1 = 0;
	}

			if (pedIda2 == '') {
				pedIda2 = 0;
			}
			if (pedIda3 == '') {
				pedIda3 = 0;
			}
			if (pedIda4 == '') {
				pedIda4 = 0;
			}
			if (pedVol1 == '') {
				pedVol1 = 0;
			}
			if (pedVol2 == '') {
				pedVol2 = 0;
			}
			if (pedVol3 == '') {
				pedVol3 = 0;
			}
			if (pedVol4 == '') {
				pedVol4 = 0;
			}

	let resultado2 = parseFloat(pedIda1) + parseFloat(pedIda2) + parseFloat(pedIda3) + parseFloat(pedIda4) + parseFloat(pedVol1) + parseFloat(pedVol2) + parseFloat(pedVol3) + parseFloat(pedVol4)

	document.getElementById('resultadoPed').value += resultado2.toFixed(2);
}
// Fim do calculo de padagios
//----------------------------
// Inicio calculo hospedagem

let vlrHospedagem = document.getElementById('hosp')
let vlrDiarias = document.getElementById('diar')
let divPessoas = document.getElementById('pess')

Number.parseFloat(document.getElementById('hosp'))
Number.parseFloat(document.getElementById('diar'))
Number.parseFloat(document.getElementById('pess'))

function calcularDiarias() {

	if (document.getElementById('resulDiarias') != '') {
		document.getElementById('resulDiarias').value = ''
		}

	vlrHospedagem = document.getElementById('hosp').value.toString().replace(",", ".")
	vlrDiarias = document.getElementById('diar').value.toString().replace(",", ".")
	divPessoas = document.getElementById('pess').value.toString().replace(",", ".")

	if (isNaN(vlrHospedagem) || isNaN(vlrDiarias) || isNaN(divPessoas)) {
		vlrHospedagem = 0
		vlrDiarias = 0
		divPessoas = 0

		let tratativa2 = vlrHospedagem + vlrDiarias + divPessoas

		document.getElementById('resulDiarias').value += tratativa2
		}

	if (vlrHospedagem == '' || vlrDiarias == '' || divPessoas == '') {
		alert('Há dados não preenchidos!!!')

	} else {
		let resultadototal3 = vlrHospedagem * vlrDiarias / divPessoas

		document.getElementById('resulDiarias').value += resultadototal3.toFixed(2);

	}
	
}

// fim calculo diarias
//-------------------------------------------------------------------
// inicio calculo geral

let operacao1 = document.getElementById('resul')
let operacao2 = document.getElementById('resultadoPed')
let operacao3 = document.getElementById('resulDiarias')

function calculoGeral() {

	if (document.getElementById('resultadoGeral') != '') {
		document.getElementById('resultadoGeral').value = ''
		}

	operacao1 = document.getElementById('resul').value.toString().replace(",", ".")
	operacao2 = document.getElementById('resultadoPed').value.toString().replace(",", ".")
	operacao3 = document.getElementById('resulDiarias').value.toString().replace(",", ".")

	if (operacao1 == '') {
		operacao1 = 0;
	}

	if (operacao2 == '') {
		operacao2 = 0;
	}
	if (operacao3 == '') {
		operacao3 = 0;
	}
	
	let geralResultado = parseFloat(operacao1) + parseFloat(operacao2) + parseFloat(operacao3)

	document.getElementById('resultadoGeral').value += 'R$ ' + geralResultado.toFixed(2);
	

}
