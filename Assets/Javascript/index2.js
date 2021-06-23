const workSection = document.getElementById('sec_3');
const mainUl = document.createElement('ul');
const workDetail = document.getElementById('detail_sec');
const sectObj = [];

for (let i = 1; i < 6; i += 1) {
  sectObj.push(document.getElementById(`sec_${i}`));
}

const workInformation = [{
  imagePath: './Assets/Images/portfolio_pictures/sn1.png',
  title: 'Tonic',
  features: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately perzonalized reads; no account or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
  detailText: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
},
{
  imagePath: './Assets/Images/portfolio_pictures/sn2.png',
  title: 'Multi-Post Stories',
  features: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately perzonalized reads; no account or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
  detailText: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
},
{
  imagePath: './Assets/Images/portfolio_pictures/sn3.png',
  title: 'Tonic',
  features: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately perzonalized reads; no account or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
  detailText: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
},
{
  imagePath: './Assets/Images/portfolio_pictures/sn4.png',
  title: 'Multi-Post Stories',
  features: ['CANOPY', 'Back End Dev', '2015'],
  description: 'A daily selection of privately perzonalized reads; no account or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
  detailText: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
},
];

workSection.appendChild(mainUl);

function create(obj) { return document.createElement(obj); }
function constructor(obj) {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].length === 2) {
      obj[i][0].appendChild(obj[i][1]);
    } else if (obj[i].length === 3) {
      const [a, b, c] = obj[i];
      a.appendChild(b);
      b.className = c;
    } else if (obj[i].length === 4) {
      const [a, b, c, d] = obj[i];
      if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
      } else {
        a.appendChild(b);
        b.className = c;
        b.innerHTML = d;
      }
    } else if (obj[i].length === 5) {
      const [a, b, c, d, e] = obj[i];
      if (c == null && d == null) {
        a.appendChild(b);
        b.id = e;
      } else if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
        b.id = e;
      } else if (d == null) {
        obj[i][0].appendChild(b);
        b.className = c;
        b.id = e;
      } else {
        obj[i][0].appendChild(b);
        b.innerHTML = d;
        b.className = c;
        b.id = e;
      }
    }
  }
}
const ElementsArray = [];

