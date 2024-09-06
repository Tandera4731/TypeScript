class EmailInvalidoErro extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoErro('Email inválido: O email deve conter @');
    }

    console.log('Email válido');
}



try {
    verificarEmail('fiap.com');
} catch (error) {
    console.error(error.mensagem);
}