var loginbg,islandbg;
var START = 0;
var PLAY = 1;
var gameState = START;
var loginform,creatures,choosecreatureform,adminform,infoForm,quiz;
var creaturecountdb;
var showisland = false;
var creaturelistdb=[];
var alluserinfo = [];
var database;
var usercount;
var animal;
var egg,egg_img;
var quizflag=false;
var AfterChooseCreatureForm=false;

var meat,fish,plants,meat_img,fish_img,plants_img;
var snowIsland,riverIsland,forestIsland,snowIsland_img,nest,riverIsland_img,forestIsland_img,nest_img;
var cave,cave_img,Woolly_Mammoth,Woolly_Mammoth_img;
var food_selection_flag = false;
var habitat_selection_flag = false;
var maze;
var mammal_sprite;
var button;
var creature_button  =[];
function preload() {
  loginbg = loadImage("images/loadingbg.jpg");  
  islandbg = loadImage("images/sky.jpg");
  snowIsland_img = loadImage("images/snowIsland.png");
  riverIsland_img = loadImage("images/riverIsland.png");
  forestIsland_img = loadImage("images/forestIsland.png");

  nest_img = loadImage("images/nest.jpg");
  egg_img = loadImage("images/egg.png");
  cave_img = loadImage("images/caves.jpg");
  meat_img = loadImage("images/meat3.jpg");
  fish_img = loadImage("images/fish1.png");
  plants_img = loadImage("images/plant.jpg");
}

