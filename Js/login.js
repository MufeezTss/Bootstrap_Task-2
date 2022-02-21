
function myFunc() {

    var sub = {
      name:document.getElementById('name').value,
      pass:document.getElementById('pass').value
    }

    localStorage.setItem('sub', JSON.stringify(sub));
    // localStorage.getItem('sub', JSON.stringify(sub));
    

}