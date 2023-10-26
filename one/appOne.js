
// we add all span tag class name button in a variable return a node list
const buttons = document.querySelectorAll(".button");
// body also store in a variable
const body = document.querySelector("body");

// buttons is a node list thatwhy i use for each
buttons.forEach(function(button){

    // this line for event manaege
    button.addEventListener('click', function(e){
        
       // then now condition
        if(e.target.id == "grey"){
            body.style.backgroundColor = "grey"
        }
        if(e.target.id == "purple"){
            body.style.backgroundColor = e.target.id
        }
        
        if(e.target.id == "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == "yellow"){
            body.style.backgroundColor = e.target.id
        }
    })

});




