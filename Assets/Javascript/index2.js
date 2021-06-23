
const workSection = document.getElementById('sec_3')
const main_ul = document.createElement('ul')
const workDetail = document.getElementById('detail_sec')
const sectObj = [];
        for (let i = 1; i < 6; i += 1) {
        sectObj.push(document.getElementById(`sec_${i}`));
        }

const workInformation = [{imagePath:'./Assets/Images/portfolio_pictures/sn1.png',
        title:'Tonic',
        features:['CANOPY', 'Back End Dev', '2015'],
        description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
        languages:['html','css','javascript'],
        buttonText:'See Project',
        detailText:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
        },
        {imagePath:'./Assets/Images/portfolio_pictures/sn2.png',
        title:'Multi-Post Stories',
        features:['CANOPY', 'Back End Dev', '2015'],
        description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
        languages:['html','css','javascript'],
        buttonText:'See Project',
        detailText:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
        },
        {imagePath:'./Assets/Images/portfolio_pictures/sn3.png',
        title:'Tonic',
        features:['CANOPY', 'Back End Dev', '2015'],
        description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
        languages:['html','css','javascript'],
        buttonText:'See Project',
        detailText:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
        },
        {imagePath:'./Assets/Images/portfolio_pictures/sn4.png',
        title:'Multi-Post Stories',
        features:['CANOPY', 'Back End Dev', '2015'],
        description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
        languages:['html','css','javascript'],
        buttonText:'See Project',
        detailText:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
        },
        ]


workSection.appendChild(main_ul)

function create(obj) { return document.createElement(obj)}
function constructor(obj) { 
    for (let i = 0; i < obj.length; i += 1){
        if(obj[i].length == 2){
        obj[i][0].appendChild(obj[i][1])
         }
         else if(obj[i].length == 3){
            obj[i][0].appendChild(obj[i][1])
            obj[i][1].className = obj[i][2]
         }
         else if(obj[i].length == 4){
             if(obj[i][2]==null){
                obj[i][0].appendChild(obj[i][1])
                obj[i][1].innerHTML = obj[i][3]
             }
             else{
                obj[i][0].appendChild(obj[i][1])
                obj[i][1].className = obj[i][2]
                obj[i][1].innerHTML = obj[i][3]
             }
        }
         else if(obj[i].length == 5){
            if(obj[i][2]==null && obj[i][3]==null){
               obj[i][0].appendChild(obj[i][1])
               obj[i][1].id = obj[i][4]
            }
            else if(obj[i][2]==null){
               obj[i][0].appendChild(obj[i][1])
               obj[i][1].innerHTML = obj[i][3]
               obj[i][1].id = obj[i][4]
            }
            else if(obj[i][3]==null){
                obj[i][0].appendChild(obj[i][1])
                obj[i][1].className = obj[i][2]
                obj[i][1].id = obj[i][4]
             }
             else{
                obj[i][0].appendChild(obj[i][1])
                obj[i][1].innerHTML = obj[i][3]
                obj[i][1].className = obj[i][2]
                obj[i][1].id = obj[i][4]

             }
           
        }
         
}
}

