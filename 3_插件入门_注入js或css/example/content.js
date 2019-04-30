var input_list = document.querySelectorAll("input");

input_list.forEach(function(element) {
    element.onclick = function() {
        alert("你点击了这个input元素!");
    };
});