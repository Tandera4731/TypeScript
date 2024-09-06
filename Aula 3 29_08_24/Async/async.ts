async function buscarDadosDaAPI (): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.6;
            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject('Falha na busca dos dados da API');
            }
        }, 2000);
    });
}



async function Busca() {
    try {
        const dados = await buscarDadosDaAPI ();
        console.log(dados);
    } catch (error) {
        console.error('Erro na busca dos dados:', error);
    }
}

Busca(); 