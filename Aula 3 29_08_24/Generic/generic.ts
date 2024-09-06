function encontrarMaiorElemento<T>(array: T[]): T 
{
    if (array.length === 0) {
        throw new Error("O array está vazio!");
    }

    let maiorElm = array[0];

    for (let e = 1; e < array.length; e++) {
        if (array[e] > maiorElm) {
            maiorElm = array[e];
        }
    }
    
    return maiorElm;
}

const mNumero = encontrarMaiorElemento([58, 62, 119, 82]);
const mPalavra = encontrarMaiorElemento(['pterodáctilo', 'tiranossauro', 'velociraptor', 'triceratops']);

console.log(mNumero);
console.log(mPalavra);