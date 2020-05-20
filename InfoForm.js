class InfoForm{
constructor(){
   // this.animaltype = createP();
  //  this.namebox = createP(animal.name);
   /* this.areabox = createP();
    this.erabox = createP();
    this.dietbox = createP();
    this.foodbox = createP();
    this.weightbox = createP();
    this.habitatbox = createP();
    this.habitat1box = createP();
    this.heightbox = createP();*/
    //this.sudmitbutton = createButton('OK');

}
/*hide(){
    this.namebox.hide();
    this.sudmitbutton.hide();
}*/
display(){
  //  this.animaltype = createP(animal);
    var  namebox = createP(animal.name);
    var areabox = createP(animal.area);
    var erabox = createP(animal.era);
    var dietbox = createP(animal.diet);
    var foodbox = createP(animal.food);
    var weightbox = createP(animal.weight);
    var habitatbox = createP(animal.habitat);
    var mammalbox = createP(animal.habitat);
   // this.habitat1box = createP(anima);
   var heightbox = createP(animal.mammal);
   var sudmitbutton = createButton('OK');
   // this.animaltype.position(displayWidth/2 - 50,50);
     namebox.position(displayWidth/2 - 50, 80);
     areabox.position(displayWidth/2 - 50, 110);
     erabox.position(displayWidth/2 - 50, 140);
     dietbox.position(displayWidth/2 - 50, 170);
     foodbox.position(displayWidth/2 - 50, 200);
     weightbox.position(displayWidth/2 - 50, 230);
     habitatbox.position(displayWidth/2 - 50, 260);
     mammalbox.position(displayWidth/2 - 50, 290);
   // this.habitat1box.position(displayWidth/2 - 50, 290);
    heightbox.position(displayWidth/2 - 50, 320);
    sudmitbutton.position(displayWidth/2 - 50, 370);
    sudmitbutton.mousePressed(()=>{
        //showisland= true;   
        namebox.hide();
        sudmitbutton.hide();
        namebox.hide();
        areabox.hide();
        dietbox.hide();
        erabox.hide();
        foodbox.hide();
        weightbox.hide();
        habitatbox.hide();
        heightbox.hide();
        mammalbox.hide();
      //  console.log("go to island screen");
    });  
}
}