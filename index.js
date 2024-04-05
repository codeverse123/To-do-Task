var input = document.getElementById("addtask");
var container = document.getElementById('container')
var imgdiv = document.getElementById("taskdiv")

function Add() {
    if (input.value === "") {
        const newDiv = document.createElement('div');
        newDiv.id = "newdiv"
        newDiv.innerHTML = "This field is required"
        document.querySelector("#container").appendChild(newDiv);
        setInterval(() => {
            document.querySelector("#container").removeChild(newDiv);
        }, 2000);
    } else {
        const taskdiv = document.createElement('div')
        taskdiv.id = "taskdiv"
        taskdiv.innerHTML = input.value
        const img = document.createElement('img')
        img.id='img_delete'
        img.src='delete.png'
        img.onclick=function(){
            container.removeChild(taskdiv)
        }
        taskdiv.appendChild(img)
        container.appendChild(taskdiv)
    }
    input.value = '';
}