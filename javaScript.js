// --------------------TASK 1-----------------------//

Array.prototype.map2=function(ArrayOfUser){
    var arrFixed = [];
    for (i=0; i<this.length; i++) {
      arrFixed[i] = ArrayOfUser(this[i]);
    }
    return arrFixed;
}
//test
var arr = [22,44,55,66]
var arrNew = arr.map2(function(element) {
return element * 2;
});
console.log(arrNew)

// --------------------TASK 2-----------------------//

// setTimeout дозволяє скрипту працювати в "асинхронному режимі", не блокуючи інших операцій.
// setTimeout переносить виконання фрагменту коду в кінець, і виконує його після заданого інтревалу часу.

// --------------------TASK 3-----------------------//

function recurs(n){
    setTimeout(function() {
     if(n>0){
       console.log(n);
       recurs(n-1);
     } 
    },1000);
   }
  recurs(10)

// --------------------TASK 4-----------------------//


const dinner = {

    eatSoup(count){
      const promise = new Promise((resolve,reject)=>{
        if(!count || count > 15){
          reject();
          return;
        }
        const EAT_ONE_SPOON = 150;
        setTimeout(()=>{
          console.log("З'їв "+count+" ложок зупи, було дуже смачно)")
          resolve();
        }, EAT_ONE_SPOON * count);
        console.log("Приступаю до зупи.");
      });
      return promise;
    }, 
    
    eatDumplings(count){
     const promise = new Promise((resolve,reject)=>{
      if(!count || count > 20){
        reject();
        return;
      }
      const EAT_ONE_DUMPLING = 200;
      setTimeout(()=>{
        console.log("З'їв "+count+" пельменів, можна добавки?")
        resolve();
      }, EAT_ONE_DUMPLING * count);
      console.log("Приступаю до пельменів.");
    });
    return promise;
    }, 
    
    eatDessert(count){
     const promise = new Promise((resolve,reject)=>{
      if(!count || count > 2){
        reject();
        return;
      }
      const EAT_DESSERT = 400;
      setTimeout(()=>{
        console.log("З'їв "+count+" десерт.");
        resolve();
      }, EAT_DESSERT * count);
      console.log("Приступаю до десерту.");
    });
    return promise;
    }, 
    
    drinkCoffee(count){
     const promise = new Promise((resolve,reject)=>{
      if(!count || count > 2){
        reject();
        return;
      }
      const DRINK_ONE_CUP = 400;
      setTimeout(()=>{
        console.log("Випив "+count);
        resolve();
      }, DRINK_ONE_CUP * count);
      console.log("Приступаю до кави.");
    });
    return promise;
    }
  };
  
  
  dinner.eatSoup(13)
  .then(()=>{
    return dinner.eatDumplings(15)
  })
  .then(()=>{
    return dinner.eatDessert(1)
  })
  .then(()=>{
    return dinner.drinkCoffee(1)
  })
  .catch((err)=>{                            
    console.log('Дякую, але це забагато.')
  });

// --------------------TASK 5-----------------------//

function isPrime(num) {
    if(num > 2) {
      for(var i = 2; i < num; i++){
     if(num % i === 0) {
       break;
     }
     else if(num - i == 1){
       console.log(num);
     }
    }
  isPrime(num-1);
            
    }else{
    console.log(num,1);
  }
     
}
isPrime(10)

// ------------------ADVANCED---------------------//

function AutoShow(Volume,Year,Price=30000,Brand='Toyota'){
    this.Brand = Brand;
    this.Price = Price;
    this.Year = Year;
    this.Volume = Volume;
    
    this.getTax = function(Volume,Year,Price){
        return (this.Price*0.2)+(0.01*this.Volume*this.Price);
       }
    this.getDiscount = function(Year){
      return (currentYear - this.Year) * 0.1 * this.Price;
    }

  }
  const currentYear = 2018;
  const Avensis = new AutoShow(2.5,2015);
  const Corolla = new AutoShow(2.0,2016);
  const Yaris = new AutoShow(1.5,2015);
  
