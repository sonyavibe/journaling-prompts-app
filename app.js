const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  fetch("https://api.themotivate365.com/stoic-quote")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.quote.length > 230) {
        document.querySelector('.quote').innerHTML = `this quote by ${data.author} is too long, refresh to get a more exciting one :)`;
      } else {document.querySelector('.quote').innerHTML = `"${data.quote}"`};
      if (data.author.length == 0) {
        document.querySelector('.author').innerHTML = '-- author unknown';
      } else {document.querySelector('.author').innerHTML = `-- ${data.author}`};
    })
    .catch(error => console.log(error));
    })
