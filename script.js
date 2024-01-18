'use strict';

new TypeIt('#startText', {
    strings: 'READY TO PLAY?',
    afterComplete: function (instance){
        instance.destroy();
    },
})
.type('<br><button onclick="enterButton();" id="entry">Y</button> <button onclick="blockEntry();">N</button>')
.go();

function blockEntry(){
    alert(`you can't go back now`);
}

function enterButton(){
    document.getElementById('entry').remove();
    setTimeout(renderContent, 1000);
}

function renderContent(){
    const parentElement = document.querySelector('body');
    parentElement.setAttribute('style', 'background-color: white;');
}

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');