//global contex does collect the information for evrythinng and its an window object with is aviable.
//window object is tied to the browser.
//exection contex:1.variable object:
                //2.scope chain.
                //3.this.
//tipper("10") call of the function in top if we place this too also works because gobal execution context scans enter codde and make functions avaliable to user if they are declared.
    function tipper(a){
        var bill=parseInt(a);
        console.log(bill + 5);

    }
    //bigTipper("200");//doesnt executes because of hear we use var
    
    var bigTipper = function (a){ //delclaring function
        var bill = parseInt(a);
        console.log(bill + 15);
    }
   bigtipper("200");//executes because hear after declaring variable only we have to call finction,it scans variable then made avaiable.
   
    //secound point of rule we check hear.
     
     var name = "babe";
     console.log(name);

    function sayName(){
        var name = "mrs k";
        console.log(name);
    }
    sayName();

    console.log(name);