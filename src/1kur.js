
let blok1= []
let blok2= []
let renkDizgesi= {}
let tahta1= []
let tahta2= []
let adet= 0
let adet1= []
let adet2= []
let derinlik= 1
let blok1size
let blok2size
let türevler1= []
let türevler2= []
let yığıt= []
let pause= 0
let winLoose= 0
let fareÜzerinde= 0
let fonkno= 0


function setup() {    // AÇILIŞ EKRANI 
	createCanvas(innerWidth-30, innerHeight-40);
	colorMode(HSB);
	frameRate(20);            
	// let hızlı= createButton('HIZLI').position(485 ,500).mousePressed( ()=> oyunDurumu=4);

	blok1 = [
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	]
	
	blok2 = [
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	]
	
	renkDizgesi.blok1= floor(random(360))
	renkDizgesi.blok2= floor(random(360))
	
	for (let i=0; i<8; i++) {
		tahta1[i]=Array(8).fill(0)
		tahta2[i]=Array(8).fill(0)
	}

	renkDizgesi.tahta1 = []
	renkDizgesi.tahta2 = []
	renkDizgesi.tahta1[0] = floor(random(360))
	renkDizgesi.tahta2[0] = floor(random(360))
	
	türev1Çıkart()
	türev2Çıkart()
	bloksizeÇıkart()

	bul(0,0,0,0,fonkno)
}

function bekle(ms=0) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

function kopi(anam) {
	return JSON.parse(JSON.stringify(anam))
}