let resultado = document.querySelector('#resultado')
let salario = document.querySelector('#salario')
function calculoInss() {
    if (salario.value !== "") {
        let desconto7 = (parseFloat(salario.value * 0.075)).toFixed(2)
        let desconto9 = (parseFloat(salario.value * 0.09)).toFixed(2)
        let desconto12 = (parseFloat(salario.value * 0.12)).toFixed(2)
        let desconto14 = (parseFloat(salario.value * 0.14)).toFixed(2)
       
        let tabela = ""
        if (desconto7 <= 90.9) {
            tabela = '- 7, 5 % Se enquadra no Salario Minimo O valor de desconto é '
            resultado.innerHTML = `${tabela} ${'R$' + desconto7}`
        }
        else if (desconto9 >= 91 && desconto9 <= 218.46) {
            tabela = '9% para quem ganha entre R$ 1.212,01 e R$ 2.427,35. é  calculado o desconto em valor é, '
            resultado.innerHTML = `${tabela} ${'R$' + desconto9 + ' reais'}`
        }
        else if (desconto12 >= 218.47 && desconto12 <= 436.92) {
            tabela = '12 % para quem ganha entre R$ 2.427, 36 e R$ 3.641, 03. O valor de desconto é'
            resultado.innerHTML = `${tabela} ${'R$' + desconto12 + ' reais'}`

        }
        else if (desconto14 >= 436.93 && desconto14 <= 992.21) {
            tabela = '14 % para quem ganha entre R$ 3.641, 04 e R$ 7.087, 22. O valor de desconto é'
            resultado.innerHTML = `${tabela} ${'R$' + desconto14 + ' reais'}`
        }
    }
    
}

function limpar() {
        document.getElementById('resultado').innerHTML = ""
        document.getElementById('salario').value = ""
    }