
const kutuEni = 40	 // 40


function draw() {     
	background(0)
	fareKontrol()
	zeminiÇiz(kutuEni/2,kutuEni*4,3)
	bloğuÇiz(kutuEni/2,kutuEni*4,blok1,renkDizgesi.blok1)
	zeminiÇiz(kutuEni*4,kutuEni*2,8)
	bloğuÇiz(kutuEni*4,kutuEni*2,tahta1,renkDizgesi.tahta1[0],8,0)
	zeminiÇiz(kutuEni*15,kutuEni*2,8)
	bloğuÇiz(kutuEni*15,kutuEni*2,tahta2,renkDizgesi.tahta2[0],8,1)
	zeminiÇiz(kutuEni*23.5,kutuEni*4,3)
	bloğuÇiz(kutuEni*23.5,kutuEni*4,blok2,renkDizgesi.blok2)
	eşitmiYazısı()
    if (frameCount<100) ekranaYaz()
	if (winLoose == 1 ) gülücükÇiz()
	if (winLoose == 2 ) somurtkanÇiz()
}

function zeminiÇiz(x,y,kaçlı) {
	// içerisi
	strokeWeight(3)	
	stroke('gray')
	
	for (i=1; i<kaçlı; i++) {
		line(x, y+i*kutuEni, x+kaçlı*kutuEni, y+i*kutuEni)
		line(x+i*kutuEni, y, x+i*kutuEni, y+kaçlı*kutuEni)
	}
	
	// çerçeve
	strokeWeight(4)	
	stroke('white')
	line(x, y, x+kaçlı*kutuEni, y)
	line(x, y+kaçlı*kutuEni, x+kaçlı*kutuEni, y+kaçlı*kutuEni)
	line(x, y, x, y+kaçlı*kutuEni)
	line(x+kaçlı*kutuEni, y, x+kaçlı*kutuEni, y+kaçlı*kutuEni)
}

function bloğuÇiz(xim,yim,dizge,renk,kaçlı=3,hangisi=0) {
	
	noStroke()
	fill(renk,100,85);
	let x = floor(xim)
	let y = floor(yim)
	let diğeri

	if (hangisi) 	{ diğeri = tahta1}
	else 			{ diğeri = tahta2}

	for (let i=0; i<kaçlı; i++) {
		for (let j=0; j<kaçlı; j++) {		
			if (dizge[i][j]) {
				if (kaçlı==8) {
					let renk = (dizge[i][j]*223+167)%360
					let parlaklık = 90

					if (dizge[i][j]==fareÜzerinde)
					parlaklık -= 20
					fill(renk ,100,parlaklık)
				}
				rect(x+j*kutuEni+2,y+i*kutuEni+2,kutuEni-3,kutuEni-4);
			}	
		}
	}
}

function eşitmiYazısı() {  // =?
	fill("orange")
	textSize(40)
	text("?",kutuEni*13.1,kutuEni*8.5)
	textSize(80)
	text("=",kutuEni*12.8,kutuEni*10)
}

function gülücükÇiz () {
	// fill(160,100,100)
	// arc(500,500,100,100,PI,2*PI)
	
	fill(60,100,100)
	arc(kutuEni*13.5,kutuEni*12,500,400,0,PI)
	fill(0)
	arc(kutuEni*13.5,kutuEni*12,400,350,0,PI)
}

function somurtkanÇiz () {	
	// fill(160,100,100)
	// arc(500,500,100,100,PI,2*PI)
	
	fill(60,100,100)
	arc(kutuEni*13.5,kutuEni*18,500,400,PI,2*PI)
	fill(0)
	arc(kutuEni*13.5,kutuEni*18,400,350,PI,2*PI)
}


function ekranaYaz () {
    fill("white")
	textSize(60)
    stroke("green") 
	text ("F5 :  Refresh", 100 , 600)
    stroke("red")
    text ("CLICK anywhere: pause", 100, 700)	
    stroke("green") 
    text ("CLICK on 3X3: change block", 100 , 800)
	stroke("blue")
    text ("mouse WHEEL up/dn: search depth", 100 , 900)
    noStroke()
}