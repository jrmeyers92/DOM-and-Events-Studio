// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', () => {

  const takeOffButton = document.getElementById('takeoff');
  const landingButton = document.getElementById('landing');
  const abortMissionButton = document.getElementById('missionAbort');

  const flightStatus = document.getElementById('flightStatus');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const shuttleBackground = document.getElementById('shuttleBackground');

  const up = document.getElementById('up');
  const down = document.getElementById('down');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const rocket = document.getElementById('rocket');
  let currentHeight = 0;
  let currentY = 0;
  let currentX = 0;

  takeOffButton.addEventListener('click', () => {
    if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      currentHeight = 10000;
      shuttleHeight.innerHTML = currentHeight;
    }
  })

  
  landingButton.addEventListener('click', () => {
    alert('The shuttle is landing. Landing gear engaged');
    flightStatus.innerHTML = "The shuttle has landed";
    shuttleBackground.style.backgroundColor = "green"
    currentHeight = 0;
    shuttleHeight.innerHTML = currentHeight;
    currentY = 0;
    currentX = 0;
    rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;

  })

  abortMissionButton.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to abort?')) {
      flightStatus.innerHTML = "mission aborted";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0"
      currentX = 0;
      currentY = 0;
      rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;

    }
  })


  up.addEventListener('click', () => {
    currentHeight+= 10000;
    shuttleHeight.innerHTML = currentHeight;
    currentY = currentY - 10;
    rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;
  })

  down.addEventListener('click', () => {
    currentHeight-= 10000;
    shuttleHeight.innerHTML = currentHeight;
    currentY = currentY + 10;
    rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;
  })

  left.addEventListener('click', () => {
    currentX = currentX - 10;
    rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;
  })

  right.addEventListener('click', () => {
    currentX = currentX + 10;
    rocket.style.transform = `translate(${currentX}px, ${currentY}px)`;
  })

});