for (let i = 0; i < workInformation.length; i += 1) {
  const workBox = create('li');
  const imageBox = create('img');
  const contentBox = create('div');
  const titleBox = create('div');
  const titleH1 = create('h1');
  const featuresBox = create('ul');
  const feature1Li = create('li');
  const feature1LiH4 = create('h4');
  const featureDot1 = create('li');
  const featureDot1Div = create('div');
  const feature2Li = create('li');
  const featue2LiH4 = create('h4');
  const featureDot2 = create('li');
  const featureDot2Div = create('div');
  const feature3Li = create('li');
  const featue3LiH4 = create('h4');
  const descriptionDiv = create('div');
  const descriptionDivP = create('p');
  const languagesUl = create('ul');
  const languagesUlLi1 = create('li');
  const languagesUlLi2 = create('li');
  const languagesUlLi3 = create('li');
  const languagesUlLi1H5 = create('h5');
  const languagesUlLi2H5 = create('h5');
  const languagesUlLi3H5 = create('h5');
  const buttonDiv = create('div');
  const buttonDivH3 = create('h3');
  const buttonDivH3a = create('a');

  ElementsArray.push([mainUl, workBox]);
  ElementsArray.push([workBox, imageBox, 'preview sub_box']);
  ElementsArray.push([workBox, contentBox, 'sub_box_2']);
  ElementsArray.push([contentBox, titleBox, 'title item']);
  ElementsArray.push([titleBox, titleH1, null, workInformation[i].title]);
  ElementsArray.push([contentBox, featuresBox, 'features item']);
  ElementsArray.push([featuresBox, feature1Li]);
  ElementsArray.push([featuresBox, featureDot1]);
  ElementsArray.push([featuresBox, feature2Li]);
  ElementsArray.push([featuresBox, featureDot2]);
  ElementsArray.push([featuresBox, feature3Li]);
  ElementsArray.push([feature1Li, feature1LiH4, 'feature_1', workInformation[i].features[0]]);
  ElementsArray.push([featureDot1, featureDot1Div, 'dot']);
  ElementsArray.push([feature2Li, featue2LiH4, 'feature_2', workInformation[i].features[1]]);
  ElementsArray.push([featureDot2, featureDot2Div, 'dot']);
  ElementsArray.push([feature3Li, featue3LiH4, 'feature_2', workInformation[i].features[2]]);
  ElementsArray.push([contentBox, descriptionDiv, 'description item']);
  ElementsArray.push([descriptionDiv, descriptionDivP, null, workInformation[i].description]);
  ElementsArray.push([contentBox, languagesUl, 'languages item']);
  ElementsArray.push([languagesUl, languagesUlLi1]);
  ElementsArray.push([languagesUl, languagesUlLi2]);
  ElementsArray.push([languagesUl, languagesUlLi3]);
  ElementsArray.push([languagesUlLi1, languagesUlLi1H5, null, workInformation[i].languages[0]]);
  ElementsArray.push([languagesUlLi2, languagesUlLi2H5, null, workInformation[i].languages[1]]);
  ElementsArray.push([languagesUlLi3, languagesUlLi3H5, null, workInformation[i].languages[2]]);
  ElementsArray.push([contentBox, buttonDiv, 'button item']);
  ElementsArray.push([buttonDiv, buttonDivH3]);
  ElementsArray.push([buttonDivH3, buttonDivH3a, null, 'See Project']);

  if (i % 2 === 0) {
    workBox.className = 'box';
  } else {
    workBox.className = 'box_rev';
  }
  imageBox.src = workInformation[i].imagePath;
  imageBox.alt = 'preview';

  buttonDiv.addEventListener('click', (event) => {
    event.preventDefault();
    const detailPreBackground = create('div');
    const detailBackground = create('div');
    const detCloseBtn = create('img');
    const detTitle = create('h1');
    const detFeatures = create('div');
    const detFeat1 = create('h1');
    const detdot1 = create('img');
    const detFeat2 = create('h1');
    const detdot2 = create('img');
    const detFeat3 = create('h1');
    const detImage = create('img');
    const detDescription = create('p');
    const languagesDiv = create('div');
    const languagesDivLang1 = create('h6');
    const languagesDivLang2 = create('h6');
    const languagesDivLang3 = create('h6');
    const buttonsDiv = create('div');
    const buttonsDivBtn1 = create('div');
    const button1Content1 = create('h3');
    const button1Content2 = create('img');
    const buttonsDivBtn2 = create('div');
    const button2Content1 = create('h3');
    const button2Content2 = create('img');
    const mainBox = create('div');
    const leftBox = create('div');
    const rightBox = create('div');

    detImage.src = workInformation[i].imagePath;
    detImage.alt = 'preview';
    let elmArray = [];
    elmArray.push([workDetail, detailPreBackground, 'detail_pre_background']);
    elmArray.push([workDetail, detailBackground, 'detail_background']);
    elmArray.push([detailBackground, detCloseBtn, 'det_close_btn']);
    elmArray.push([detailBackground, detTitle, 'detail_title', workInformation[i].title]);
    elmArray.push([detailBackground, detFeatures, 'detail_features']);
    elmArray.push([detFeatures, detFeat1, 'det_feature det_f_1', workInformation[i].features[0]]);
    elmArray.push([detFeatures, detdot1, 'det_feature_dot']);
    elmArray.push([detFeatures, detFeat2, 'det_feature det_f_1', workInformation[i].features[1]]);
    elmArray.push([detFeatures, detdot2, 'det_feature_dot']);
    elmArray.push([detailBackground, detImage, 'detail_img']);
    elmArray.push([detailBackground, mainBox, 'main_box']);
    elmArray.push([mainBox, leftBox, 'left_box']);
    elmArray.push([mainBox, rightBox, 'right_box']);
    elmArray.push([detFeatures, detFeat3, 'det_feature det_f_1', workInformation[i].features[2]]);
    elmArray.push([leftBox, detDescription, 'detail_descr', workInformation[i].detailText]);
    elmArray.push([rightBox, languagesDiv, 'language_box']);
    elmArray.push([languagesDiv, languagesDivLang1, 'language_prop', workInformation[i].languages[0]]);
    elmArray.push([languagesDiv, languagesDivLang2, 'language_prop', workInformation[i].languages[1]]);
    elmArray.push([languagesDiv, languagesDivLang3, 'language_prop', workInformation[i].languages[2]]);
    elmArray.push([rightBox, buttonsDiv, 'det_buttons_div']);
    elmArray.push([buttonsDiv, buttonsDivBtn1, 'det_button']);
    elmArray.push([buttonsDiv, buttonsDivBtn2, 'det_button']);
    elmArray.push([buttonsDivBtn1, button1Content1, 'det_button_text', 'See live']);
    elmArray.push([buttonsDivBtn1, button1Content2, 'det_button_icon']);
    elmArray.push([buttonsDivBtn2, button2Content1, 'det_button_text', 'See Source']);
    elmArray.push([buttonsDivBtn2, button2Content2, 'det_button_icon']);
    constructor(elmArray);
    button1Content2.src = './Assets/Images/detail_btn1.svg';
    button2Content2.src = './Assets/Images/detail_btn2.svg';
    detCloseBtn.src = './Assets/Images/x2.svg';
    detdot1.src = './Assets/Images/dot.png';
    detdot2.src = './Assets/Images/dot.png';
    detdot1.alt = 'dot';
    detdot2.alt = 'dot';
    button1Content2.alt = 'See live icon';
    button2Content2.alt = 'See source';
    detCloseBtn.alt = 'Close';
    detailBackground.style = 'animation-name: detail_open; animation-duration: 0.5s;';
    detailPreBackground.style = 'animation-name: background-open; animation-duration: 0.5s;';

    for (let i = 0; i < 5; i += 1) {
      sectObj[i].style = 'filter: blur(4px); -webkit-filter: blur(4px);';
    }
    detCloseBtn.addEventListener('click', (event) => {
      event.preventDefault();
      elmArray = [];
      detailBackground.style = 'animation-name: detail_close;animation-duration: 1s;';
      detailPreBackground.style = 'animation-name: background-close; animation-duration: 1s;';
      setTimeout(() => { detailPreBackground.remove(); detailBackground.remove(); }, 800);
      for (let i = 0; i < 5; i += 1) {
        sectObj[i].style = '';
      }
    });
    detailPreBackground.addEventListener('click', (event) => {
      event.preventDefault();
      elmArray = [];
      detailBackground.style = 'animation-name: detail_close;animation-duration: 1s;';
      detailPreBackground.style = 'animation-name: background-close; animation-duration: 1s;';
      setTimeout(() => { detailPreBackground.remove(); detailBackground.remove(); }, 800);
      for (let i = 0; i < 5; i += 1) {
        sectObj[i].style = '';
      }
    });
  });
}
constructor(ElementsArray);
