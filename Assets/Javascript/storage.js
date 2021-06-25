const valuesArray = [];
valuesArray.push([document.getElementById('name_input'), 'nameInputValue']);
valuesArray.push([document.getElementById('email_input'), 'emailInputValue']);
valuesArray.push([document.getElementById('contact_text_area'), 'contactTextAreaValue']);

function loadValues() {
  for (let i = 0; i < valuesArray.length; i += 1) {
    if (localStorage.getItem(valuesArray[i][1])) {
      valuesArray[i][0].value = localStorage.getItem(valuesArray[i][1]);
    }
  }
}
window.onload = loadValues();

function populateStorage(a, b) {
  localStorage.setItem(b, a.value);
}

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
    if (storageAvailable('localStorage')) {
      populateStorage(valuesArray[i][0], valuesArray[i][1]);
    }
  });
}