function setup() {
  createCanvas(windowWidth-50,windowHeight-100);
  database = firebase.database();
  creatures = new Creatures();
  loginform = new LoginForm();
  
  /*adminform = new AdminForm();
  adminform.hide();*/
  Creatures.getUserInfo();
  snowIsland = createSprite(200,300,180,180);
  snowIsland.addImage("snowIsland",snowIsland_img);
  snowIsland.setCollider("rectangle",0,0,180,180);
  riverIsland = createSprite(500,400,100,100);
  riverIsland.addImage("riverIsland",riverIsland_img);
  forestIsland = createSprite(850,350,100,100);
  forestIsland.addImage("forestIsland",forestIsland_img);
  meat = createSprite(300,60,150,100);
  meat.addImage("meat2",meat_img);
  meat.setCollider("rectangle",0,0,150,100);
  fish = createSprite(600,60,240,100);
  fish.addImage("fish",fish_img);
  fish.setCollider("rectangle",0,0,240,100);
  plants = createSprite(900,60,130,115);
  plants.addImage("plants",plants_img);
  plants.setCollider("rectangle",0,0,130,115);
  //console.log("Showing all sprites");
  egg = createSprite(1000,475,50,50);
  nest = createSprite(1000,500,50,50);
  mammal_sprite = createSprite(100,475,50,50);
  cave = createSprite(1000,475,10,10  );
  cave.addImage("caves",cave_img); 
       
  cave.visible=false;         
  nest.visible=false;
  snowIsland.visible=false; 
  riverIsland.visible=false; 
  forestIsland.visible=false; 
  meat.visible=false; 
  fish.visible=false; 
  plants.visible=false;
  egg.visible=false;
  mammal_sprite.visible=false;
  //maze=new Maze();
  //animal = new Creatures("Woolly_Mammoth","creature area","herbivore","iceage","plants","snow","land","creature height","creature weight","no");
  //showisland = true;
 // animal = new Creatures("Trex","creature area","carnivore","cretacious","meat","forest","land","creature height","creature weight","no");
 //animal = new Creatures("Trex","creature area","herbivore","iceage","plants","river","land","creature height","creature weight","yes");
  //animal = new Creatures("Mosasaurus","creature area","carnivore","iceage","fish","river","land","creature height","creature weight","no");
  //animal = new Creatures("Smilodon","creature area","carnivore","iceage","meat","snow","land","creature height","creature weight","yes");
 //animal = new Creatures("Trex","creature area","herbivore","iceage","plants","forest","land","creature height","creature weight","no");
 //showisland=true;   

}
 function mouseClicked(){
  //if (showisland === true) {
 
  if(AfterChooseCreatureForm === true){
      var count = Object.keys(creaturelistdb);
      //mammal_sprite.visible = true;

      creature_button[0].mousePressed(()=>{
    //  console.log("buttonname Pressed : from chooseCreatureForm 0 ");
      var k= count[0];
      animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
      creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
      creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
      infoForm = new  InfoForm();
      infoForm.display();
      creature_button[0].remove();
      creature_button[1].remove();
      
      showisland=true;
    });
    creature_button[1].mousePressed(()=>{
      //  console.log("buttonname Pressed : from chooseCreatureForm 0 ");
        var k= count[1];
        animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
        creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
        creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
        infoForm = new  InfoForm();
        infoForm.display();
        creature_button[1].remove();
        creature_button[0].remove();
        showisland=true;
      }); 
  }
}
function draw() {

   
  if (quizflag===true){
    background(165,210,240);
  }else
         background(loginbg);
  //background("white");
   //background("black");
    loginform.display();  
    // coming from choose creature.js on success condition.
    if (showisland === true ) {
      background(islandbg);
      snowIsland.visible=true; 
      riverIsland.visible=true; 
      forestIsland.visible=true; 
      meat.visible=true; 
      fish.visible=true; 
      plants.visible=true;
      
     // background(255);
      if(animal.mammal === "yes"){ 
        //console.log("Sprite getting visible -mammal");
        
        mammal_sprite.visible=true;
        mammal_sprite.setCollider("rectangle",0,0,50,50);
        /*var mammal_img_name = "images/baby_"+animal.name+".jpg";
        mammal_img = loadImage(mammal_img_name);
        console.log("mammal_img"+mammal_img);
        var tempname = "baby_"+animal.name;
        mammal_sprite.addImage(tempname,mammal_img);*/
        mammal_sprite.addImage("egg",egg_img);
        //console.log("Sprite getting visible -mammal Finished");

        cave.visible=true;
        //  
          cave.depth = mammal_sprite.depth;
          background.depth=mammal_sprite.depth;
          mammal_sprite.depth = mammal_sprite.depth+1;
          //console.log("animal.mammal"+animal.mammal);
      }else if (animal.mammal === "no") {
         // egg = createSprite(1000,475,50,50);
         egg.visible=true;
          egg.setCollider("rectangle",0,0,50,50);
          egg.addImage("egg",egg_img);
         /* egg.depth = plants.depth;
          egg.depth = fish.depth;
          egg.depth = meat.depth;*/
          nest.visible=true;

          nest.addImage("nest",nest_img);
          nest.depth = egg.depth;
          egg.depth = egg.depth+1
        //  console.log("animal.mammal"+animal.mammal);
         
          //egg.depth = snowIsland.depth;
      }
      show();
    }







    if (food_selection_flag === true && habitat_selection_flag === true){
        //showisland = false;
       console.log("line 1 ");
        showisland = false;
        snowIsland.visible = false;
        riverIsland.visible = false;
        forestIsland.visible = false;
        meat.visible = false;
        fish.visible = false;
        plants.visible = false;

        nest.visible = false;
        egg.visible = false;

        food_selection_flag=false;
        habitat_selection_flag=false;
        mammal_sprite.visible=false;
        cave.visible=false;
        console.log("line 2");
        
        
       // console.log(" Hide Value: snowIsland" + snowIsland.visible) ;
        //console.log(" Hide Value: meat " + meat.visible) ;
        //console.log(" Hide Value: disablefish" + fish.disable) ;
        //egg.x = 100;
        //egg.y = 100;
  
      /*  this.dietRadio.disable = "true";
        this.dietText.disable = "true";*/
      //  hide();
      //background(165,220,240);
      quizflag=true;
      quiz = new Quiz();
        quiz.display();
        console.log("line 3");
      // hide();
      }
     
    
  drawSprites();
}
function hide() {
  snowIsland.visible=false;
  riverIsland.visible=false;
  forestIsland.visible=false;
  meat.visible=false;
  fish.visible=false;
  plants.visible=false;
 
 
  if(animal.mammal === "yes"){ 
      mammal_img.visible=false;
      mammal_sprite.visible=false;
      cave.visible=false;      
            //console.log("animal.mammal"+animal.mammal);
  }else if (animal.mammal === "no") {
    nest.visible=false;
    egg.visible=false;
  }
}
function show(){
  snowIsland.visible=true;
  riverIsland.visible=true;
  forestIsland.visible=true;
  meat.visible=true;
  fish.visible=true;
  plants.visible=true;
  if(animal.mammal === "yes"){ 
        // mammal_img.visible=true;
        cave.visible=true;      
        mammal_sprite.visible=true;
        
                //console.log("animal.mammal"+animal.mammal);
    }else if (animal.mammal === "no") {
          nest.visible=true;
          egg.visible=true;
    }
}

