

function boşblok () {
	let a= []
	for (let i=0; i<3; i++)
	a[i]= Array(3).fill(0)
	return a
}

function bloklarAynıMı (b1, b2) {
	let hepsiaynı = true
	for (let i=0; i<3; i++) {
		for (let j=0; j<3; j++) {
			if (b1[i][j]!=b2[i][j])
			hepsiaynı = false 
		}
	}
	return hepsiaynı
}

function tahtalarAynıMı() {
	let hepsiaynı = true
	let hepsiboş = true
	for (let i=0; i<8; i++) {
		for (let j=0; j<8; j++) {
			if (hepsiboş && tahta1[i][j]) 
			hepsiboş = false
			
			if (hepsiaynı && tahta1[i][j] ? !tahta2[i][j] : tahta2[i][j] )
			hepsiaynı = false
		}
	}
	if (!hepsiboş && hepsiaynı) return true
	else return false
}

function satırAynıMı(i) {
	let hepsiaynı = true
	let hepsiboş = true
	for (let j=0; j<8; j++) {
		if (hepsiboş && tahta1[i][j]) 
		hepsiboş = false
		
		if (hepsiaynı && tahta1[i][j] ? !tahta2[i][j] : tahta2[i][j] )
		hepsiaynı = false
	}
	if (!hepsiboş && hepsiaynı) return true
	else return false
}

function ilkiKaçıncı (hangısı) {
	// şekildeki ilk doluyu bul:
	for (let i=0; i<3; i++) {
		for (let j=0; j<3; j++) {
			if (hangısı[i][j])
			return [i,j]
		}
	}
}


function taşmaÇakışma (i,j,soldanKaçıncı,üsttenKaçıncı, blokN, tahtaN) {
	for (let bi=0; bi<3; bi++) {
		for (let bj=0; bj<3; bj++) {
			let kon_i
			let kon_j
			if (blokN[bi][bj]) {
				kon_i = i + bi - üsttenKaçıncı	
				kon_j = j + bj - soldanKaçıncı
				if (kon_i<0 || kon_j<0 || kon_i>=8 || kon_j>=8) 
				return false
				if (tahtaN[kon_i][kon_j])	// doluysa hata
				return false
			}
		}
	}
	return true
}

function bloksizeÇıkart () {
	blok1size= blok1.flat().reduce((t,a)=>(a && t++,t),0)
	blok2size= blok2.flat().reduce((t,a)=>(a && t++,t),0)
	for (let i of [9,8,7,6,5,4,3,2]) {
		if (blok1size%i==0 && blok2size%i==0) {
			blok1size /= i
			blok2size /= i
			break
		}
	}
}