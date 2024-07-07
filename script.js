
document.getElementById("ajout_nom").addEventListener("click",function(){
    var nom=document.getElementById("nom").value,
        ul1=document.getElementById("recettes"),
        li1=document.createElement("li"),
        nom1=document.createTextNode(nom),
        b1=document.createElement("button");
    b1.textContent="supprimer";
    li1.append(nom1);
    ul1.appendChild(li1).append(b1);
    var ul2=document.createElement("ul"),
        li2=document.createElement("li"),
        li21=document.createElement("li");
    li2.textContent="ingrediens";
    li21.textContent="instructions";
    ul2.appendChild(li2);
    ul2.appendChild(li21);
    li1.appendChild(ul2);
    document.getElementById("ajout_ing").addEventListener("click",function(){
        var ol3=document.createElement("ul"),
            li3=document.createElement("li"),
            ig=document.getElementById("ingredien").value,
            ig1=document.createTextNode(ig);
            li3.append(ig1);
            ol3.appendChild(li3);
            li2.appendChild(ol3);
        })
            document.getElementById("ajout_inst").addEventListener("click",function(){
        var ol4=document.createElement("ul"),
            li4=document.createElement("li"),
            ins=document.getElementById("instruction").value,
            ins1=document.createTextNode(ins);
            li4.append(ins1);
            ol4.appendChild(li4);
            li21.appendChild(ol4);
    })
})
document.getElementById("recettes").addEventListener("click",function(e){
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    })
window.localStorage.setItem("allrecettes",nom1);
window.localStorage.setItem("allimgrediens",ig);
window.localStorage.setItem("allinstructions",ins);

    
    

