document.querySelector("#add").addEventListener('click',()=>{
   if(document.querySelector("#newtask input").value.length == 0){
     alert('Please enter a Task')
   }
   else{
    document.querySelector("#tasks").innerHTML += 
    `<div class="task">
     <lable class ="taskcheck">
     <input type ="checkbox" value="check" class = "taskCheckbox">
     <span id =""taskname>
     ${document.querySelector("#newtask input").value}
     </span>
     </input>
     </lable>
     <button class ="delete">
     <i class="fa-thin fa-delete-left"></i>
     </button>
     </div>`;
  
  let current_task = document.querySelectorAll(".delete");
  for(let i = 0 ; i < current_task.length; i++){
    current_task[i].onclick = function () {
        this.parentNode.remove();
    }
  }
  
    }




})