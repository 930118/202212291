var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("metamon_uta.mp3");}
var meta_size, meta_x, meta_y

function showResult()
	{
		if(myRec.resultValue==true) {
	
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="不要跳")
      {
        song.pause()
        mosueIsplay = true
        songIsplay = false
        }
		}
	}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  meta_x = width/2.5
  meta_y = height/2
  meta_x2 = width/1.7
  meta_y2 = height/2

  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', '#c48ac3');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
  
  mouse_btn = createButton("暫停")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', '#c48ac3');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(跳舞/不要跳)")//設定按鈕(語音辨識(跳舞/不要跳))
  Speech_btn.position(740,10) //設定按鈕(座標:740,10)
  Speech_btn.size(350, 100);//設定按鈕(大小350,100)
  Speech_btn.style('background-color', '#c48ac3'); //設定按鈕(背景:#c48ac3)
  Speech_btn.style('font-size', '33px');//設定按鈕(文字大小)
  Speech_btn.style('color', 'white');//設定按鈕(文字顏色白色)
  Speech_btn.mousePressed(Speech_btn_pressed)//設定按鈕(Speech_btn_pressed)
}

function music_btn_pressed(){
   song.stop()
   song.play()
   songIsplay = true
   mosueIsplay = false
   amp=new p5.Amplitude()
   music_btn.style('background-color', '#ae5ead')
   mouse_btn.style('background-color', '#c48ac3')
   Speech_btn.style('background-color', '#ae5ead')
}

function mouse_btn_pressed(){
   song.pause()
   mosueIsplay = true
   songIsplay = false
   music_btn.style('background-color',  '#c48ac3')
   mouse_btn.style('background-color','#ae5ead')
   Speech_btn.style('background-color',  '#c48ac3')
    }
   
function Speech_btn_pressed(){
    myRec.onResult = showResult;
    myRec.start();
    music_btn.style('background-color', '#ae5ead');//設定按鈕顏色 
    mouse_btn.style('background-color', '#ae5ead');//設定按鈕顏色 
    Speech_btn.style('background-color', '#c48ac3');//設定按鈕顏色 
     
    
    } 
    
