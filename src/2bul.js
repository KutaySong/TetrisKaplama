
async function bul(i,j,sağdaki,türN=0,fonkNo=0) {
	
	while (pause) {await bekle(200)}
	if (winLoose==2) return
	if (fonkNo!=fonkno) return
	if (tahtalarAynıMı()) {
		winLoose= 1
		return 	
	}
	
	if (j==8) { 
		if(!satırAynıMı(i)) {
			let birihtimaldaha = geriAl()
			if (birihtimaldaha)
			return bul(...birihtimaldaha)
		}
		i++
		j=0
	}
	if (i==8) { // satır
		çağıBitir()
		return 
	}
	
	if ((!sağdaki && adet1.length>blok2size*derinlik) || (sağdaki && adet2.length>blok1size*derinlik)) {
		let birihtimaldaha = geriAl()
		if (birihtimaldaha)
		return bul(...birihtimaldaha)
	}
	
	
	if(!sağdaki) {	
		if(!tahta1[i][j]) {		// birinci boşsa bakalım
			for (let türev=türN; türev<türevler1.length; türev++) {			
				if (yerleştirmeyeÇalış(0,i,j,türev)) {
					await bekle() 
					return bul(i,j,1,0,fonkNo)
				}
			}
			// bu kareye uygun varyate bulamadım bir yana kendimi deniyorum 
			return bul(i,j+1,0,0,fonkNo)
		} else {
			return bul(i,j,1,0,fonkNo)
		}
	} else { 
		if(tahta1[i][j] && !tahta2[i][j]) {  // ikiyi doldurmak için
			for (let türev=türN; türev<türevler2.length; türev++) {	
				if (yerleştirmeyeÇalış(1,i,j,türev))
				return bul(i,j+1,0,0,fonkNo)
			}
			// buraya birşey uyduramadım dönüyorum
			return bul(...geriAl())
		} else {
			// ikisi de boşken veya doluyken
			return bul(i,j+1,0,0,fonkNo)
		} 
	}
}





function yerleştirmeyeÇalış(sağdaki=false,i,j,türN) {
	
	let tahta= sağdaki? tahta2 : tahta1;
	let türev= sağdaki? türevler2[türN] : türevler1[türN];
	
	let [üsttenKaçıncı,soldanKaçıncı] = ilkiKaçıncı(türev)
	if (taşmaÇakışma(i,j,soldanKaçıncı,üsttenKaçıncı,türev,tahta)) {
		adet++
		sağdaki? adet2.push(adet) : adet1.push(adet)
		let kon_i
		let kon_j
		for (let bi=0; bi<3; bi++) {
			for (let bj=0; bj<3; bj++) {
				if (türev[bi][bj]){
					kon_i = i + bi - üsttenKaçıncı	
					kon_j = j + bj - soldanKaçıncı
					tahta[kon_i][kon_j]=adet
				} 
			}
		}
		const türevler= sağdaki? türevler2 : türevler1;
		if (türN == türevler.length)
		yığıt.push(-1)
		else
		yığıt.push(türN+1)
		return true
	}
	return false
}