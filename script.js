// Your JS goes here
function createCheckerboard(num) {
  var row = 1;
  let dimensions = 95 / num + "%";
  console.log(dimensions);
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (row % 2 === 0) {
        if (j % 2 === 0) {
          styleBLack(dimensions);
        } else {
          styleRed(dimensions);
        }
      } else {
        if (j % 2 === 0) {
          styleRed(dimensions);
        } else {
          styleBLack(dimensions);
        }
      }
    }
    row++;
  }
}

function styleBLack(dimensions) {
  let div = document.createElement("div");
  div.style.width = dimensions;
  div.style.paddingBottom = dimensions;
  div.style.backgroundColor = "black";
  div.style.float = "left";
  document.body.append(div);
}
function styleRed(dimensions) {
  let div = document.createElement("div");
  div.style.width = dimensions;
  div.style.paddingBottom = dimensions;
  div.style.backgroundColor = "red";
  div.style.float = "left";
  document.body.append(div);
}

createCheckerboard(5);
