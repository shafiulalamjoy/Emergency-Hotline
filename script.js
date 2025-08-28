
const buttons = document.querySelectorAll(".heart-btn");
const heartCount = document.getElementById("heartCount");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
      let count = parseInt(heartCount.innerText, 10);
      count++;
      heartCount.innerText = count;
    })
});


//const coinCount = parseInt(document.getElementById("coinCount").innerText, 10);
//const calls = document.querySelectorAll(".call-btn");
//let coins = 100;

//calls.forEach(function(call) {
    //call.addEventListener("click", function() {
    //if (coins >= 20) {
      //  coins -= 20;
        //document.getElementById("coinCount").innerText = coins;
       // alert("Calling" +  + "");
    //}
  //  else {
      //  alert("Insufficient coins to make the call.");
    //}
    //});
//});


let coins = 100; 

    function makeCall(Name, colon, number) {
      if (coins >= 20) {
        coins -= 20;
        document.getElementById("coinCount").textContent = coins;
        alert("Calling"+ Name + colon + number);
      } else {
        alert("Insufficient coins to make the call.");
      }
    }