const d = document;

let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(limitBall,limitStage)

  const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if(limitBall.left > limitStage.left)x--;
      break;
    case 38:
        if(limitBall.top > limitStage.top){
          e.preventDefault();
        y--};
      break;
    case 39:
      e.preventDefault();
      if(limitBall.right < limitStage.right)x++;
      break;
    case 40:
        if(limitBall.bottom < limitStage.bottom){
          e.preventDefault();
        y++};

      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.altKey);
  // console.log(e.shiftKey);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("activaste una alerta");
  }
  if (e.key === "c" && e.altKey) {
    confirm("activaste una confirmacion");
  }
  if (e.key === "p" && e.altKey) {
    prompt("activaste un aviso");
  }
}
