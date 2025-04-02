function changeBackground(div){
    div.classList.add("colored");
}

function createDivs(num){

    var gridContainer = document.getElementById("grid-container");
    for(let i = 0; i < num; i++){
        // Create divs for one row of the num x num grid, must have a container to display in a row using flex box.
        var rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        for(let i = 0; i < num; i ++){
            let div = document.createElement("div");
            div.classList.add("square");
            div.addEventListener("mouseover", () => changeBackground(div));
            rowContainer.appendChild(div);
        } // end for
        gridContainer.appendChild(rowContainer);
    } // end for
} // end createDivs

function promptUser(){
    document.getElementById("grid-container").innerHTML = "";
    var gridSize = prompt("What grid size would you like? (Ex. 6 = 6 x 6)");
    if(gridSize > 100){
        alert("Please select a size equal or lower to 100");
        promptUser();
    } // end if
    else{
        createDivs(gridSize);
    } // end else
} // end promptUser

createDivs(10);