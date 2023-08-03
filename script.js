function calcular(){
    var p = document.getElementById('pot')
    p = Number(pot.value)
    var te = document.getElementById('temp')
    te = Number(temp.value)
    var d = document.getElementById('dia')
    d = Number(dia.value)
    var ta = document.getElementById('tarif')
    ta = Number(tarif.value)
    var kwh = document.getElementById('kwh')
    var res = document.getElementById('res')

    

    if (p == 0, te == 0, d == 0, ta == 0){
        window.alert('[ERRO] Preencha todos os dados para prosseguir!')
    } else{
         var q = p * te / 1000 * d

         var v = q * ta

        kwh.innerHTML += `<br><strong>${q}</strong><hr>(kwh)`
        res.innerHTML += `<br><strong>${v}</strong>$`
        } 
    }  
    