


var peraElement = document.getElementById('pera');

function findValue() {
  var replace = document.getElementById('replace').value;
  var find = document.getElementById('Find').value;
  var pera = peraElement.innerHTML;
  var index = pera.indexOf(find);

  if (index !== -1) {
    peraElement.innerHTML = pera.replace(find, `<span style="background-color: yellow">${replace}</span>`);
    alert("Found and Replaced successfully");
  } else {
    alert("Not found");
  }
}
