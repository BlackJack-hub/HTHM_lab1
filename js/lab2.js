function Check() {
  var check = 0;
  var q1 = document.test.q1.value;
  var q2 = document.test.q2.value;
  var q3 = document.test.q3.value;
  var q4 = document.test.q4.value;
  var q5 = document.test.q5.value;
  var q6 = document.test.q6.value;
  var q7 = document.test.q7.value;
  var q8 = document.getElementById("q81");
  if (q8.checked) {
    check += 0.25;
  }
  q8 = document.getElementById("q82");
  if (q8.checked) {
    check += 0.25;
  }
  q8 = document.getElementById("q85");
  if (q8.checked) {
    check += 0.25;
  }
  q8 = document.getElementById("q86");
  if (q8.checked) {
    check += 0.25;
  }
  if (q1 == "d") check++;
  if (q2 == "a") check++;
  if (q3 == "a") check++;
  if (q4 == "b") check++;
  if (q5 == "a") check++;
  if (q6 == "c") check++;
  if (q7 == "a") check++;
  console.log(check);
  document.getElementById("score").innerHTML =
    "Your result is: " + (check * 100) / 8 + "%";
  document.getElementById("correct1").style.cssText = `
  color: green;
  font-size: 24px;
  text-align: center;
`;
  document.getElementById("correct2").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct3").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct4").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct5").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct6").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct7").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct81").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct82").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct83").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
  document.getElementById("correct84").style.cssText = `
color: green;
font-size: 24px;
text-align: center;
`;
}
window.onload = function repeat() {
  setInterval(function gettime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("time").innerHTML =
      hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").style.cssText = `  font-size: 30px;
    color: green;
    font-family: 'Courier New', Courier, monospace;`;
  }, 1000);
};
