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
    display(){
        showisland = false;
        this.dietRadio.position(displayWidth/2 - 50, 80);
        this.eraRadio.position(displayWidth/2 - 50, 100);
        this.mammalRadio.position(displayWidth/2 - 50, 120);
        var mammal =  this.mammalRadio.value();
        var diet =  this.dietRadio.value();
        var era =  this.eraRadio.value();
        this.dietText.position(displayWidth/2 - 200, 63);
        this.eraText.position(displayWidth/2 - 200, 83);
        this.mammalText.position(displayWidth/2 - 200, 103);
        this.sudmitbutton.position(displayWidth/2 - 50, 380);
        this.sudmitbutton.mousePressed(()=>{
        console.log(animal.era === era);    
        console.log(animal.diet === diet); 
        console.log(animal.mammal === mammal); 
        console.log(animal.diet); 
        console.log(diet); 
        animal.era = era;
        animal.diet = diet;
        animal.mammal = mammal
            if ((animal.era === era) && (animal.diet === diet) && (animal.mammal === mammal)) {
                console.log("Quiz Completed Correctly");
                choosecreatureform = new chooseCreatureForm();
                this.hide();
                choosecreatureform.display();
            }else{
                console.log("Incorrect Answer"); 
            }
            
    });


}
}