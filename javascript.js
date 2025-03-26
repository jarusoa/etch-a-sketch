

function createDivs(num){

    var gridContainer = document.getElementById("grid-container");
    for(let i = 0; i < num; i++){
        // Create divs for one row of the num x num grid, must have a container to display in a row using flex box.
        var rowContainer = document.createElement("div");
        for(let i = 0; i < num; i ++){
            var div = document.createElement("div");
            div.classList.add("square");
            div.textContent = i + 1;
        
            rowContainer.appendChild(div);
        } // end for
        gridContainer.appendChild(rowContainer);
    } // end for
} // end createDivs

createDivs(3);