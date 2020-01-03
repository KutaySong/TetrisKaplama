( English description below     	)
( Project Name: Tetris Two Tiles    )


# NE YAPAR ?                                
Sol taraftaki 3x3 ekrandaki şeklin döndürülmüş ve tersyüz edilmiş hallerini birleştirerek 
8x8 ekranda öyle bir desen oluşturur ki , aynı desen sağ taraftaki 3x3 ekrandaki şekil ile de oluşturulabilsin.
Gittikçe artan derinlikte arar, sonucu bulabilirse tebessüm eder.
(Ref: Google Code 2018 Final Sorusu - 3 kişi problemi yarışmada çözebildi)




![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK3.jpg?raw=true "EkranKesiti")


## Etkileşim

1. 3x3 karelere tıklamak:	Aranacak tetris bloğunu değiştirir.
2. dışına tıklamak: 		Dondurur.
3. Fare tekeri:				Arama Derinliğini artırıp azaltır.


## Harezmik Yöntem
Hafıza (ram) ve Yineli yöntemin fonksiyon yığıtını patlatabilmesi sebepleri ile
asenkron fonksiyonlar kullandım. Esas algoritma ayarlanmış DFS kullanıyor. 
Böylelikle olası tüm kombinasyonlar yüklenerek hafıza şişirilmiyor.


# WHAT FOR ?
Tries the find the same tiling with two different 3x3 tetris blocks.
Blocks are editible with mouse clicks.
In the tile the block can be shifted, rotated or mirrored.
Search depth is adjustable, starting from minimum depth.


![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK3.jpg?raw=true "EkranKesiti")


## Interaction

1. Clicking on 3x3 grid:	Reshape the tetris block type
2. Clicking elsewhere:		Pause
3. Mouse wheel:				Increase decrease search depth


## Algorithm :
Because of memory and callstack limitations, async functions are used.
Main algorithm uses a modified DFS, does not load all variations to memory,
so it is memory efficient.