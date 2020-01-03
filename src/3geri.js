

function geriAl () {
	let türev = -1
	let ilki = -1
	let ilkj = -1
	let sağdaki = -1
	while (türev == -1) { // son eklenenin başka varyasyonu kalmadığı için ;
		try { türev = yığıt.pop() }
		catch (error) { çağıBitir(); return false }
		if (!adet) { çağıBitir(); return false }
		

		// son eklediğini sil:
		for (let i=0; i<8; i++) {
			for (let j=0; j<8; j++) {
				if (tahta1[i][j]==adet) {
					tahta1[i][j]=0
					if (ilki<0) { // ilkinin konumu
						sağdaki = 0
						ilki = i
						ilkj = j
					}
				}
				if (tahta2[i][j]==adet) {
					tahta2[i][j]=0
					if (ilki<0) { // ilkinin konumu
						sağdaki = 1
						ilki = i
						ilkj = j
					}
				}
			}
		}
		if (adet1[adet1.length-1]==adet) adet1.pop()
		if (adet2[adet2.length-1]==adet) adet2.pop()

		adet--
	}
	// console.log(ilki , ilkj , sağdaki, türev)
	return [ilki , ilkj , sağdaki, türev, fonkno]
}

function çağıBitir () {
	if (derinlik<10) {
		derinlik++
		sıfırla()
	} else
	winLoose= 2;
}