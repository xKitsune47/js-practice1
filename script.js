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
    setTimeout(renderContent, 500); // add delay timer after finished development
}

function renderContent(){
    let parentElement = document.querySelector('body');
    fillSite();
    parentElement.setAttribute('style', 'background-color: #365351;');
    document.getElementsByTagName('link')[0].setAttribute('href', 'newstyle.css');
    document.getElementsByTagName('title')[0].innerHTML = 'Platform game';

    new TypeIt('#mainMessage', {
        strings: 'Welcome adventurer!',
        speed: 75,
        afterComplete: function (instance){
            instance.destroy();
        },
    })
    .go();
}

function fillSite(){
    document.getElementsByTagName('body')[0].innerHTML = `
    <section id="header">
        <div class="gameTitle">
            <h1>Platform game</h1>
        </div>
        <div class="menu">
            <span class="option"><h2><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Guides</a></h2></span>
            <span class="option"><h2><a href="#footer">Devs</a></h2></span>
        </div>
    </section>
    <section id="main">
        <div class="bckgimg"></div>
        <div class="mainEntry">
            <p id="mainMessage"></p>
        </div>
        <div class="scrolldownEntry">
            <div class="content">
                <p>Game made by Collegium Witelona Legnica students as their final project</p>
                <p>It consists of 3 levels, easy WASD+Spacebar mechanics, few damage dealing mechanics, wall sliding, double jump, healing berries and checkpoints</p>
                <p>This site was made as my personal project to practice HTML, CSS and JS</p>
                <p class="aintmuch">
                    <a href="#">It ain't much but it's honest work<span><img src="aint-much.jpg" alt="aintmuch" height="200" /></span></a>
                </p>
            </div>
        </div>
    </section>
    <section id="footer">
        <div class="footerContent">
            <h2>Game devs:</h2>
            <p>
                <a href="https://github.com/kapdal/" target="_blank">Jakub Obłoza</a><br>
            </p>
            <p>
                <a href="https://github.com/Oliwia-Charyszczak/" target="_blank">Oliwia Charyszczak</a>
            </p>
        </div>
        <div class="footerContent">
            <h2>Site devs:</h2>
            <p>
                <a href="https://github.com/xKitsune47/" target="_blank">Franciszek Cybruch</a><br>
            </p>
        </div>
    </section>
    `;
}

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');


let appendingArray = [];

// add changing site title
// change name of the stylesheet that it's swapping to