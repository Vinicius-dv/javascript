let nome = prompt('Digite seu nome');

if (nome.length < 3) {
    alert('Seu nome deve ter mais de 3 caracteres');
} else {
    let idade = prompt('Digite sua idade');

    if (isNaN(idade) || idade > 150) {
        alert('Digite uma idade válida');
    } else {
        let salario = prompt('Digite seu salário');

        if (isNaN(salario) || salario >500000) {
            alert('Digite um salário válido');
        } else {
            let sexo = prompt('Digite seu sexo (m/f)');

            if (sexo !== 'm' && sexo !== 'f') {
                alert('Digite um sexo válido (m/f)');
            } else {
                document.write('<p>Olá '+nome+'</p>')
                document.write('<p>Sua idade é '+idade+'</p>')
                document.write('<p>Seu salario é '+salario+'</p>')
                document.write('<p>Seu sexo é '+sexo+'</p>')
            }
        }
    }
}

