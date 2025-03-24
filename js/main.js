window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  var isItEkadashi = false;
  var now=new Date();
  now.setHours(20); // ekadasi to be calculated based on the thithi from sunset
  panchang.calculate(now, function(){
    if(panchang.Tithi.name === "Ekadasi")
    {
      var object = document.getElementById('isItEkadashi');
      object.textContent = 'YES';
      isItEkadhasi = true;
    }
  });
  
  console.log("Is it ekadashi?");
  console.log(isItEkadashi);
}
