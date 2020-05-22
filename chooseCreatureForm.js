class chooseCreatureForm {
    constructor() {
      this.dinobutton = createButton('Dinosaurs');
      this.iceagebutton = createButton('IceAge');
      //this.button = createButton('button');
      this.title = createElement('h2');
      this.choose = createElement('h3');
     // this.buttonnametext = createButton();
    }
    hide(){
      this.dinobutton.hide();
      this.iceagebutton.hide();
      this.choose.hide();
    }
    display(){
      //Q2: How to add image to buttons ?
      this.title.html("Grow Your Creature");
      this.choose.html("Choose Your Creature");
      this.title.position(windowWidth/2 - 50, 0);
      this.choose.position(windowWidth/2 - 50, 100);
      this.dinobutton.position(windowWidth/2 - 50, 400);
      this.iceagebutton.position(windowWidth/2 + 50, 400);
      this.title.style("background-color","red");
      this.choose.style("background-color","yellow");
      //Q4: How to change  size of button?
      
    this.iceagebutton.mousePressed ( () =>{
     // mammal_sprite.visible = true;
        console.log("iceagebutton pressed");  
        Creatures.readdatalist("iceage");
        console.log("creaturecountdb "+creaturecountdb);
      //  console.log("creaturelistdb "+creaturelistdb);
        //this.hide();
        var count = Object.keys(creaturelistdb);
        for( var i=0;i<count.length;i++){
            var k= count[i];
            var name_1 =   creaturelistdb[k].name;  
              this.dinobutton.hide();
              AfterChooseCreatureForm=true;
              var buttonname = name_1;
               //creature_button[i] = createButton(buttonname); //Button is created 
               creature_button[i] = createImg("images/baby_"+name_1+".jpg");
               creature_button[i].position(windowWidth/2 - 50 , 400 + 30*i+(i*25));//button's position is set
               console.log("buttonname displayed");
              this.choose.hide();
              this.title.hide();
              animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
              creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
              creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
              this.iceagebutton.hide();
              snowIsland.visible=true;
              riverIsland.visible=true; 
              forestIsland.visible=true; 
              meat.visible=true; 
              fish.visible=true; 
              plants.visible=true;
              }
            });
      this.dinobutton.mousePressed(()=>{
        //showisland=true;
        this.iceagebutton.hide();
       // console.log("dinobutton pressed");  
        Creatures.readdatalist("dino"); //to get the list of creatures from database which starts with name 'dino'
        console.log("creaturelistdb "+creaturelistdb);
        //this.hide();
       
        //
        var count = Object.keys(creaturelistdb); //to get total number of cretures in list ( dinolist)
        for( var i=0;i<count.length;i++){ 
            var k= count[i];
            var name_1 =   creaturelistdb[k].name;  
           
           AfterChooseCreatureForm=true;
           var buttonname = name_1;
            //creature_button[i] = createButton(buttonname); //Button is created 
            creature_button[i] = createImg("images/baby_"+name_1+".jpg");
            creature_button[i].position(windowWidth/2 - 50 , 400 + 30*i+(i*25));//button's position is set
            console.log("buttonname displayed");
  
            this.choose.hide(); 
            
              this.title.hide();
                this.dinobutton.hide();
                snowIsland.visible=true;
                riverIsland.visible=true; 
                forestIsland.visible=true; 
                meat.visible=true; 
                fish.visible=true; 
                plants.visible=true;

        }

        
      });
      
    }
   
  }
  