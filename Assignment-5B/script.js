//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

function showText(checkboxelement){
	if(checkboxelement.checked) {
	alert("I am an alert box!");
	}
}
	

}

$(".checkbox").change(function() {
    if(this.checked) {
        //Do stuff
        bgcolor=red;
    }
});

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
