const valuesArray = [];
valuesArray.push([document.getElementById('name_input'), 'nameInputValue']);
valuesArray.push([document.getElementById('email_input'), 'emailInputValue']);
valuesArray.push([document.getElementById('contact_text_area'), 'contactTextValue']);

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
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
    event.preventDefault();

    const valuesObject = {};
    for (let i = 0; i < valuesArray.length; i += 1) {
      valuesObject[valuesArray[i][1]] = valuesArray[i][0].value;
    }
    if (storageAvailable('localStorage')) {
      localStorage.setItem('indexValues', JSON.stringify(valuesObject));
    }
  });
}

function loadValues() {
  for (let i = 0; i < valuesArray.length; i += 1) {
    if (localStorage.getItem('indexValues')) {
      const recoveredData = JSON.parse(localStorage.getItem('indexValues'));
      const indexValue = valuesArray[i][1];
      valuesArray[i][0].value = recoveredData[indexValue];
    }
  }
}
window.onload = loadValues();
