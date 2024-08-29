function callBackF(text:string){
    console.log('Estoy dentro de callBackF: ' + text)
}

function algoConCallBackF(textoInicial: string,
                            cbf: (textoInicial:string) => void){

    console.log('dentro de algoConCallBackF ${textoInicial}');
    cbf(textoInicial)
}

algoConCallBackF('mi text', callBackF)