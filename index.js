/* Novinky */
/* 1. Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement.
Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
2. Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a 
maximální šířku na 60rem.
3. Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl 
změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
4. Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu 
class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.
5. Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte 
jeho atribut src na obrázek images/zprava3-novy.jpg.            */

const bodyElement = document.querySelector('body')
bodyElement.style.backgroundColor = '#e9e9e9'

const newsElement = document.querySelector('news')
newsElement.style.backgroundColor = white
newsElement.style.maxWidth = '60rem'

const headingElement = document.querySelector('h1')
headingElement.classList.add('news_title')
headingElement.textContent = 'Aktuální novinky'

const firstPostElement = document.getElementById('zprava1')
firstPostElement.classList.add('post--main')

const lastPostImgElement = document.querySelector('#zprava3 img')
lastPostImgElement.src = 'images/zprava3-novy.jpg'


