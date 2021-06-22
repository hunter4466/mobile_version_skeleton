const menu_btn = document.getElementById('menu_btn');
const display_menu = document.getElementById('display_menu');
const close_menu_btn = document.getElementById('close_menu_btn');

let sec = []
for (let i = 1;i < 6;i += 1) {
    sec.push(document.getElementById(`sec_${i}`));
}

let links = []
for (let i = 1; i < 4; i += 1) {
  links.push(document.getElementById(`menu_link_${i}`))
}

menu_btn.addEventListener('click',(event)=>{
  console.log('button works')
  event.preventDefault();
  display_menu.style = "display: flex; animation-name: menu_display_anim;"
  for (let i = 0; i<sec.length; i += 1) {
    sec[i].style = 'filter: blur(4px); -webkit-filter: blur(4px);'
  }
})

close_menu_btn.addEventListener('click',(Event)=>{
  Event.preventDefault();
  display_menu.style = "display: flex; animation-name: menu_close_anim;"
  for (let i = 0; i<sec.length; i += 1){
    sec[i].style = ''
  }
  setTimeout(()=>{display_menu.style = "display: none;"},450)
})

for(let i = 0;i<links.length;i+=1){
    links[i].addEventListener('click',(Event)=>{
        Event.preventDefault();
        display_menu.style = "display: flex; animation-name: menu_close_anim;"
        for (let i = 0; i < sec.length; i += 1) {
      sec[i].style = '';
    }
    setTimeout(() => { display_menu.style = 'display: none;'; }, 450);
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