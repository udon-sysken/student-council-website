var contents = document.getElementsByClassName('content');

window.onload = function(){
    document.getElementsByClassName('header')[0].classList.add('active');
    for(var i=0; i<contents.length; i++){
        let content = contents[i];
        if(window.innerHeight*3/4 > content.getBoundingClientRect().top){
            content.classList.add('active');
        }
    }
}

window.onscroll = function(){
    for(var i=0; i<contents.length; i++){
        let content = contents[i];
        if(window.innerHeight*3/4 > content.getBoundingClientRect().top){
            content.classList.add('active');
        }
    }
}