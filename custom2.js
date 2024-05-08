let result = document.querySelector("#result"),
  user = document.querySelector("#user"),
  play = document.querySelector("#play");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100);
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game());

function game() {
  console.log("게임시작");
}
//클릭했을 때 숫자 지우기
user.addEventListener("focus", () => {
  user.value = "";
});
