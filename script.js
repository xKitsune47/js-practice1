'use strict';

new TypeIt('#startText', {
    strings: 'READY TO PLAY?',
    speed: 10, // REMOVE AFTER FINISHED DEVELOPMENT
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
    setTimeout(renderContent, 0);
}

function renderContent(){
    let parentElement = document.querySelector('body');
    const createLink = document.createElement('a');
    const createSpan = document.createElement('span');
    const createDiv = document.createElement('div');
    const createParagraph = document.createElement('p');
    const createHeader1 = document.createElement('h1');
    const createHeader2 = document.createElement('h2');
    parentElement.removeAttribute('style');
    addSections(document.querySelector('body'));
    addDivs(document.getElementsByTagName('section')[0]);
    fillHeader();
    fillMain();
    
    document.getElementsByTagName('link')[0].setAttribute('href', 'styleplaceholder.css');

    // new TypeIt('#mainMessage', {
    //     strings: 'Welcome adventurer!',
    //     speed: 75,
    //     afterComplete: function (instance){
    //         instance.destroy();
    //     },
    // })
    // .go();
}

function addSections(parent){
    const section1 = document.createElement('section');
    const section2 = document.createElement('section');
    const section3 = document.createElement('section');
    section1.setAttribute('id', 'header');
    parent.append(section1);
    section2.setAttribute('id', 'main');
    parent.append(section2);
    section3.setAttribute('id', 'footer');
    parent.append(section3);
}

function addDivs(parent){
    const div1header = document.createElement('div');
    const div2header = document.createElement('div');
    div1header.setAttribute('class', 'gameTitle');
    div2header.setAttribute('class', 'menu');
    appendingArray = [div1header, div2header];
    appendingArray.forEach(element => parent.append(element));
    appendingArray = [];

    parent = document.getElementsByTagName('section')[1];
    const div1main = document.createElement('div');
    const div2main = document.createElement('div');
    const div3main = document.createElement('div');
    div1main.setAttribute('class', 'bckimg');
    div2main.setAttribute('class', 'mainEntry');
    div3main.setAttribute('class', 'scrolldownEntry');
    appendingArray = [div1main, div2main, div3main];
    appendingArray.forEach(element => parent.append(element));
    appendingArray = [];

    parent = document.getElementsByTagName('section')[2];
    const div1footer = document.createElement('div');
    const div2footer = document.createElement('div');
    div1footer.setAttribute('class', 'footerContent');
    div2footer.setAttribute('class', 'footerContent');
    appendingArray = [div1footer, div2footer];
    appendingArray.forEach(element => parent.append(element));
    appendingArray = [];
}

function fillHeader(){
    const createHeader1 = document.createElement('h1');
    const createHeader2_1 = document.createElement('h2');
    const createHeader2_2 = document.createElement('h2');
    const createSpan1 = document.createElement('span');
    const createSpan2 = document.createElement('span');
    createSpan1.setAttribute('class', 'option');
    createSpan2.setAttribute('class', 'option');
    const createLink1 = document.createElement('a');
    const createLink2 = document.createElement('a');
    createLink1.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    createLink2.setAttribute('href', '#footer');

    document.getElementsByTagName('div')[0].append(createHeader1);
    document.getElementsByTagName('h1')[0].innerHTML = 'Platform game';

    document.getElementsByTagName('div')[1].append(createSpan1);
    document.getElementsByTagName('div')[1].append(createSpan2);

    document.getElementsByTagName('span')[0].append(createHeader2_1);
    document.getElementsByTagName('span')[1].append(createHeader2_2);

    document.getElementsByTagName('h2')[0].append(createLink1);
    document.getElementsByTagName('a')[0].innerHTML = 'Guides';
    document.getElementsByTagName('h2')[1].append(createLink2);
    document.getElementsByTagName('a')[1].innerHTML = 'Devs';
}

function fillMain(){
    const createParagraph = document.createElement('p');
    const createDiv = document.createElement('div');
    const createParagraphContent1 = document.createElement('p');
    const createParagraphContent2 = document.createElement('p');
    const createParagraphContent3 = document.createElement('p');
    const createParagraphContent4 = document.createElement('p');
    const createLink = document.createElement('a');
    const createImg = document.createElement('img');
    createLink.setAttribute('href', '#');
    createImg.setAttribute('src', 'aint-much.jpg');
    createImg.setAttribute('height', '200');
    createParagraphContent4.setAttribute('class', 'aintmuch');

    createParagraph.setAttribute('id', 'mainMessage');
    document.getElementsByTagName('div')[3].append(createParagraph);

    createDiv.setAttribute('class', 'content');
    document.getElementsByTagName('div')[4].append(createDiv);
    document.getElementsByTagName('div')[5].append(createParagraphContent1);
    document.getElementsByTagName('div')[5].append(createParagraphContent2);
    document.getElementsByTagName('div')[5].append(createParagraphContent3);
    document.getElementsByTagName('div')[5].append(createParagraphContent4);

    document.getElementsByTagName('p')[1].innerHTML = 'Game made by Collegium Witelona Legnica students as their final project';
    document.getElementsByTagName('p')[2].innerHTML = 'It consists of 3 levels, easy WASD+Spacebar mechanics, few damage dealing mechanics, wall sliding, double jump, healing berries and checkpoints';
    document.getElementsByTagName('p')[3].innerHTML = 'This site was made as my personal project to practice HTML, CSS and JS';
    document.getElementsByTagName('p')[4].append(createLink);
    document.getElementsByTagName('a')[2].innerHTML = `It ain't much but it's honest work`;
    document.getElementsByTagName('a')[2].append(document.createElement('span'));
    document.getElementsByTagName('span')[2].append(createImg);
}

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');


let appendingArray = [];