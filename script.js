// Your JS goes here

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16); //converts number to 16bit value
    console.log(randomColor);
    let div = document.createElement("div");
    div.style.width = "12%";
    div.style.paddingBottom = "12%";
    div.style.backgroundColor = "#" + randomColor; //adds a # to make it a color value
    div.style.float = "left";
    document.body.append(div);
  }
}
