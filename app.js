// constants
const
    urlInput = document.getElementById('urlInput'),
    urlButton = document.getElementById('urlButton'),
    linkList = document.getElementById('linkList')
    ;


// vars
var 
    currentLinks = 0,
    initLinks = 0
    ;

// functions
function createLink(url) {
    let linkContainer = document.createElement('li');
    let linkContent = document.createElement('a');
    linkContent.href = url;
    linkContent.innerHTML = url;

    linkContainer.appendChild(linkContent);
    linkList.appendChild(linkContainer);
}

// init
for (let x = 0; x<localStorage.length; x++) {
    currentLinks++;
}

for (let i = 0; i<currentLinks; i++) {
    currentLinks++;
    let url = localStorage.getItem(`link${i}`);

    createLink(url);
}

urlButton.addEventListener('click', function(e) {
    createLink(urlInput.value);

    // store in localStorage
    localStorage.setItem(`link${currentLinks+1}`, urlInput.value);
    // add one more to 'currentLinks' var
    currentLinks++;
});