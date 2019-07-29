var contents = document.getElementsByClassName('content');
var wrappers = document.getElementsByClassName('wrapper');
var blocks = document.getElementsByClassName('block');

function open_menu(){
    document.getElementsByClassName('header')[0].classList.add('open');
}

function close_menu(){
    document.getElementsByClassName('header')[0].classList.remove('open');
}

function content_scroll(class_name){
    window.scrollTo(0, document.getElementsByClassName(class_name)[0].getBoundingClientRect().top);
}

function check_active(){
    for(var i=0; i<contents.length; i++){
        let content = contents[i];
        if(window.innerHeight > content.getBoundingClientRect().top){
            content.classList.add('active');
        }
    }
    for(var i=0; i<wrappers.length; i++){
        let wrapper = wrappers[i];
        if(window.innerHeight > wrapper.getBoundingClientRect().top){
            wrapper.classList.add('active');
        }
    }
    for(var i=0; i<blocks.length; i++){
        let block = blocks[i];
        if(window.innerHeight > block.getBoundingClientRect().top){
            block.classList.add('active');
        }
    }
}

window.onload = check_active;
window.onscroll = check_active;
window.onresize = check_active;