
// Heart button functionality
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

// Call functionality with coin deduction
let coins = 100; 

    function makeCall(Name, colon, number) {
      if (coins >= 20) {
        coins -= 20;
        document.getElementById("coinCount").textContent = coins;
        alert("📞Calling"+ Name + colon + number);
      } else {
        alert("Insufficient coins to make the call.");
      }
    }

// Call history functionality







