function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

             
            
var ms = 5000;
var func = function () {
    var randNum = getRandomInt(10000, 99999);    // Gets random number
    document.getElementById("element_id").innerHTML = randNum;
};

    
        
 setInterval(func, ms); 


System.out.println(randNum);
