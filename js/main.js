window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  // Ekadashi Dates -- TODO: Update yearly
  const ekadashiDates = ['2020-10-13', '2020-10-27', '2020-11-11', '2020-11-26', '2020-12-11', '2020-12-25'];

  var now=new Date();
  var currentDateStr = now.getFullYear().toString() + '-' + (now.getMonth()+1).toString() + '-' + now.getDate().toString()
  console.log("This is today's date");
  console.log(currentDateStr);

  for(var i = 0; i < ekadashiDates.length; i++) {
    if (currentDateStr === ekadashiDates[i]) {
      var object = document.getElementById('isItEkadashi');
      object.textContent = 'YES';
      break;
    }
  }

  console.log("Is it ekadashi?");
  console.log(isItEkadashi);
}
