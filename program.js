function setThing() {

    const input = document.getElementById("input_box").value;
    
    if (input == "") return;

    document.getElementById("input_box").value = "";

    // Lista
    const create = document.createElement("li");
    const text = document.createTextNode(input);
    create.appendChild(text);

    const element = document.getElementById("list");
    element.appendChild(create);

    // Button
    const button = document.createElement("button");
    const buttonText = document.createTextNode("Clear");
    button.appendChild(buttonText);    
    create.appendChild(button);
    
    //Single Remove
    button.addEventListener("click", function(){
        create.remove();
    })
        
}


function removeAll() {
    document.getElementById("list").innerHTML = "";
}

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        setThing();
    }
});






    
