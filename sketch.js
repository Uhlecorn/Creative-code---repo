var startGrad1, endGrad1, startGrad2, endGrad2;
var ctx;
let count=0;
let x=50;
let newcolor=0;
let size=30;
//let fox;
function preload() {
  //fox = loadImage('assets/foxyboi.jpg');
}


function setup() {
  createCanvas(800, 900);
  var myCanvas = createCanvas(800, 900);
  
  ctx = myCanvas.drawingContext;

background(100);


}

function draw() {
  background(70);
   noStroke();

  
     //black gradient
    var xRect = 275;
  var yRect = 400;
  var sizeRect = 200;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#000000");
  gradient.addColorStop(1, "#BE1E2D");
  ctx.fillStyle = gradient;
   circle(x,100,count);
  
  
  fill(230,230,230);
  
  circle(mouseX,mouseY,60);
  
  if (mouseX<200){
    fill(211,100,50);
  }
  else {
    fill(25,25,25);
  }
 
  circle(x,100,300);
  
  
 //image(fox, 0, 0);
  
  //light orange
  fill(246,180,46,80);
  quad(203,182,212,194,215,164,212,121);
  quad(215,83,270,134,280,134,250,95);
  quad(231,282,231,323,274,325,249,271);
  quad(328,221,322,235,342,241,350,212);
  quad(451,324,462,314,468,322,460,333);
  triangle(369,249,390,232,390,284);
  triangle(231,323,274,325,270,362);
  triangle(278,336,294,365,275,365);
  
  
  //light peach
  fill(253,217,199);
  quad(215,83,212,121,215,164,223,85);
  triangle(558,215,568,202,560,121);
  
  //peach
  fill(250,180,144);
  triangle(223,85,211,194,226,220);
  quad(233,370,267,439,261,455,231,382);
  triangle(332,379,353,394,350,406);
  triangle(570,84,570,202,561,85);
  quad(508,368,533,443,535,475,500,379);
  quad(552,377,554,392,533,440,528,431);
  
  
  //dark orange
  fill(193,61,39);
  triangle(270,214,223,85,334,209);
  triangle(395,140,353,171,437,173);
  triangle(415,145,428,162,428,150);
  triangle(275,212,288,209,283,233);
  triangle(464,195,560,85,517,170);
  triangle(462,198,533,160,515,215);
  triangle(214,484,240,488,209,519);
  quad(235,493,219,539,227,550,244,502);
  quad(570,538,579,517,570,474,544,474);
  
  
   //true orange
  fill(241,90,36,90);
  quad(270,214,283,250,316,219,320,201);
  quad(279,333,285,346,332,295,316,284);
  quad(341,171,346,175,361,157,357,148);
 quad(364,164,418,164,406,204,375,205);
  quad(441,172,462,179,554,86,530,95);
 quad(292,358,292,362,319,340,314,338);
  quad(317,371,326,379,363,358,367,334);
  quad(372,329,390,310,390,369,354,416);
 quad(451,295,478,315,505,333,497,346);
 quad(531,445,533,473,558,549,565,538);
  quad(516,492,544,505,558,549,544,570);
  triangle(348,377,359,360,350,394);
  triangle(391,368,417,419,391,425);
  triangle(424,365,440,387,430,394);
  triangle(390,311,416,339,419,353);
  triangle(460,180,464,227,434,213);
  triangle(461,199,464,227,434,213);
  triangle(493,210,505,213,500,233);
  triangle(507,134,505,142,551,89);
  quad(424,314,486,365,478,369,420,322);
  quad(427,311,492,362,489,363,426,314);
  quad(451,295,468,283,505,333,497,346);
  quad(294,365,297,370,358,321,354,315);
  quad(316,192,320,183,349,212,339,217);
  quad(246,94,276,104,349,179,317,179);
  triangle(461,199,493,210,464,227);
  quad(425,163,425,149,439,171,434,173);
  triangle(214,448,235,484,211,484);
  
  //peachy
  fill(253,196,127);
  quad(390,283,411,249,427,311,390,310);
  triangle(390,310,412,334,427,312);
  
  
  //darker orange
  fill(173,59,37);
  triangle(361,150,366,160,390,142);
  triangle(398,142,415,145,435,172);
  triangle(209,519,235,492,219,539);
  quad(267,133,278,133,320,183,316,192);
  quad(460,180,461,195,505,145,505,135);
  quad(514,167,530,159,557,86,555,84);
  
  //darker light orange
  fill(249,160,36);
  triangle(252,269,279,328,328,221);
  triangle(390,233,411,249,390,283);
  triangle(319,334,339,324,336,334);
  quad(445,318,451,324,462,314,459,311);
  quad(311,314,324,315,317,334,311,327);
 quad(342,241,369,249,349,307,326,292);
 
  //brownish
  fill(214,121,40);
  quad(350,212,342,241,370,249,375,205);
  quad(376,204,391,194,390,232,371,247);
  quad(273,327,278,336,275,365,270,362);
  triangle(410,250,416,252,423,295);

  //dark grey
  fill(59,59,59);
  quad(539,561,544,574,389,839,420,675);
  triangle(400,575,441,530,428,634);
  quad(367,484,389,488,389,590,347,544);
  quad(394,476,425,474,413,484,394,484);
  triangle(396,443,401,452,372,458);
  quad(317,338,341,346,348,342,329,329);
  triangle(287,391,278,453,264,439);
  triangle(287,389,319,399,311,425);
  quad(266,440,278,453,287,391,284,388);
  
  //dark peach
  fill(247,152,104);
  quad(231,365,241,333,286,382,267,444);
  quad(264,439,283,462,280,484,239,508);
  triangle(540,472,554,472,563,449);
  quad(530,442,541,472,562,450,552,392);
  quad(505,367,540,333,549,377,526,431);
  quad(491,389,498,379,519,439,511,442);
  triangle(568,198,580,182,569,95);
  triangle(448,165,528,97,510,102);
  triangle(390,311,422,357,390,369);
  quad(391,365,419,353,437,415,417,419);
  triangle(427,368,451,380,440,387);
  quad(427,311,448,295,497,346,491,360);
  triangle(468,283,476,278,499,325);
  quad(292,362,294,365,354,315,353,313);
  quad(335,297,353,313,345,318,326,308);
  triangle(280,327,303,277,314,284);
  quad(315,208,330,207,338,216,314,284);
  triangle(317,179,347,180,347,212);
  quad(349,179,372,194,375,204,349,212);
  quad(346,175,350,171,365,171,373,195);
  triangle(324,156,356,148,340,173);
  triangle(426,148,458,157,440,173);
  triangle(416,172,441,172,409,195);
  quad(404,199,410,204,461,179,441,172);
  triangle(410,204,434,213,462,179);
  quad(443,217,450,208,464,214,463,226);
  triangle(356,416,391,423,390,369);
  quad(345,415,353,416,372,331,367,334);
  triangle(329,378,337,385,358,362);
  quad(391,194,407,204,416,252,391,234);
 
  //darkish grey
  fill(102,103,103);
  triangle(389,590,428,634,389,838);
  triangle(389,590,401,526,427,632);
  quad(414,484,452,449,442,528,436,534);
  triangle(287,391,278,453,324,445);
  quad(280,453,294,473,328,466,324,445);
  triangle(322,400,337,433,345,415);
  quad(375,425,389,423,384,439,366,440);
  quad(389,423,407,429,398,439,384,439);
  triangle(377,466,401,466,390,474);
  triangle(389,590,427,632,389,838);
  triangle(389,590,401,576,427,632);
  triangle(363,456,348,467,389,474);
  quad(415,455,392,474,425,474,431,468);
  quad(442,530,442,543,528,528,501,452);
  quad(324,445,366,484,346,543,341,537);
  quad(275,362,338,377,320,401,284,388);
  quad(452,377,478,393,490,389,476,366);
  triangle(491,389,478,368,505,368);
  quad(319,340,329,329,348,342,341,346);
   quad(433,315,430,342,466,311,455,308);
  triangle(461,397,471,424,489,389);
  
 
  
  //light grey
  fill(191,190,190);
  quad(335,442,343,416,376,424,362,442);
  triangle(454,456,491,467,441,530);
  quad(452,455,490,466,499,455,490,388);
  quad(457,400,459,397,471,424,467,431);
  triangle(458,380,458,397,478,393);
  triangle(431,393,434,404,444,385);
  triangle(431,417,440,432,458,399);
  quad(310,427,320,401,353,464,347,471);
  quad(322,400,334,386,346,406,344,416);
  triangle(294,473,328,466,339,525);
  quad(317,308,325,327,349,342,344,315);
  
  //white
  fill(255,255,255);
  quad(335,442,343,416,376,424,362,442);
  quad(338,442,352,467,367,454,367,443);
  quad(416,442,412,454,429,468,442,445);
  triangle(490,391,499,454,512,442);
  quad(396,423,406,441,442,442,437,415);
  quad(444,386,460,399,437,417,434,405);
  
  //pink
  fill(242,113,132);
  triangle(357,625,389,589,389,837);
  triangle(357,625,389,590,377,576);
  triangle(284,460,280,495,339,525);
  quad(508,363,547,324,548,282,533,273);
  quad(501,252,510,258,500,321,495,313);
  quad(407,203,433,214,472,281,427,311);
  
  //pinkish purple
  fill(233,131,157);
  quad(486,242,500,250,495,313,476,278);
  
  //purple
  fill(146,80,145);
  quad(437,217,459,223,484,241,472,283);
  quad(511,258,532,272,514,341,500,325);
  quad(500,325,514,341,505,367,488,368);
  
  //grey
  fill(209,209,209);
  quad(431,468,440,432,457,400,468,432);
  triangle(445,385,458,397,458,378);
  quad(393,487,413,484,437,535,389,590);
  
  //black
  fill(0,0,0);
  quad(357,475,366,484,392,487,390,474);
  quad(371,458,377,466,401,466,413,451);
  triangle(366,442,369,459,399,439);
  quad(301,315,314,338,328,328,316,310);
  quad(464,311,477,315,466,338,437,345);
  
   //light orange
  fill(246,180,46);
  quad(203,182,212,194,215,164,212,121);
  quad(215,83,270,134,280,134,250,95);
  quad(231,282,231,323,274,325,249,271);
  quad(328,221,322,235,342,241,350,212);
  quad(451,324,462,314,468,322,460,333);
  triangle(369,249,390,232,390,284);
  triangle(231,323,274,325,270,362);
  triangle(278,336,294,365,275,365);
  
   //lightish orange
  fill(244,117,53);
  quad(305,324,314,338,292,358,283,346);
  quad(317,308,326,308,334,297,330,295);
  quad(298,369,311,376,367,334,358,321);
  quad(412,334,422,363,448,382,460,372);
  quad(420,321,411,334,466,375,480,370);
  quad(500,455,519,439,544,505,516,492);
  triangle(548,485,567,450,570,485);
  quad(229,386,258,455,241,501,214,448);
  quad(239,508,280,484,236,574,223,553);
  quad(465,227,493,210,501,236,498,248);
  
  //brownish
  fill(214,121,40);
  quad(350,212,342,241,370,249,375,205);
  quad(376,204,391,194,390,232,371,247);
  quad(273,327,278,336,275,365,270,362);
  triangle(410,250,416,252,423,295);
  quad(445,318,451,324,462,314,459,311);
  
  //orangey orange
  fill(244,119,56);
  quad(439,324,442,333,451,324,445,318);
  quad(311,314,324,315,317,334,311,327);
  triangle(319,334,336,334,339,324);
  
  //yellow
  fill(251,233,119);
  quad(322,234,342,241,326,292,303,277);
  quad(369,250,390,283,390,308,349,308);
  triangle(349,307,390,308,367,334);
  triangle(324,315,339,324,314,338);
  quad(451,324,462,333,453,338,444,333);
  //gradient
   var xRect = 250;
  var yRect = 600;
  var sizeRect = 200;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#5071B7");
  gradient.addColorStop(1, "#F27184");
  ctx.fillStyle = gradient;
   quad(238, 572, 247, 561, 370, 675,392, 840);
  triangle(341,538,377,575,357,625);
  
  //gradient2
    var xRect = 150;
  var yRect = 500;
  var sizeRect = 100;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#2192D0");
  gradient.addColorStop(1, "#B8D433");
  ctx.fillStyle = gradient;
  quad(280,493,341,525,370,675,246,561);
  
  
   //peach gradient1
    var xRect = 75;
  var yRect = 50;
  var sizeRect = 100;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#F5854C");
  gradient.addColorStop(1, "#FFFFFF");
  ctx.fillStyle = gradient;
  quad(224,238,267,213,280,250,231,282);
  triangle(224,238,267,213,220,85);
  
  
   //peach gradient2
    var xRect = 455;
  var yRect = 100;
  var sizeRect = 100;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#F5854C");
  gradient.addColorStop(1, "#FFFFFF");
  ctx.fillStyle = gradient;
  triangle(510,217,557,241,559,85);
  quad(510,219,557,241,551,284,498,249);
  
   //black gradient
    var xRect = 275;
  var yRect = 400;
  var sizeRect = 200;

  startGrad1 = createVector(xRect, yRect + sizeRect)
  endGrad1 = createVector(xRect + sizeRect, yRect)

  var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
  gradient.addColorStop(0, "#000000");
  gradient.addColorStop(1, "#FFFFFF");
  ctx.fillStyle = gradient;
  quad(420,675,440,546,526,525,539,561);

}
function keyPressed(){
  newcolor=count+100;
}
function mousePressed(){
 count=count+100;
  
}
