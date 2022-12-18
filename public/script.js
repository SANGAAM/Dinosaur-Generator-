console.log('script.js loaded');

document.querySelector('#btnload').addEventListener('click', () => {
    
    if (document.querySelector('#dinoname') !== null){
        document.querySelector('#dinoname').remove();
    } 
                  
    if (document.querySelector('#dinoimage') !== null){
        document.querySelector('#dinoimage').remove();
    }
    dinoname();
    dinoimage();
}); 
 
 
async function dinoname(){
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoname = data[0].join(' ')
    console.log(dinoname);

    
 
    let dinonameDiv = document.createElement('div');
    dinonameDiv.id = 'dinoname';
    dinonameDiv.textContent = dinoname;
    document.querySelector('#dinoWrapper').appendChild(dinonameDiv);
};  

async function dinoimage(){
    const response = await fetch('/dinoimage');
    const data = await response.json();
    let dinoimage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoimageUrl = dinoimage.thumbnailUrl;
    let dinoAlt = dinoimage.name;
    console.log(dinoimage,dinoAlt);    
      
         
    let img = document.createElement('img');
         img.id = 'dinoimage';
         img.src = dinoimageUrl;
         img.alt = 'dinoAlt'
         document.querySelector('#dinoWrapper').appendChild(img);
    
};     