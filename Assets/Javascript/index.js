const Menu_Btn = document.getElementById('Menu_Btn');
const Display_Menu = document.getElementById('Display_Menu');
const Close_Menu_Btn = document.getElementById('Close_Menu_Btn');

const sec = [];
for (let i = 1; i < 6; i += 1) {
  sec.push(document.getElementById(`sec_${i}`));
}

const links = [];
for (let i = 1; i < 4; i += 1) {
  links.push(document.getElementById(`menu_link_${i}`));
}

Menu_Btn.addEventListener('click', (event) => {
  event.preventDefault();
  Display_Menu.style = 'display: flex; animation-name: menu_display_anim;';
  for (let i = 0; i < sec.length; i += 1) {
    sec[i].style = 'filter: blur(4px); -webkit-filter: blur(4px);';
  }
});

Close_Menu_Btn.addEventListener('click', (Event) => {
  Event.preventDefault();
  Display_Menu.style = 'display: flex; animation-name: menu_close_anim;';
  for (let i = 0; i < sec.length; i += 1) {
    sec[i].style = '';
  }
  setTimeout(() => { Display_Menu.style = 'display: none;' }, 450);
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', (Event) => {
    Event.preventDefault();
    Display_Menu.style = 'display: flex; animation-name: menu_close_anim;';
    for (let i = 0; i < sec.length; i += 1) {
      sec[i].style = '';
    }
    setTimeout(() => { Display_Menu.style = 'display: none;'; }, 450);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});