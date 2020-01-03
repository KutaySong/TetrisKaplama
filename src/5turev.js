
function türev1Çıkart() {
    türevler1=[]
    kaydırYoksaEkle(blok1,türevler1)

    // döndermeler ::
    let bunu = kopi(blok1)
    
    for (let d=0; d<3; d++) {
        let dönmüşü = boşblok()
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                dönmüşü[i][j]=bunu[j][2-i]
            }
        }
        bunu = dönmüşü
        kaydırYoksaEkle(bunu,türevler1)
    }
    
    // çevirip döndermeler ::
    bunu = kopi(blok1)
    let dikYansı = boşblok()
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            dikYansı[i][j]=bunu[i][2-j]
        }
    }
    kaydırYoksaEkle(dikYansı,türevler1)
    
    bunu = dikYansı
    for (let d=0; d<3; d++) {
        let dönmüşü = boşblok()
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                dönmüşü[i][j]=bunu[j][2-i]
            }
        }
        bunu = dönmüşü
        kaydırYoksaEkle(bunu,türevler1)
    }
    return türevler1
}


function kaydırYoksaEkle(neyi,nereye) {
    let bunu = kopi(neyi)
    // tepeyi at :
    if (bunu[0][0]+bunu[0][1]+bunu[0][2]==0) {
        let kaymışı = boşblok()
        for (let i=0; i<2; i++) {
            for (let j=0; j<3; j++) {
                kaymışı[i][j]=bunu[i+1][j]
            }
        }
        bunu = kaymışı
    }
    // sol yanı at :
    if (bunu[0][0]+bunu[1][0]+bunu[2][0]==0) {
        let kaymışı = boşblok()
        for (let i=0; i<3; i++) {
            for (let j=0; j<2; j++) {
                kaymışı[i][j]=bunu[i][j+1]
            }
        }
        bunu = kaymışı
    }
    // varsa ekleme
    for (tür of nereye) {
        if ( bloklarAynıMı(tür,bunu) ) return false
    }
    nereye.push(bunu)
}


function türev2Çıkart() {
    türevler2=[]
    kaydırYoksaEkle(blok2,türevler2)

    // döndermeler ::
    let bunu = kopi(blok2)
    
    for (let d=0; d<3; d++) {
        let dönmüşü = boşblok()
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                dönmüşü[i][j]=bunu[j][2-i]
            }
        }
        bunu = dönmüşü
        kaydırYoksaEkle(bunu,türevler2)
    }
    
    // çevirip döndermeler ::
    bunu = kopi(blok2)
    let dikYansı = boşblok()
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            dikYansı[i][j]=bunu[i][2-j]
        }
    }
    kaydırYoksaEkle(dikYansı,türevler2)
    
    bunu = dikYansı
    for (let d=0; d<3; d++) {
        let dönmüşü = boşblok()
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                dönmüşü[i][j]=bunu[j][2-i]
            }
        }
        bunu = dönmüşü
        kaydırYoksaEkle(bunu,türevler2)
    }
    return türevler2
}
