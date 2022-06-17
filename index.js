
function checkCIN(value) {
    if(isLetter(value[0]) ) {
        if(value.length >= 6 && value.length <= 10) return true
    }
        return false;
}
function isLetter(c) {
   return c.toUpperCase() !== c.toLowerCase();
}

checkCIN('123050');

var img = new Image('./images/post1.jpeg');

function checkPhotoSize(img) {
    var sz = img;
    console.log(sz);

}
checkPhotoSize(img);
var cin = document.getElementById("myCin");
document.getElementById("myForm").addEventListener("click",function(e) {
    e.preventDefault();
    if(checkCIN(cin)) console.log(true);
})