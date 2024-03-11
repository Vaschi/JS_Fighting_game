function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#endGame").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#endGame").innerHTML = "Tie";
  } else if (player.health > enemy.health) {
    document.querySelector("#endGame").innerHTML = "Player 1 WINS!";
  } else if (player.health < enemy.health) {
    document.querySelector("#endGame").innerHTML = "Player 2 WINS!";
  }
}

let timer = 60;
let timerId;
function decreseTimer() {
  if (timer > 0) {
    timer--;
    document.querySelector("#timer").innerHTML = timer;
    timerId = setTimeout(decreseTimer, 1000);
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}

function rectangularCollision({ rect1, rect2 }) {
  return (
    rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
    rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
    rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
    rect1.attackBox.position.y <= rect2.position.y + rect2.height
  );
}
