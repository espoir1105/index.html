let result = document.querySelector("#result"),
  user = document.querySelector("#user"),
  play = document.querySelector("#play");
//let chance = 5;
//let chance = document.querySelector("#chance");
//let gameOver = false;


function randomNum() {
  computerNum = Math.floor(Math.random() * 100);
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game);
function game(event) {
  event.preventDefault(); //새로고침 막음
  // console.log(user.value)//input으로 입력한 값을 가지고 올때는 .value

  let userNum = user.value;
  //console.log(useNum)

  //chance--;
 // chanceArea.textContent = `남은 찬스: ${chance}번`;
 // console.log("찬스?", chance);
//  history.push(userValue);
 // console.log("입력값", history);

  if (computerNum > userNum) {
    //console.log("up");
    result.textContent = "up";
  } else if (computerNum < userNum) {
    // console.log("down");
    result.textContent = "down";
  } else {
    // console.log("bingo");
    result.textContent = "bingo";
    playButton.disabled = true;
  }
}
