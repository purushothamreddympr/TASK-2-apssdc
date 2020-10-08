function loadJson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}

loadJson("home details.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	cards1(data.card1);
	cards2(data.card2);
})

var card1=document.querySelector(".card1");

function cards1(info){
	var image1=document.createElement("img");
	image1.src=info.image;
	card1.appendChild(image1);
	var name1=document.createElement("h3");
	name1.setAttribute("class","font")
	name1.textContent=info.name;
	card1.appendChild(name1);
	var mail=document.createElement("h5");
	mail.textContent=info.email;
	card1.appendChild(mail);
	var phone=document.createElement("h4");
	phone.textContent=info.mbl;
	card1.appendChild(phone);
	var button1=document.createElement("button");
	button1.textContent=info.btn;
	button1.setAttribute("class","btn");
	button1.addEventListener("click",static);
	card1.appendChild(button1);
}

var card2=document.querySelector(".card2")
function cards2(info2){
	var image2=document.createElement("img");
	image2.src=info2.image;
	card2.appendChild(image2);
	var name2=document.createElement("h3");
	name2.setAttribute("class","font")
	name2.textContent=info2.name;
	card2.appendChild(name2);
	var mail=document.createElement("h5");
	mail.textContent=info2.email;
	card2.appendChild(mail);
	var phone=document.createElement("h4");
	phone.textContent=info2.mbl;
	card2.appendChild(phone);
	var button2=document.createElement("button");
	button2.textContent=info2.btn;
	button2.setAttribute("class","btn");
	button2.addEventListener("click",dynamic);
	card2.appendChild(button2);
}
function dynamic(){
	window.location.href="indextask.html";
}
function static(){
	window.location.href="resume.html";
} 