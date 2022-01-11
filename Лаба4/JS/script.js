//======================== Task_1 ========================//
let div_3 = document.getElementById("box3");
let div_6 = document.getElementById("box6");
var sec_count = 0;

div_3.onclick = function(event){
    Swapper();
}
div_6.onclick = function(event){
    Swapper();
}

function Swapper()
{
    let box3_container = document.getElementById("box3");
    let box3_content = document.getElementById("box3").innerHTML;
    let box6_container = document.getElementById("box6");
    let box6_content = document.getElementById("box6").innerHTML;
    let changer = box3_content;
    box3_container.innerHTML=box6_content;
    box6_container.innerHTML=changer;  
}
//======================== Task_2 ========================//
function Task2()
{
    sec_count++;
    let a = 6; 
    let b = 9;
    let res = a * b; 
    document.getElementById("resultarea").value = res.toString();
    if(sec_count > 69){
        alert("You have done it enought times....Plz stop");
    }
}
//======================== Task_3 ========================//

function getCookie(name) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
	// возвращает куки с указанным name, или undefined, если ничего не найдено
}

function setCookie(name, value, options = {}) {
	// options = { path: '/' };
  
	if (options.expires instanceof Date) 
	{
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) 
	{
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
		if (optionValue !== true) 
		{
			updatedCookie += " " + optionValue;
		}
	}
	document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': 0
    });
}

function maxNumber(){
    let num = document.getElementById("inputString").value;
    num = num.replace(/\D/gi,"");
	num = num.replace(/[ ]{2,}/gi," ");  // replace everything except spaces and alphanumeric characters 
	num = num.replace(/\D /,"\n");  
    const greatestDigit = (num = 0, greatest = 0) => {
        if(num){
           const max = Math.max(num % 10, greatest);    
           return greatestDigit(Math.floor(num / 10), max);
        };
        return greatest;
     };
     alert(greatestDigit(num));
     setCookie("cookie1", greatestDigit(num));
	console.log(document.cookie);
}


window.onload = afterReload();

function afterReload() {
	let result = confirm("The data in cookies: " + document.cookie + "\nClick OK to delete cookies.");
	if(result)  
	{
		deleteCookie("cookie1");
		document.getElementById("inputString").style.display = "none";
		document.getElementById("convertButton").style.display = "none";
		
		let res = confirm("Cookies deleted.\nPress OK to reload page and start again.");
		if(res) 
		{
			window.location.reload();
		}
	} 
}
//======================== Task_4 ========================//
 
function task4() {
    var pos = document.querySelector('input[name="position"]:checked').value;
    if (pos == "Right"){
        if (document.querySelector('.pos2').checked == true){
            document.getElementById("box2").style.justifyContent = "right";
            localStorage.setItem("pos2", "right")
        }
        if (document.querySelector('.pos4').checked == true){
            document.getElementById("box4").style.textAlign = "right";
            localStorage.setItem("pos4", "right")
        }
        if (document.querySelector('.pos5').checked == true){
            document.getElementById("box5").style.textAlign = "right";
            localStorage.setItem("pos5", "right")
        }
    }
    if (pos == "Center"){
        if (document.querySelector('.pos2').checked == true){
            document.getElementById("box2").style.justifyContent = "center";
            localStorage.setItem("pos2", "center")
        }
        if (document.querySelector('.pos4').checked == true){
            document.getElementById("box4").style.textAlign = "center";
            localStorage.setItem("pos4", "center")
        }
        if (document.querySelector('.pos5').checked == true){
            document.getElementById("box5").style.textAlign = "center";
            localStorage.setItem("pos5", "center")
        }
    }
}

//======================== Task_5 ========================//

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = selection;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

function addelement() {
    var text = document.getElementById('log').textContent;
    var completelist = document.getElementById("numList1");

    completelist.innerHTML += "<li>Item -  " + text + "</li>";

}

function saveAll() {
    var toStorage = [];
    var values = document.querySelectorAll('li');
    for (var i = 0; i < values.length; i++) {
        toStorage.push(values[i].innerHTML);
    }
    localStorage.setItem('items', JSON.stringify(toStorage));
    document.getElementById(`numListForm`).setAttribute("class","hidden" );
}

window.onunload = function () {
    var pos2 = localStorage.getItem('pos2')
    var pos4 = localStorage.getItem('pos4')
    var pos5 = localStorage.getItem('pos5')
    localStorage.clear();
    localStorage.setItem("pos2", pos2)
    localStorage.setItem("pos4", pos4)
    localStorage.setItem("pos5", pos5)

}