function mouseDragged() {
  background(islandbg);

if (animal.mammal === "no"){
 // show();
  var forestIsaland_Flag=false;
  var snowIsland_Flag= false;
  var riverIsaland_Flag= false;
  var meat_Flag=false;
  var fish_Flag= false;
  var plant_Flag= false;
  mammal_sprite.visible=false;
  egg.x = mouseX;
  egg.y = mouseY; 
  if (isTouching(fish,egg)) {
      fish_Flag=true;
      
  } else if (isTouching(meat,egg)) {
      meat_Flag =true;
  } else if (isTouching(plants,egg)) {
      plant_Flag =true;
  }

  if (isTouching(snowIsland,egg)) {
       snowIsland_Flag=true;
  } else if (isTouching(forestIsland,egg)) {
       forestIsaland_Flag =true;
  } else if (isTouching(riverIsland,egg)) {
       riverIsaland_Flag =true;
  }
  if (fish_Flag === true ){
              
        if  (animal.food === "fish" ) {
         // console.log("touched fish correctly");
          //Q3 :ask mam  how to disable other options on correct selection of sprite. 
            plants.visible=false;
          meat.visible=false;
          food_selection_flag = true;
          fish_Flag=false;
        }else{
        //  console.log("touched other than fish incorrectly");
          infoForm.display();
        }
  } else if ( meat_Flag === true ){

        if  (animal.food === "meat" ) {
        //  console.log("touched meat correctly");
          food_selection_flag = true;
          plants.visible=false;
          fish.visible=false;
          meat_Flag=false;
        }else{
   //       console.log("touched other than meat incorrectly");
          infoForm = new  InfoForm();
          infoForm.display();
        }

  }else if ( plant_Flag === true){

        if  (animal.food === "plants" ) {
        //  console.log("touched plant correctly");
          food_selection_flag = true;
          meat.visible=false;
          fish.visible=false;
          plant_Flag=false;
        }else{
         // console.log("touched other than plant incorrectly");
          infoForm = new  InfoForm();
          infoForm.display();
        }

  }
  if (snowIsland_Flag === true ){
      
      if  (animal.habitat === "snow" ) {
        //eatFood();
      //  console.log("touched snow correctly");
        habitat_selection_flag = true;
        snowIsland_Flag=false;
      }else{
        //console.log("touched other than snow incorrectly");
        infoForm = new  InfoForm();
        infoForm.display();
      }


  } else if ( forestIsaland_Flag === true ){
     
      if  (animal.habitat === "forest" ) {
       // console.log("touched forest correctly");
        //eatFood();
        habitat_selection_flag = true;
        forestIsaland_Flag=false;
      }else{
       // console.log("touched other than forest incorrectly");
        infoForm = new  InfoForm();
        infoForm.display();
      }

  }else if ( riverIsaland_Flag === true){
    
      if  (animal.habitat === "river" ) {
       // console.log("touched river correctly");
        //eatFood();
        habitat_selection_flag = true;
        riverIsaland_Flag=false;
      }else{
      //  console.log("touched other than river incorrectly");
        infoForm = new  InfoForm();
        infoForm.display();
      }
  }
}
 else if(animal.mammal === "yes"){
       // show();
        
        var forestIsaland_Flag=false;
        var snowIsland_Flag= false;
        var riverIsaland_Flag= false;
        var meat_Flag=false;
        var fish_Flag= false;
        var plant_Flag= false;
        mammal_sprite.visible=true;
        console.log("setting mammalsprite to visible"+mammal_sprite.visible);
        mammal_sprite.x = mouseX;
        mammal_sprite.y = mouseY;
        if (isTouching(fish,mammal_sprite)) {
            fish_Flag=true;
            
        } else if (isTouching(meat,mammal_sprite)) {
            meat_Flag =true;
        } else if (isTouching(plants,mammal_sprite)) {
            plant_Flag =true;
        }

        if (isTouching(snowIsland,mammal_sprite)) {
             snowIsland_Flag=true;
        } else if (isTouching(forestIsland,mammal_sprite)) {
             forestIsaland_Flag =true;
        } else if (isTouching(riverIsland,mammal_sprite)) {
             riverIsaland_Flag =true;
        }
        if (fish_Flag === true ){
                    
              if  (animal.food === "fish" ) {
             //   console.log("touched fish correctly");
                //Q3 :ask mam  how to disable other options on correct selection of sprite. 
                  plants.visible=false;
                meat.visible=false;
                food_selection_flag = true;
                fish_Flag=false;
              }else{
              //  console.log("touched other than fish incorrectly");
                infoForm.display();
              }
        } else if ( meat_Flag === true ){

              if  (animal.food === "meat" ) {
               // console.log("touched meat correctly");
                food_selection_flag = true;
                plants.visible=false;
                fish.visible=false;
                meat_Flag=false;
              }else{
             //   console.log("touched other than meat incorrectly");
                infoForm = new  InfoForm();
                infoForm.display();
              }

        }else if ( plant_Flag === true){

              if  (animal.food === "plants" ) {
               // console.log("touched plant correctly");
                food_selection_flag = true;
                meat.visible=false;
                fish.visible=false;
                plant_Flag=false;
              }else{
               // console.log("touched other than plant incorrectly");
                infoForm = new  InfoForm();
                infoForm.display();
              }

        }
        if (snowIsland_Flag === true ){
            
            if  (animal.habitat === "snow" ) {
              //eatFood();
              //console.log("touched snow correctly");
              habitat_selection_flag = true;
              snowIsland_Flag=false;
            }else{
              //console.log("touched other than snow incorrectly");
              infoForm = new  InfoForm();
              infoForm.display();
            }


        } else if ( forestIsaland_Flag === true ){
           
            if  (animal.habitat === "forest" ) {
              //console.log("touched forest correctly");
              //eatFood();
              habitat_selection_flag = true;
              forestIsaland_Flag=false;
            }else{
             // console.log("touched other than forest incorrectly");
              infoForm = new  InfoForm();
              infoForm.display();
            }

        }else if ( riverIsaland_Flag === true){
          
            if  (animal.habitat === "river" ) {
           //   console.log("touched river correctly");
              //eatFood();
              habitat_selection_flag = true;
              riverIsaland_Flag=false;
            }else{
            //  console.log("touched other than river incorrectly");
              infoForm = new  InfoForm();
              infoForm.display();
            }
        }
  }
  
}
  /*  function mouseClicked(){
      //if (showisland === true) {
     
      if(AfterChooseCreatureForm===true){
          var count = Object.keys(creaturelistdb);

          creature_button[0].mousePressed(()=>{
          console.log("buttonname Pressed : from chooseCreatureForm 0 ");
          var k= count[0];
          animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
          creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
          creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
          infoForm = new  InfoForm();
          infoForm.display();
          creature_button[0].remove();
          creature_button[1].remove();
          showisland=true;
        });
     
      }
    }*/

    