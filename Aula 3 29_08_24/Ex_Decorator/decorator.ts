function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const mtdOriginal = descriptor.value;


    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);
        const result = mtdOriginal.apply(this, args);
        console.timeEnd(propertyKey);
        return result;
}
}

class Calculadora {
    @medirTempoDeExecucao
    sumNum(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}


const calc = new Calculadora();
calc.sumNum([25, 34, 43, 52, 61]);