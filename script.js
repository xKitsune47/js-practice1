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
    document.getElementById('startText').remove();
    setTimeout(renderContent, 1000);
}

function renderContent(){
    document.querySelector('body').setAttribute('style', 'background-color: white;')
}