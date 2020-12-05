function getReceipt()   {       //defining the getreceipt function
    //This initializes our string so it can get passed from function to function, growling line by line into full receipt
    var text1 = "<h3>You Ordered:</h3>";    //setting the variable with heading tag
    var runningTotal = 0;   //setting up running total
    var sizeTotal = 0;      //setting up total size chosen
    var sizeArray = document.getElementsByClassName("size");        //get the size chosen from class name
    for (var i = 0; i < sizeArray.length; i++)  {   //for statement
        if (sizeArray[i].checked)   {       //if checked on one of arrays 
            var selectedSize = sizeArray[i].value;      //setting up the block variable
            text1 = text1+selectedSize+"<br>";      //the real value of text1
        }
    }
    if (selectedSize === "Personal Pizza")  {       //condition statement 1
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza")  {   //other conditon
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;     
    } else if (selectedSize === "Large Pizza")  {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza")    {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;       //value of runningtotal is equivalent to sizetotal
    console.log(selectedSize+" = $"+sizeTotal+".00");       //log in console about size
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");      //log the subtotal
    //these variables wil get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1)    {       //setting up the function gettopping
    var toppingTotal = 0;       //setting up variable toppingtotal
    var selectedTopping = [];       //variable total for topping
    var toppingArray = document.getElementsByClassName("toppings");     //setting up the variable base on array
    for (var j = 0; j < toppingArray.length; j++)   {       //argument for toppingarray
        if (toppingArray[j].checked)    {       //condition for toppingarray
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+ "<br>";
        }
    }
    var toppingCount = selectedTopping.length;      //variable topping count
    if(toppingCount >1)     {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);       //the real total
    console.log("total selected topping items: "+toppingCount);     //just log in console
    console.log(toppingCount+ " topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+ runningTotal + ".00" + "</strong></h3>";
};