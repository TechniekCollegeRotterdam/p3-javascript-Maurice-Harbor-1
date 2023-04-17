let clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerText = clicks;

  if (clicks == 10) {
    clicks -= 10;
};

};