class AdminForm extends Creatures{
    constructor(){
        super();
        this.animaltype = createInput('dino/iceage');
        this.namebox = createInput('creature name');
        this.areabox = createInput('creature area');
        this.erabox = createInput('triassic/jurassic/cretacious/iceage');
        this.dietbox = createInput('herbivore/carnivore/omnivore');
        this.foodbox = createInput('meat/fish/plants');
        this.weightbox = createInput('creature weight');
        this.habitatbox = createInput('forest/snow/river');
        this.habitat1box = createInput('water/land/air');
        this.heightbox = createInput('creature height');
        this.mammalbox = createInput('mammal yes/no');
        this.sudmitbutton = createButton('add');
    }
    hide(){
        this.animaltype.visible=false;
        this.namebox.visible=false;
        this.areabox.visible=false;
        this.erabox.visible=false;
        this.dietbox.visible=false;
        this.foodbox.visible=false;
        this.weightbox.visible=false;
        this.habitatbox.visible=false;
        this.habitat1box.visible=false;
        this.heightbox.visible=false;
        this.mammalbox.visible=false;
        this.sudmitbutton.visible=false;

    }
    show(){
     
            this.animaltype.visible=true;
            this.namebox.visible=true;
            this.areabox.visible=true;
            this.erabox.visible=true;
            this.dietbox.visible=true;
            this.foodbox.visible=true;
            this.weightbox.visible=true;
            this.habitatbox.visible=true;
            this.habitat1box.visible=true;
            this.heightbox.visible=true;
            this.mammalbox.visible=true;
            this.sudmitbutton.visible=true;
    
     
    }
    display(){
        this.show();
        this.animaltype.position(windowWidth/2 - 50,50);
        this.namebox.position(windowWidth/2 - 50, 80);
        this.areabox.position(windowWidth/2 - 50, 110);
        this.erabox.position(windowWidth/2 - 50, 140);
        this.dietbox.position(windowWidth/2 - 50, 170);
        this.foodbox.position(windowWidth/2 - 50, 200);
        this.weightbox.position(windowWidth/2 - 50, 230);
        this.habitatbox.position(windowWidth/2 - 50, 260);
        this.habitat1box.position(windowWidth/2 - 50, 290);
        this.heightbox.position(windowWidth/2 - 50, 320);
        this.mammalbox.position(windowWidth/2 - 50, 350);
        this.sudmitbutton.position(windowWidth/2 - 50, 380);
        this.sudmitbutton.mousePressed(()=>{
           
            var animaltype=this.animaltype.value();
            var area = this.areabox.value();
            var diet = this.dietbox.value();
            var era = this.erabox.value();
            var food = this.foodbox.value();
            var habitat = this.habitatbox.value();
            var habitat1 = this.habitat1box.value();
            var height = this.heightbox.value();
            var weight = this.weightbox.value();
            var name = this.namebox.value();
            var mammals = this.mammalbox.value();
            Creatures.getcreaturelist(animaltype+"List");
            var count = Object.keys(creaturelistdb);   

            console.log(" mocount "+count.length+"  "+ count);
                     
            creatures.updatecreature(count.length+1,animaltype,area,diet,era,food,habitat,habitat1,height,weight,name,mammals);      
            console.log("Database Entry Completed");
        });
    }

}