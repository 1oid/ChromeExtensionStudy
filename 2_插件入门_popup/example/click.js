var div_list = document.getElementsByTagName("div");

for(var i = 0;i<4;i++) {
    div_list[i].onclick = function(e) {
        e.target.style.backgroundColor = "grey";
    }
}