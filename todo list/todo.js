  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
  var span1 = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var tx1 = document.createTextNode("\u2715");
  var txt2 = document.createTextNode("\u2713");
  span1.className = "close";
  span2.className = "right";
  span1.appendChild(txt1);
  span2.appendChild(txt2);
  myNodelist[i].appendChild(span1);
  myNodelist[i].appendChild(span2);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Click on a right button and done the current list item
var add = document.getElementsByClassName("right");
for (let i = 0; i < add.length; i++) {
    add[i].onclick = function() {
      var done = document.getElementById("done")
      console.log();
       var li = document.createElement("li");
      var inputValue = this.parentElement.textContent.slice(0,-2);
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      done.appendChild(li);
      this.parentElement.style.display = "none";

    }
  }



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("u").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span1 = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var tx1 = document.createTextNode("\u2715");
  var txt2 = document.createTextNode("\u2713");
  span1.className = "close";
  span2.className = "right";
  span1.appendChild(txt1);
  span2.appendChild(txt2);
  li.appendChild(span1);
  li.appendChild(span2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  for (let i = 0; i < add.length; i++) {
    add[i].onclick = function() {
      var done = document.getElementById("done")
       var li = document.createElement("li");
      var inputValue = this.parentElement.textContent.slice(0,-2);
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      done.appendChild(li);
      this.parentElement.style.display = "none";

    }
  }


}