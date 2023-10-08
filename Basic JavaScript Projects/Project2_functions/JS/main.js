function change_element() {
    // create a string with a line break before it
    var str = "<br>Added some text";

    // add that string to the elements content
    document.getElementById("text").innerHTML += str;
}