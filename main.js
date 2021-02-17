var lists = [];
document.getElementById("list").innerHTML = lists ; 

function additem(){
    var newitem = document.getElementById("add_item").value;
    lists.push (newitem);
   document.getElementById("new menu").innerHTML = lists ;
}