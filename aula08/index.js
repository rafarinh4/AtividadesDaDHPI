function podeSubir(altura,acompanhada) {
    if (altura >= 1.40 && altura <= 2.0) {
        console.log("Acesso Autorizado");
        return true;
    }
    else if (altura < 1.40 && altura >= 1.20 && acompanhada == true){
        console.log("Acesso autorizado somente com acompanhante")
        return true
    }
    else{
        console.log("Acesso Negado")
        return false
    }
}
podeSubir(1.60);