for (let i = 0; i < workInformation.length; i += 1) {

   let workBox = create('li')
   let imageBox = create('img')
   let contentBox = create('div')
   let titleBox = create('div')
   let titleH1 = create('h1')
   let featuresBox = create('ul')
   let feature1Li = create('li')
   let feature1LiH4 = create('h4')
   let featureDot1 = create('li')
   let featureDot1Div = create('div')
   let feature2Li = create('li')
   let featue2LiH4 = create('h4')
   let featureDot2 = create('li')
   let featureDot2Div = create('div')
   let feature3Li = create('li')
   let featue3LiH4 = create('h4')
   let descriptionDiv = create('div')
   let descriptionDivP = create('p')
   let languagesUl = create('ul')
   let languagesUlLi1 = create('li')
   let languagesUlLi2 = create('li')
   let languagesUlLi3 = create('li')
   let languagesUlLi1H5 = create('h5')
   let languagesUlLi2H5 = create('h5')
   let languagesUlLi3H5 = create('h5')
   let buttonDiv = create('div')
   let buttonDivH3 = create('h3')
   let buttonDivH3a = create('a')

   let ElementsArray = [
    [main_ul,workBox],
    [workBox,imageBox,'preview sub_box'],
    [workBox,contentBox,'sub_box_2'],
    [contentBox,titleBox,'title item'],
    [titleBox,titleH1,null,workInformation[i].title],
    [contentBox,featuresBox,'features item'],
    [featuresBox,feature1Li],
    [featuresBox,featureDot1],
    [featuresBox,feature2Li],
    [featuresBox,featureDot2],
    [featuresBox,feature3Li],
    [feature1Li,feature1LiH4,'feature_1',workInformation[i].features[0]],
    [featureDot1,featureDot1Div,'dot'],
    [feature2Li,featue2LiH4,'feature_2',workInformation[i].features[1]],
    [featureDot2,featureDot2Div,'dot'],
    [feature3Li,featue3LiH4,'feature_2',workInformation[i].features[2]],
    [contentBox,descriptionDiv,'description item'],
    [descriptionDiv,descriptionDivP,null,workInformation[i].description],
    [contentBox,languagesUl,'languages item'],
    [languagesUl,languagesUlLi1],
    [languagesUl,languagesUlLi2],
    [languagesUl,languagesUlLi3],
    [languagesUlLi1,languagesUlLi1H5,null,workInformation[i].languages[0]],
    [languagesUlLi2,languagesUlLi2H5,null,workInformation[i].languages[1]],
    [languagesUlLi3,languagesUlLi3H5,null,workInformation[i].languages[2]],
    [contentBox,buttonDiv,'button item'],
    [buttonDiv,buttonDivH3],
    [buttonDivH3,buttonDivH3a,null,workInformation[i].buttonText]
   ]
   constructor(ElementsArray)

    if(i %2 == 0){
        workBox.className = 'box';
    }
    else{
        workBox.className = 'box_rev';
    }
    imageBox.src = workInformation[i].imagePath
    imageBox.alt = "preview"

    buttonDiv.addEventListener('click',(event)=>{
        let detailPreBackground = create('div')
        let detailBackground = create('div')
        let det_close_btn = create('img')
        let detTitle = create('h1')
        let detFeatures = create('div')
        let detFeat1 = create('h1')
        let detdot1 = create('img')
        let detFeat2 = create('h1')
        let detdot2 = create('img')
        let detFeat3 = create('h1')
        let detImage = create('img')
        let detDescription = create('p')
        let languagesDiv = create('div')
        let languagesDivLang1 = create('h6')
        let languagesDivLang2 = create('h6')
        let languagesDivLang3 = create('h6')
        let buttonsDiv = create('div')
        let buttonsDivBtn1 = create('div')
        let button1Content1 = create('h3')
        let button1Content2 = create('img')
        let buttonsDivBtn2 = create('div')
        let button2Content1 = create('h3')
        let button2Content2 = create('img')

        detImage.src = workInformation[i].imagePath
        detImage.alt = "preview"
        elmArray = [
            [workDetail,detailPreBackground,'detail_pre_background'],
            [workDetail,detailBackground,'detail_background'],
            [detailBackground,det_close_btn,'det_close_btn'],
            [detailBackground,detTitle,'detail_title',workInformation[i].title],
            [detailBackground,detFeatures,'detail_features'],
            [detFeatures,detFeat1,'det_feature det_f_1',workInformation[i].features[0]],
            [detFeatures,detdot1,'det_feature_dot'],
            [detFeatures,detFeat2,'det_feature det_f_1',workInformation[i].features[1]],
            [detFeatures,detdot2,'det_feature_dot'],
            [detFeatures,detFeat3,'det_feature det_f_1',workInformation[i].features[2]],
            [detailBackground,detImage,'detail_img'],
            [detailBackground,detDescription,'detail_descr',workInformation[i].detailText],
            [detailBackground,languagesDiv,'language_box'],
            [languagesDiv,languagesDivLang1,'language_prop',workInformation[i].languages[0]],
            [languagesDiv,languagesDivLang2,'language_prop',workInformation[i].languages[1]],
            [languagesDiv,languagesDivLang3,'language_prop',workInformation[i].languages[2]],
            [detailBackground,buttonsDiv,'det_buttons_div'],
            [buttonsDiv,buttonsDivBtn1,'det_button'],
            [buttonsDiv,buttonsDivBtn2,'det_button'],
            [buttonsDivBtn1,button1Content1,'det_button_text','See live'],
            [buttonsDivBtn1,button1Content2,'det_button_icon',],
            [buttonsDivBtn2,button2Content1,'det_button_text','See Source'],
            [buttonsDivBtn2,button2Content2,'det_button_icon'],
            ];
            constructor(elmArray)
            button1Content2.src = './Assets/Images/detail_btn1.svg';
            button2Content2.src = './Assets/Images/detail_btn2.svg';
            det_close_btn.src = './Assets/Images/x2.svg';
            detdot1.src = './Assets/Images/dot.png';
            detdot2.src = './Assets/Images/dot.png';
            detdot1.alt = 'dot';
            detdot2.alt = 'dot';
            button1Content2.alt = 'See live icon';
            button2Content2.alt = 'See source';
            det_close_btn.alt = 'Close';
            detailBackground.style = 'animation-name: detail_open; animation-duration: 0.5s;';
            detailPreBackground.style = 'animation-name: background-open; animation-duration: 0.5s;';
            
            for (let i = 0; i < 5; i += 1) {
            sectObj[i].style = 'filter: blur(4px); -webkit-filter: blur(4px);';
            }
            det_close_btn.addEventListener('click',(event) =>{
                event.preventDefault();
                detailBackground.style = 'animation-name: detail_close;animation-duration: 1s;';
                detailPreBackground.style = 'animation-name: background-close; animation-duration: 1s;';
                setTimeout(()=>{detailPreBackground.remove(); detailBackground.remove();},800) 
                for (let i = 0; i < 5; i += 1) {
                    sectObj[i].style = '';
                    }
            })
            detailPreBackground.addEventListener('click',(event) =>{
                event.preventDefault();
                detailBackground.style = 'animation-name: detail_close;animation-duration: 1s;';
                detailPreBackground.style = 'animation-name: background-close; animation-duration: 1s;';
                setTimeout(()=>{detailPreBackground.remove(); detailBackground.remove();},800) 
                for (let i = 0; i < 5; i += 1) {
                    sectObj[i].style = '';
                    }
            })
    })
}
