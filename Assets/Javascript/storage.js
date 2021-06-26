
let valuesArray = []
valuesArray.push([document.getElementById('name_input'),'nameInputValue'])
valuesArray.push([document.getElementById('email_input'),'emailInputValue'])
valuesArray.push([document.getElementById('contact_text_area'),'contactTextValue'])

const valuesObject = {}

for(let i = 0; i < valuesArray.length; i += 1){
  valuesObject[valuesArray[i][1]] = valuesArray[i][0].value
}




function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    console.log('got here')
    return true;
  } catch (e) {
    console.log('got over here')
    return e instanceof DOMException && (
      e.code === 22
            || e.code === 1014
            || e.name === 'QuotaExceededError'
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            && (storage && storage.length !== 0);
  }
}

for (let i = 0; i < valuesArray.length; i += 1) {
  valuesArray[i][0].addEventListener('input', (event) => {
    console.log('eventlistener working')
    event.preventDefault();
    if (storageAvailable('localStorage')) {
      localStorage.setItem('indexValues',JSON.stringify(valuesObject));
    }
  });
}


function loadValues() {
  for (let i = 0; i < valuesArray.length; i += 1) {
    if (localStorage.getItem('indexValues')) {
      var recoveredData = JSON.parse(JSON.stringify(localStorage.getItem('indexValues')))
      var indexValue = valuesArray[i][1]
      console.log(recoveredData[indexValue])
      valuesArray[i][0].value = recoveredData[indexValue]
    }
  }
}
window.onload = loadValues();