function draw() {
  background("#F8DAE2");
 
  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,20,0,width) 
    m_y= map(vol,0,2,0,height)
  }
  else
  if(mosueIsplay)
  {
    m_x = mouseX
    m_y= mouseY

  }

 push()
 translate(width/2,height/2)

 if(mouseIsPressed)//mouseIsPressed為true，代表有按下滑鼠
    {
      textSize(40)
    fill("#ffebff")
    text("~METAMETAMON~",-133,140)
    fill("#bb9eb9")
    text("~METAMETAMON~",-130,140)
    }

  else 
  {
   fill("#bb9eb9")
   textSize(40)
   text("~METAMETAMON~",-130,140)
  }

  pop()

   //紫色的百變怪
  push()
  translate(meta_x,meta_y)//使原點座標移動(0,0)
  
  noStroke()//map即是將此物體定為圓心，並在此範圍內移動(0~-10)
  fill("#dbb1cd")
  ellipse(+30+map(m_x,0,width,-10,10),-15+map(m_y,0,height,-10,10),200)//身體
  ellipse(-50+map(m_x,0,width,-10,10),-80+map(m_y,0,height,-10,10),55,70)//左手
  ellipse(-50+map(m_x,0,width,-10,20),-80+map(m_y,0,height,-10,10),55,70)//左手(外伸)
  ellipse(+5+map(m_x,0,width,-10,10),-100+map(m_y,0,height,-10,10),70)//左邊的頭
  ellipse(+60+map(m_x,0,width,-10,10),-100+map(m_y,0,height,-10,10),50)//右邊的頭
  ellipse(+100+map(m_x,0,width,-10,10),-80+map(m_y,0,height,-10,10),60,80)//右手
  ellipse(+100+map(m_x,0,width,-20,20),-80+map(m_y,0,height,-10,10),60,80)//右手(外伸)
  ellipse(+90+map(m_x,0,width,-20,20),+50+map(m_y,0,height,-10,10),90,70)
  ellipse(-50+map(m_x,0,width,-10,10),+50+map(m_y,0,height,-10,10),70)
  ellipse(-50+map(m_x,0,width,-10,20),+50+map(m_y,0,height,-10,10),70)
  ellipse(+90+map(m_x,0,width,-10,10),+50+map(m_y,0,height,-10,10),90,70)
  rect(-50+map(m_x,0,width,-10,10),55+map(m_y,0,height,-10,10),135,30)
  rect(75+map(m_x,0,width,-10,10),-75+map(m_y,0,height,-10,10),55,135)
  rect(-75+map(m_x,0,width,-10,10),-75+map(m_y,0,height,-10,10),55,135)
  rect(-50+map(m_x,0,width,-10,10),-108+map(m_y,0,height,-10,10),100,30)
  
 

  fill("#4D3900")
  ellipse(+5+map(m_x,0,width,-10,10),-90+map(m_y,0,height,-10,10),5)
  ellipse(+60+map(m_x,0,width,-10,10),-90+map(m_y,0,height,-10,10),5)

  fill("#a52a2a")
  arc(30+map(m_x,0,width,-10,10),-80+map(m_y,0,height,-10,10),120,-5,0,PI)
   
  if(mouseIsPressed)
   {
    fill("#a52a2a")
    arc(30+map(m_x,0,width,-10,10),-80+map(m_y,0,height,-10,10),120,10,0,PI)
   }
 
  pop()

   //藍色的百變怪
  push()
  translate(meta_x2,meta_y2)//使原點座標移動(0,0)
  
  noStroke()//map即是將此物體定為圓心，並在此範圍內移動(0~-10)
  fill("#b7cae0")
  ellipse(+30+map(m_x,0,width,-10,10),-15+map(m_y,0,height,-10,10),100)//身體
  ellipse(-27+map(m_x,0,width,-10,10),-50+map(m_y,0,height,-10,10),45,60)//左手
  ellipse(-27+map(m_x,0,width,-10,20),-50+map(m_y,0,height,-10,10),45,60)//左手(外伸)
  ellipse(+10+map(m_x,0,width,-10,10),-60+map(m_y,0,height,-10,10),60)//左邊的頭
  ellipse(+60+map(m_x,0,width,-10,10),-60+map(m_y,0,height,-10,10),45)//右邊的頭
  ellipse(+100+map(m_x,0,width,-10,10),-50+map(m_y,0,height,-10,10),40,60)//右手
  ellipse(+100+map(m_x,0,width,-20,20),-50+map(m_y,0,height,-10,10),40,60)//右手(外伸)
  ellipse(+85+map(m_x,0,width,-20,20),+30+map(m_y,0,height,-10,10),75,60)//右邊的腳
  ellipse(+85+map(m_x,0,width,-10,10),+30+map(m_y,0,height,-10,10),75,60)//右邊的腳(外伸)
  ellipse(-30+map(m_x,0,width,-10,10),+30+map(m_y,0,height,-10,10),60)//左邊的腳
  ellipse(-30+map(m_x,0,width,-10,20),+30+map(m_y,0,height,-10,10),60)//左邊的腳(外伸)
  rect(-30+map(m_x,0,width,-10,10),25+map(m_y,0,height,-10,10),100,35)
  rect(65+map(m_x,0,width,-10,10),-75+map(m_y,0,height,-10,10),45,125)
  rect(-40+map(m_x,0,width,-10,10),-75+map(m_y,0,height,-10,10),55,135)
  rect(-30+map(m_x,0,width,-10,10),-78+map(m_y,0,height,-10,10),100,30)
  
 

  fill("#4D3900")
  ellipse(+10+map(m_x,0,width,-10,10),-55+map(m_y,0,height,-10,10),5)
  ellipse(+60+map(m_x,0,width,-10,10),-55+map(m_y,0,height,-10,10),5)

  fill("#a52a2a")
  arc(35+map(m_x,0,width,-10,10),-47+map(m_y,0,height,-10,10),100,-5,0,PI)
   
  if(mouseIsPressed)//mouseIsPressed為true，代表有按下滑鼠
  {

     fill("#a52a2a")
     arc(35+map(m_x,0,width,-10,10),-47+map(m_y,0,height,-10,10),100,10,0,PI)

  }
 
  pop()
}





