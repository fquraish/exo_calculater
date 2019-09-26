var mainElement = document.createElement("main");
mainElement.id = "main"
document.body.appendChild(mainElement)



var displayZone = document.createElement("div");
displayZone.id = "result"
mainElement.appendChild(displayZone)

var resetBtn = document.createElement("button");
resetBtn.id = "reset"
mainElement.appendChild(resetBtn)
resetBtn.innerHTML = "CE"

var allBtn = document.createElement("div");
allBtn.className = "all"
mainElement.appendChild(allBtn)

var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "="]
for (let i = 0; i < keys.length; i++){
    
    var input = document.createElement("button");
    allBtn.appendChild(input)
    input.innerHTML = keys[i];

    input.addEventListener("click" ,function(){ 

        var pressedKey = this.innerHTML;

        if(pressedKey == "=") {
            displayZone.innerHTML = eval(displayZone.innerHTML)  
        } else {
            if(pressedKey == "+" + displayZone.innerHTML == "+"){
                console.log("prout");
                
            } else {
                displayZone.innerHTML = displayZone.innerHTML + pressedKey;
            }
        } 

        

        
        
        
        
        

    
   
    })
}
 resetBtn.addEventListener("click", function(){
     displayZone.innerHTML = ""
 })



