class Creatures {
//Q9 : should constructor  be null or with parameters? 
  constructor(name,area,diet,era,food,habitat,habitat1,height,weight,mammal){
        this.area = area;
        this.diet = diet;
        this.era = era;
        this.food = food;
        this.habitat = habitat;
        this.habitat1 = habitat1;
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.mammal = mammal;
    }
  
   /* getcreaturecount(name){
        var tempname='Creatures/'+name;
        var playerCountRef = database.ref(tempname);
        playerCountRef.on("value",(data)=>{
          creaturecountdb = data.val();
        })

    }*/
    updatecreature(count,animaltype,area1,diet1,era1,food1,habitat1,habitat11,height1,weight1,name1,mammal){
      var creatureIndex = "Creatures/"+animaltype+"List/"+animaltype+count;
      console.log("creatureIndex"+creatureIndex);
      
      database.ref(creatureIndex).set({
        area:area1,
        diet:diet1,
        era:era1,
        food:food1,
        habitat:habitat1,
        habitat1:habitat11,
        height:height1,
        weight:weight1,
        name:name1,
        mammals:mammal
      });
    }

    static getcreaturelist(name){
      var templist='Creatures/'+name;
      console.log("templist "+templist);
      var playerCountRef = database.ref(templist);
      playerCountRef.on("value",(data)=>{
        creaturelistdb = data.val();
      });
      console.log("getcreaturelist:creaturelistdb"+creaturelistdb);
      
  }
  
    
    update(){
     /* var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
      database.ref()*/
    }
    
    updateUser(index,user,pwd){
      var userIndex = "userList/user" + index;
      console.log("userIndex");
      
      database.ref(userIndex).set({
        name:user,
        password:pwd
      });
    }

    static getUserInfo(){
     var x =database.ref('userList/');
     console.log(x);
     x.on("value",(data)=>{
        alluserinfo = data.val();
      })
    //console.log (alluserinfo);
    }

    static readdatalist(creaturename){
      var creaturecount = creaturename+"Count";
      var creaturelist = creaturename+"List";
     // console.log("in  readdatalist"+creaturecount);
     // creatures.getcreaturecount(creaturecount);
     // console.log("out  readdatalist"+ creaturelist);
      this.getcreaturelist(creaturelist);
      /*for (var i = 1; i <= creaturecount; i++) {
      
       
      }*/
    }
  }
