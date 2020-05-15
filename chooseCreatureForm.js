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
      this.title.position(displayWidth/2 - 50, 0);
      this.choose.position(displayWidth/2 - 50, 100);
      this.dinobutton.position(displayWidth/2 - 50, 400);
      this.iceagebutton.position(displayWidth/2 + 50, 400);
      
      //Q4: How to change  size of button?
      
      this.iceagebutton.mousePressed(()=>{
        this.dinobutton.hide();
        console.log("iceagebutton pressed");  
        Creatures.readdatalist("iceage");
        console.log("creaturecountdb "+creaturecountdb);
        console.log("creaturelistdb "+creaturelistdb);
        //this.hide();
        var count = Object.keys(creaturelistdb);
        for( var i=0;i<count.length;i++){
            var k= count[i];
            var name_1 =   creaturelistdb[k].name;     
            var buttonname= "iceagebutton"+i;
            //buttonname = createButton(name_1);
           // buttonname.position(displayWidth/2 - 50 , 400 + 30*i);
            console.log("Record:" + name_1);
            console.log(creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
              creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
              creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
              this.dinobutton.hide();
              this.choose.hide();
              this.title.hide();
              animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
              creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
              creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
              infoForm = new  InfoForm();
              infoForm.display();
              this.iceagebutton.hide();
              this.choose.hide();
              this.title.hide();
            console.log("Record:" + name_1);
            showisland = true;

        }
        //this.hide();
      });
     
     //Either dino button or iceage button is pressed from screen : 
     //below code runs when dinobutton is clicked twice
      this.dinobutton.mousePressed(()=>{
        showisland=true;
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
            //var name_1 =   creaturelistdb[k].name;     
            var buttonname = "dinobutton"+i;  //For each dino, button name is created
          //  button.setAttribute("name","dinobutton"+i);
            ////button.setAttribute("value","dinobutton"+i);
           //// button.setAttribute("onclick","dinobutton"+i);
             
            buttonname = createButton(name_1); //Button is created 
            buttonname = createImg("images/baby_"+name_1+".jpg");
            buttonname.position(displayWidth/2 - 50 , 400 + 30*i+(i*25));//button's position is set
            //buttonname.src = "images/iceage_button.jpg";
            console.log("buttonname displayed");
  
            this.choose.hide(); 
            console.log("buttonname "+buttonname);
              this.title.hide();
              console.log("Record:" + name_1);
              console.log(creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
                creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
                creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
                this.dinobutton.hide();
                
                animal = new Creatures( creaturelistdb[k].name,creaturelistdb[k].area,creaturelistdb[k].diet,
                creaturelistdb[k].era,creaturelistdb[k].food,creaturelistdb[k].habitat,creaturelistdb[k].habitat1,
                creaturelistdb[k].height,creaturelistdb[k].weight,creaturelistdb[k].mammal);
                infoForm = new  InfoForm();
                infoForm.display();
                
              /*  buttonname = document.getElementsByClassName("button");

                for (var b = 0; b < buttonname.length; b++) {
                  buttonname[b].src = "images/iceagebutton.jpg";
                  buttonname.display(); 
                  console.log("buttonname displayed");
               }*/
               
                // bu
              /*this.buttonname.mousePressed(()=>{
              //animal = new Creatures("Woolly_Mammoth","creature area","herbivore","iceage","plants","snow","land","creature height","creature weight","yes");
              console.log("Record details" + creaturelistdb[k].area + " "+ creaturelistdb[k].habitat );
                //Add form 
                 showisland = true;
           });*/
           showisland = true;

        }
      });
     /* button.mousePressed(()=>{
              
        console.log("button dinobutton+i.onclick ");
           
      }); */ 
    }
   
    
  }
  