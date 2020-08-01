//Add sentence to paragraph tags
let paragraphs = document.getElementsByTagName('p');
for(i=0;i<paragraphs.length;i++){
    paragraphs[i].innerHTML='100 Days of code  with Lux is a program  by lux tech academy which runs for 100 days in each tech it involves 100 day of intensive coding and practise and sharing your progress with peers.';
};

//Style section with id main
let sectionMain = document.getElementById('main');
sectionMain.style.background='blue';
sectionMain.style.padding = '0px';
sectionMain.style.margin = '0px';
sectionMain.style.display='flex';

//Add the modal to the html script
let modalDiv = document.createElement('div');
let modalHeading = document.createElement('h2');
let modalParagraph = document.createElement('p');
//Set modal content
modalHeading.innerHTML=' Welcome to JavaScript Training BootCamp';
modalParagraph.innerHTML=' Lux Tech Academy is a free online training BootCamp which have crash and advance coding classes.';
//Add the content to the modal
modalDiv.appendChild(modalHeading);
modalDiv.appendChild(modalParagraph);
//Add the content CSS properties
modalDiv.classList.add('modal');
//Add the div containing the modal to the section wiih id main
sectionMain.append(modalDiv);

//Create a button element
let btn = document.createElement('button');
btn.innerHTML='Toggle Modal';
sectionMain.append(btn);
btn.onclick = function(){
    if(modalDiv.style.display==='none'){
        modalDiv.style.display='block';
    }else{
        modalDiv.style.display='none';
    }
};

