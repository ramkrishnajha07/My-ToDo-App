let input = document.querySelector("input");
let submit = document.querySelector("button");
let ul = document.querySelector("ul");

submit.addEventListener("click", function () {
    if (input.value !== "") { 
        let item = document.createElement("li");
        item.innerText = input.value;

        let delbtn = document.createElement("button");
        delbtn.innerText = "delete";
        delbtn.classList.add("delete");

        // attach delete event for this new button
        delbtn.addEventListener("click", function () {
            item.remove();
        });

        item.appendChild(delbtn);
        ul.appendChild(item);

        input.value = "";
    }
});

// attach delete functionality to all existing delete buttons
let delbtns = document.querySelectorAll(".delete");
for (let delbtn of delbtns) {
    delbtn.addEventListener("click", function () {
        this.parentElement.remove();
    });
}
