console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('nody');
img.onClick = function() {
    log.style.marginLeft = '100px';
};