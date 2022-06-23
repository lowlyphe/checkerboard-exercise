// Your JS goes here

function createBoard(num) {
  for (let i = 0; i < num / 2 - 1; i++) {
    let div = document.createElement("div");
    div.classList = "black";
    div.style.color = "black";
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.backgroundColor = "black";
    div.style.float = "left";
    document.body.append(div);
    div = document.createElement("div");
    div.classList = "red";
    div.style.color = "red";
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.backgroundColor = "red";
    div.style.float = "left";
    document.body.append(div);
  }
  let div = document.createElement("div");
  div.classList = "black";
  div.style.color = "black";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.backgroundColor = "black";
  div.style.float = "left";
  document.body.append(div);
}

createBoard(64);
