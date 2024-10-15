//select dom elements

const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
    window.alert("Hello world");
}

function showConfirm() {
    let text;
    if(window.confirm("press a button")){  //truthy value
    text = "you pressed ok";
    }
    else {
        text = "you pressed cancel";
    }

    confirm.innerHTML = text;

}

function showPrompt() {
    let person = window.prompt("Please enter your name:", "Arpita Roy");
    let text;

    if(person === null || person === "") {
       text = "user cancellewd the prompt";
    }
    else {
        text = "Hello" + " " + person + " " + "!How are you";
    }

    prompt.innerHTML = text;
}
