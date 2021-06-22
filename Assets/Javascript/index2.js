const workInformation = [{imagePath:'./Assets/Images/portfolio_pictures/sn1.png',
                                    title:'Tonic',
                                    features:['CANOPY', 'Back End Dev', '2015'],
                                    description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
                                    languages:['html','css','javascript'],
                                    buttonText:'See Project',
                                    },
                                    {imagePath:'./Assets/Images/portfolio_pictures/sn2.png',
                                    title:'Multi-Post Stories',
                                    features:['CANOPY', 'Back End Dev', '2015'],
                                    description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
                                    languages:['html','css','javascript'],
                                    buttonText:'See Project',
                                    },
                                    {imagePath:'./Assets/Images/portfolio_pictures/sn3.png',
                                    title:'Tonic',
                                    features:['CANOPY', 'Back End Dev', '2015'],
                                    description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
                                    languages:['html','css','javascript'],
                                    buttonText:'See Project',
                                    },
                                    {imagePath:'./Assets/Images/portfolio_pictures/sn4.png',
                                    title:'Multi-Post Stories',
                                    features:['CANOPY', 'Back End Dev', '2015'],
                                    description:'A daily selection of privately perzonalized reads; no account or sign-ups required.',
                                    languages:['html','css','javascript'],
                                    buttonText:'See Project',
                                    },
                                    ]

const workSection = document.getElementById('sec_3')
const main_ul = document.createElement('ul')
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
    [workBox,contentBox,'sub_box_2'],[contentBox,titleBox,'title item'],
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

}
