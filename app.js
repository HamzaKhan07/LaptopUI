function ToDo()
{
    document.querySelector(".todo-button").addEventListener("click",add);
    document.querySelector(".todo-list").addEventListener("click",checkDelete);
    document.querySelector(".todo-list").addEventListener("click",checkComplete);
    document.querySelector(".filter-todo").addEventListener("click",addFilter);

    function add(event)
    {
        event.preventDefault();
    
        var input=document.querySelector(".todo-input");
        var addBtn=document.querySelector(".todo-button");
        var list=document.querySelector(".todo-list");

      
        var todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");

        var todoLi=document.createElement('li');
        todoLi.innerHTML=input.value;
        todoLi.classList.add("todo-item");
        todoDiv.appendChild(todoLi);

        var completedButton=document.createElement("button");
        completedButton.innerHTML="<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        var trashButton=document.createElement("button");
        trashButton.innerHTML="<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        list.appendChild(todoDiv);
        input.value='';
    }
    function checkDelete(e)
    {
        var item=e.target;

        if(item.classList[0]==="trash-btn")
        {
            var parent=item.parentElement;
            parent.classList.add("fall");
            parent.addEventListener('transitionend',function(){
                parent.remove();
            });
            
        }
    }
    function checkComplete(e)
    {
        var item=e.target;

        if(item.classList[0]==="complete-btn")
        {
            var parent=item.parentElement;
            parent.classList.toggle("complete");
        }
    }
    function addFilter(e)
    {
        var target=e.target.value;
        var i=0;
        var list=document.querySelectorAll(".todo");

        switch(target)
        {
            case "all":
                for(i=0;i<list.length;i++)
                {
                    list[i].style.display="flex";
                }
                break;

            case "completed":
                for(i=0;i<list.length;i++)
                {
                    if(list[i].classList.contains("complete"))
                    {
                        list[i].style.display="flex";
                    }
                    else
                    {
                        list[i].style.display="none";
                    }
                }
                break;

            case "uncompleted":
                for(i=0;i<list.length;i++)
                {
                    if(!list[i].classList.contains("complete"))
                    {
                        list[i].style.display="flex";
                    }
                    else
                    {
                        list[i].style.display="none";
                    }
                }


        }
    }
}
ToDo();
