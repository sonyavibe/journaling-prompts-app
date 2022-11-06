const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  fetch("https://api.themotivate365.com/stoic-quote")
    .then((response) => response.json())
    .then((data) => 
      console.log(data)
      )})
