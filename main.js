function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile=loadjson("data task.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.Careerobjective);
	education(data.educationalqualification);
	skills(data.technicalskills);
})

var child1=document.querySelector(".child1");

function basic(det){
	var img1=document.createElement("img");
	img1.src=det.image;
	child1.appendChild(img1);
	var name=document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);
	var email=document.createElement("a");
	email.href="mailto:mproydevagan@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);
	var number=document.createElement("h3");
	number.textContent=det.number;
	child1.appendChild(number);
	var add = document.createElement("h3");
	add.textContent="Address";
	child1.appendChild(add);
	child1.appendChild(document.createElement("hr"));
	var address=document.createElement("p");
	address.textContent=det.address;
	child1.appendChild(address);
}	

var child2=document.querySelector(".child2");
function careerinfo(info){
	var heading=document.createElement("h3");
	heading.textContent="Careerobjective";
	child2.appendChild(heading);
	child2.appendChild(document.createElement("hr"));
	var heading2=document.createElement("p");
	heading2.textContent=info.info;
	child2.appendChild(heading2);
}

function education(edu){
	var heading3=document.createElement("h3");
	heading3.textContent="educationalqualification";
	child2.appendChild(heading3);
	child2.appendChild(document.createElement("hr"));
	var table1=document.createElement("table");
	table1.setAttribute("class","tablestyle");
	table1.border="1";
	child2.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

function skills(skillinfo){
	var hd=document.createElement("h3");
	hd.textContent="technicalskills";
	child2.appendChild(hd);

	child2.appendChild(document.createElement("hr"));
	for(i=0;i<skillinfo.length;i++){
		var title=document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}
}

