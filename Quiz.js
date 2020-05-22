class Quiz {
    constructor(){
        this.dietRadio = createRadio();
        this.dietText = createP("Diet");
        this.dietRadio.option('herbivore', 'herbivore');
        this.dietRadio.option('carnivore', 'carnivore');
        this.dietRadio.option('omnivore', 'omnivore');

        
        this.eraRadio = createRadio();
        this.eraText = createP("Era");
        this.eraRadio.option('triassic', 'triassic');
        this.eraRadio.option('jurassic', 'jurassic');
        this.eraRadio.option('cretacious', 'cretacious');
        this.eraRadio.option('iceage', 'iceage');
        this.mammalRadio = createRadio();
        this.mammalText = createP("Is it Mammal ?");
        this.mammalRadio.option('yes', 'yes');
        this.mammalRadio.option('no', 'no');
        this.sudmitbutton = createButton('Submit Quiz');
    }
    hide(){
        this.dietText.hide();
        this.dietRadio.hide();
        this.eraRadio.hide();
        this.eraText.hide();
        this.mammalRadio.hide();
        this.mammalText.hide();
        this.sudmitbutton.hide();
    }
   show(){
    this.dietText.hide();
    this.dietRadio.hide();
    this.eraRadio.hide();
    this.eraText.hide();
    this.mammalRadio.hide();
    this.mammalText.hide();
    this.sudmitbutton.hide();

   }
    display(){
        console.log("line display : Quiz ");
       

        showisland = false;
        this.dietRadio.visible = true;
        this.dietText.visible = true;
        this.eraRadio.visible = true;
        this.dietRadio.position(displayWidth/2 - 50, 80);
        this.eraRadio.position(displayWidth/2 - 50, 100);
        this.mammalRadio.position(displayWidth/2 - 50, 120);
        this.dietRadio.checked=false;
        this.mammalRadio.checked=false;
        this.eraRadio.checked=false;
        console.log("mammal Val:"+ this.mammalRadio.value());
        console.log("Era Val:"+ this.eraRadio.value());
        console.log("diet Val:"+ this.dietRadio.value());
        this.dietText.position(displayWidth/2 - 200, 63);
        this.eraText.position(displayWidth/2 - 200, 83);
        this.mammalText.position(displayWidth/2 - 200, 103);
        this.sudmitbutton.position(displayWidth/2 - 50, 380);



        this.sudmitbutton.mousePressed(()=>{
            var P1;
            var P2;
        var mammal =  this.mammalRadio.value();
        var diet =  this.dietRadio.value();
        var era =  this.eraRadio.value();
     
        if ((animal.era === era) && (animal.diet === diet) && (animal.mammal === mammal)) {
            this.hide();
            choosecreatureform = new chooseCreatureForm();
            P1 = createP("Correct !!!!!!!!");
            P1.position((displayWidth-50)/2,(displayHeight-150)/2);
           console.log("Correct !!!!!!!!");
            choosecreatureform.display();
          
        }else{
            infoForm.display();
          P2 = createP("Try Again !!!!!!!!");
          P2.position((displayWidth-50)/2,(displayHeight-150)/2);
            console.log("Try Again !!!!!!!!");
            quiz.display();
        }
            
    });


}
}