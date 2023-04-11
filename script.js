const div = document.getElementById("a")

div.style.backgroundColor = "red"

const h1 = document.createElement("h1")

const h1Text = document.createTextNode("Hellow World")
h1.appendChild(h1Text)

div.appendChild(h1)