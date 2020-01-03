
function mousePressed() { 
	
	if (mouseX>kutuEni/2 && mouseX<kutuEni/2+kutuEni*3 && mouseY>kutuEni*4 && mouseY<kutuEni*4+kutuEni*3) {
		let kaçıncıJ = floor((mouseX-kutuEni/2)/kutuEni)
		let kaçıncıI = floor((mouseY-kutuEni*4)/kutuEni)
		if (blok1[kaçıncıI][kaçıncıJ]) blok1[kaçıncıI][kaçıncıJ]= 0
		else blok1[kaçıncıI][kaçıncıJ]= 1
		derinlik= 1
		türev1Çıkart()
		bloksizeÇıkart()
		sıfırla()
	} else if (mouseX>kutuEni*23.5 && mouseX<kutuEni*23.5+kutuEni*3 && mouseY>kutuEni*4 && mouseY<kutuEni*4+kutuEni*3) {
		let kaçıncıJ = floor((mouseX-kutuEni*23.5)/kutuEni)
		let kaçıncıI = floor((mouseY-kutuEni*4)/kutuEni)
		if (blok2[kaçıncıI][kaçıncıJ]) blok2[kaçıncıI][kaçıncıJ]= 0
		else blok2[kaçıncıI][kaçıncıJ]= 1		
		derinlik= 1
		türev2Çıkart()
		bloksizeÇıkart()
		sıfırla()
	} else {	
		pause = pause ? 0 : 1
	}
}

function fareKontrol () {	
	fareÜzerinde = 0
	if (mouseX>kutuEni*4 && mouseX<kutuEni*4+kutuEni*8 && mouseY>kutuEni*2 && mouseY<kutuEni*2+kutuEni*8) {
		let kaçıncıJ = floor((mouseX-kutuEni*4)/kutuEni)
		let kaçıncıI = floor((mouseY-kutuEni*2)/kutuEni)
		if (tahta1[kaçıncıI][kaçıncıJ]) 
		fareÜzerinde = tahta1[kaçıncıI][kaçıncıJ]
	} else if (mouseX>kutuEni*15 && mouseX<kutuEni*15+kutuEni*8 && mouseY>kutuEni*2 && mouseY<kutuEni*2+kutuEni*8) {
		let kaçıncıJ = floor((mouseX-kutuEni*15)/kutuEni)
		let kaçıncıI = floor((mouseY-kutuEni*2)/kutuEni)
		if (tahta2[kaçıncıI][kaçıncıJ]) 
		fareÜzerinde = tahta2[kaçıncıI][kaçıncıJ]
	}
}


async function sıfırla () {
	adet= 0
	adet1= []
	adet2= []
	renkDizgesi.tahta1 = []
	renkDizgesi.tahta2 = []
	renkDizgesi.tahta1[0] = floor(random(360))
	renkDizgesi.tahta2[0] = floor(random(360))
	for (let i=0; i<8; i++) {
		tahta1[i]=Array(8).fill(0)
		tahta2[i]=Array(8).fill(0)
	}
	yığıt = []
	pause= 0
	winLoose= 0
	fonkno++
	bul(0,0,0,0,fonkno)
}



function mouseWheel(event) {
	if(event.delta<0) { derinlik<10 && derinlik++; sıfırla() }  //  YOHARI
	if(event.delta>0) { derinlik>0  && derinlik--; sıfırla() }  //  ASAGI
}
