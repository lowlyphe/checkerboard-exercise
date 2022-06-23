// Your JS goes here
var row = 1;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (row % 2 === 0) {
      if (j % 2 === 0) {
        styleBLack();
      } else {
        styleRed();
      }
    } else {
      if (j % 2 === 0) {
        styleRed();
      } else {
        styleBLack();
      }
    }
  }
  row++;
}

function styleBLack() {
  let div = document.createElement("div");
  div.style.width = "12%";
  div.style.paddingBottom = "12%";
  div.style.backgroundColor = "black";
  div.style.float = "left";
  document.body.append(div);
}
function styleRed() {
  let div = document.createElement("div");
  div.style.width = "12%";
  div.style.paddingBottom = "12%";
  div.style.backgroundColor = "red";
  div.style.float = "left";
  document.body.append(div);
}
