/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
let content = document.getElementById("content")

function showContent() {
    let style = content.style.display;
    if(style === 'block') {
        content.style.display ='none'
    }
    else {
        content.style.display= 'block'
    }
}