let button = document.querySelector(".mobile-button");
let nav = document.querySelector(".mobile-nav");

button.addEventListener("click",function(){
	button.classList.toggle("open");
	nav.classList.toggle("open")		
})

let header = document.querySelector("header");
let h1 =document.querySelector("h1");

let width = window.innerWidth;

window.addEventListener('resize',function(){
	width = window.innerWidth;
	if(width<750){
		header.style.boxShadow= "0px 0px 100px 25px rgba(30, 30, 66, 1)";
	}
	else{header.style.boxShadow= "none";}
 
})
window.addEventListener('scroll', function(){
	  	const windowTop = this.window.scrollY; 
 		if(windowTop >= 200){
			header.classList.add("header-animation");
			header.style.boxShadow= "none";
		}else{
			header.classList.remove("header-animation");
			
			width = window.innerWidth;
			if(width<750){
				header.style.boxShadow= "0px 0px 100px 25px rgba(30, 30, 66, 1)";
			}
			else{header.style.boxShadow= "none";}
		}
})