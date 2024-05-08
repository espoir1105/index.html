let result = document.querySelector("#result"),
  user = document.querySelector("#user"),
  play = document.querySelector("#play");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100);
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game);
function game(event) {
  event.preventDefault(); //새로고침 막음
  // console.log(user.value)//input으로 입력한 값을 가지고 올때는 .value
}
let userNum = user.value;
//console.log(userNum);
// result.textContent = 
//for( int i = 1; i <=5; i++) {
// ("5 - i + "번의 기회가 있습니다.");
if (computerNum > userNum) {
  // console.log("up");
  result.textContent = "up";
} else if (computerNum < userNum) {
  //  console.log("down");
  result.textContent = "down";
} else {
  // console.log("bingo");
  result.textContent = "bingo";
}
//if (i == 5 ) {
//document.write(`남은 찬스는 ${0번}/입니다`)        }
}