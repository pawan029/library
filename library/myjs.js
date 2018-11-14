
// for login and registration page
function showloginform() {

    document.getElementById('login-form').style.display = "block";

}

function showregform() {
	 document.getElementById('login-form').style.display = "none";

	 document.getElementById('reg-container').style.display = "block";

   
   
}
//end
//start for aboutus page
function showaboutus()
{
	// document.getElementById("feature-post").style.display="none";
	document.getElementsByClassName("feature-post")[0].style.display='none';

	document.getElementById("main-content-bottomslider").style.position= "absolute";
	document.getElementById("main-content-bottomslider").style.width= "99%";
	document.getElementById("main-content-bottomslider").style.top= "494px";
	document.getElementById("main-content-bottomslider").style.margin= "0px 0px 0px 2px";

	// document.getElementById("left-sidebar-categories-list").style.display="none";
	// document.getElementById("right-sidebar-img-gallary").style.display="none";
	document.getElementById("field").style.display="none";
	document.getElementById("popular-books").style.display="none";
	document.getElementById("all-popular-books").style.display="none";
	document.getElementById("about-us-container").style.display="block";

	

	//document.getElementsByClassName("left-sidebar-categories-list");
	// document.getElementsByClassName('feature-post').style.display="none";
	// document.getElementsByClassName('main-content-bottomslider').style.display="none";
	// document.getElementsByClassName('right-sidebar-img-gallary').style.display="none";
	// document.getElementsByClassName('field').style.display="none";
	// document.getElementsByClassName('popular-books').style.display="none";
	//document.getElementsByClassName('about-us-container').style.display="block";



}


  // book pop-up-detailbook

function showbookdetail() {
	document.getElementById('pop-up-detailbook').style.display="block";

	
}
function hidebookdetail() {
	document.getElementById('pop-up-detailbook').style.display="none";
	
}
function showbookdetail2() {
	document.getElementById('pop-up-detailbook2').style.display="block";

	
}
function hidebookdetail2() {
	document.getElementById('pop-up-detailbook2').style.display="none";
	
}
function showbookdetail3() {
	document.getElementById('pop-up-detailbook3').style.display="block";

	
}
function hidebookdetail3() {
	document.getElementById('pop-up-detailbook3').style.display="none";
	
}

function showdetailbook()
{
	var x = document.getElementsByClassName('all_pop-up-detailbook');
	x[0].style.display="block";
	x[1].style.display="block";
	x[2].style.display="block";
	x[3].style.display="block";
	x[4].style.display="block";
	x[5].style.display="block";
	x[6].style.display="block";
	x[7].style.display="block";
	x[8].style.display="block";
	x[9].style.display="block";
	x[10].style.display="block";
	x[11].style.display="block";
	x[12].style.display="block";
	x[13].style.display="block";
	x[14].style.display="block";
    
	// document.getElementById('all_pop-up-detailbook').style.display="block";
}
function hidedetailbook() {
	var x=document.getElementsByClassName('all_pop-up-detailbook');
   var i;
   for ( i=0; i <= 13; i++) {
   
  
	this.x[i].style.display="none";
	console.log(this);
}
}