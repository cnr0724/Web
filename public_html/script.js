/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function emailSend(){
    var mail=document.getElementById("mail").value;
    var subj=document.getElementById("subject").value;
    var mess=document.getElementById("message").value;
    if(confirm("Do you want to proceed?")){
        document.getElementById("show").innerHTML=mail+subj+mess;
    }
}

function hideFormation(){
    var hide=document.getElementById("formation");
    if(hide.style.display==="none"){
        hide.style.display="block";
    }else{
        hide.style.display="none";
    }
}

function addFormation(){
    var ul=document.getElementById("formData");
    var li=document.createElement("li");
    var date=document.getElementById("date").value;
    var desc=document.getElementById("desc").value;
    li.innerHTML=date+": "+desc;
    ul.appendChild(li);
}