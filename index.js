function calculeAge(){
    let nowDate = new Date()
    let ageDate = new Date(document.querySelector("#date-naissance").value)

    let annne = (nowDate.getFullYear() - ageDate.getFullYear())
    // alert(annne)
    let mois = (nowDate.getMonth() - ageDate.getMonth())
    // alert(mois)


    //ageEnJour = ageEnJour / 365
    //alert(ageEnJour)

    document.querySelector("#age").value = annne;
    if(mois < 0){
        annne += -1
        mois += 12
    }
    document.querySelector("#age-complet").value = annne + " ans " + mois +" mois "
}

document.querySelector("#age").disabled = true
document.querySelector("#age-complet").disabled = true
