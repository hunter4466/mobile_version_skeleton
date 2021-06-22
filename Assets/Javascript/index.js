const MenuBtn = document.getElementById('menu_btn');
const DisplayMenu = document.getElementById('display_menu');
const CloseMenuBtn = document.getElementById('close_menu_btn');

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

document.querySelectorAll('a[href^="#"]').forEach((event) => {
  event.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});