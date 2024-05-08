let result = document.querySelector("#result"),
  user = document.querySelector("#user"),
  play = document.querySelector("#play");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100);
  console.log(computerNum);
}
randomNum();

//play.addEventListener("click", game);
//function game(event) {
//  event.preventDefault(); //새로고침 막음
// console.log(user.value)//input으로 입력한 값을 가지고 올때는 .value

// let userNum = user.value;
//console.log(userNum);

// if (computerNum > userNum) {
//   console.log("up");
// } else if (computerNum < userNum) {
//   console.log("down");
//} else {
//   console.log("bingo");
// }
//}
play.addEventListener("click", (e) => {
  e.preventDefault();

  let userNum = user.value;
  console.log(userNum);
  user.vlue = "";
  let re =
    useNum < computerNum ? "up " : useNum > computerNum ? "down" : "bingo";
  result.innerText = re;
});
