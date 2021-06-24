const MenuBtn = document.getElementById('menu_btn');
const DisplayMenu = document.getElementById('display_menu');
const CloseMenuBtn = document.getElementById('close_menu_btn');
const emailInput = document.getElementById('email_input');
const announce = document.createElement('div');
const announceText = document.createElement('p');
const contactForm = document.getElementById('contact_form');
const emailRegExpr = /[A-Z]+/;

function formValidate() {
  const emailValidator = emailRegExpr.test(emailInput.value);
  if (emailValidator) {
    if (announce) {
      announce.remove();
      contactForm.appendChild(announce);
      announce.appendChild(announceText);
      announce.className = 'announce_bad_email';
      announceText.className = 'announce_text';
      announceText.innerHTML = 'Email address should not contain upercase characters!';
      emailInput.style = 'animation: email_input_error 0.3s;';
      setTimeout(() => { emailInput.style = ''; }, 480);
      return false;
    }
    contactForm.appendChild(announce);
    announce.appendChild(announceText);
    announce.className = 'announce_bad_email';
    announceText.className = 'announce_text';
    announceText.innerHTML = 'Email address should not contain upercase characters!';
    emailInput.style = 'animation: email_input_error 0.3s;';
    setTimeout(() => { emailInput.style = ''; }, 480);
    return false;
  }
  return true;
}
if (emailRegExpr < 0) {
  formValidate();
}

emailInput.addEventListener('input', (event) => {
  event.preventDefault();
  announce.remove();
});

const sectionsObj = [];
for (let i = 1; i < 6; i += 1) {
  sectionsObj.push(document.getElementById(`sec_${i}`));
}

const links = [];
for (let i = 1; i < 4; i += 1) {
  links.push(document.getElementById(`menu_link_${i}`));
}

MenuBtn.addEventListener('click', (event) => {
  event.preventDefault();
  DisplayMenu.style = 'display: flex; animation-name: menu_display_anim;';
  for (let i = 0; i < sectionsObj.length; i += 1) {
    sectionsObj[i].style = 'filter: blur(4px); -webkit-filter: blur(4px);';
  }
});

CloseMenuBtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  DisplayMenu.style = 'display: flex; animation-name: menu_close_anim;';
  for (let i = 0; i < sectionsObj.length; i += 1) {
    sectionsObj[i].style = '';
  }
  setTimeout(() => { DisplayMenu.style = 'display: none;'; }, 450);
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', (Event) => {
    Event.preventDefault();
    DisplayMenu.style = 'display: flex; animation-name: menu_close_anim;';
    for (let i = 0; i < sectionsObj.length; i += 1) {
      sectionsObj[i].style = '';
    }
    setTimeout(() => { DisplayMenu.style = 'display: none;'; }, 450);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event2) => {
    event2.preventDefault();
    document.querySelector(event2.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
