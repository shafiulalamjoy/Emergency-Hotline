
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
let callHistory = [];

function makeCall(Name, colon, number) {
  if (coins >= 20) {
        coins -= 20;
        document.getElementById("coinCount").textContent = coins;
  const call ={ 
    name: Name,
    number: number,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:`2-digit`, hour12: true }).toLocaleUpperCase(),
  };
  callHistory.push(call);
  updateCallHistory();
  
        alert("📞Calling"+ Name + colon + number);
      } else {
        alert("Insufficient coins to make the call.");
      }
    }

// Call history functionality

function updateCallHistory() {
  const historyList = document.getElementById("callHistory");
  historyList.innerHTML = "";

  callHistory.slice().reverse().forEach((call) => {
    let div = document.createElement("div");
    div.className =
      "flex justify-between items-center bg-white shadow rounded p-2 mb-2 text-sm";

    div.innerHTML = `
      <div>
        <p class="font-semibold">${call.name}</p>
        <p class="text-gray-500">${call.number}</p>
      </div>
      <span class="text-sm">${call.time}</span>
    `;

    historyList.appendChild(div);
  });
}

// Clear Call History
function clearHistory() {
  callHistory = [];
  updateCallHistory();
}

// copy button functionality

let copyCounter = 0;

function copyBtn(number) {
  navigator.clipboard.writeText(number).then(() => {
    copyCounter++;
    document.getElementById("copyCount").textContent = copyCounter;
    alert("Copied: " + number);
  });
}





