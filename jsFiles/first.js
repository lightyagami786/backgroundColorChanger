var b=document.querySelector('h1');

var a=document;
a.addEventListener('mousemove',function (e) {
        a.body.style.backgroundColor=`rgb(
            ${e.offsetX%255},${e.offsetY%255},${(e.offsetX%255+e.offsetY%255)%255}
        )`;
        b.innerHTML=""

})