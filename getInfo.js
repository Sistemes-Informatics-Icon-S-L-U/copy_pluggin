function getText(){
	let modal=document.getElementById("artdeco-modal-outlet");
	if (modal){
		let txt=data()+"\t";
		txt+=document.getElementById("pv-contact-info").innerText+"\t";
		let info=modal.getElementsByClassName("pv-contact-info__ci-container");
		for (let i=0;i<info.length;i++){
			txt+=info[i].innerText+"\t";
		}
		copyStringToClipboard(txt);
	}
}

function data(){
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	return dd + '/' + mm + '/' + yyyy;
}

var intervalBtn;

window.onclick = e => {
	let nom = e.target.innerHTML.toLowerCase();
	if (e.target.tagName == "SPAN" && nom.indexOf("info")>-1 && nom.indexOf("contact")>-1){
		intervalBtn = setInterval(function(){ addBtn(); }, 100);
	}
}

function addBtn(){
	let h1=document.getElementById("pv-contact-info");
	if (h1){
		let btnCopiador=document.getElementById("btnCopiador");
		if (!btnCopiador){
			h1.innerHTML+='<img id="btnCopiador" src="https://img.icons8.com/ios/50/000000/copy.png" style="width: 24px;margin-left: 10px;cursor: pointer;">';
			document.getElementById("btnCopiador").addEventListener("click", getText);
			clearInterval(intervalBtn);
		}
	}
}

function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}