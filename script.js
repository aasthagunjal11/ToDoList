document.addEventListener('DOMContentLoaded', function(){
    var newItemInput  = document.getElementById("newItem");
    var addItemButton = document.getElementById("addItem");
    var itemList = document.getElementById("itemList");
    var itemCountSpan = document.getElementById("itemCount");

    function updateItemCount(){
        var totalItems = itemList.getElementsByTagName("li").length;
        itemCountSpan.textContent = totalItems;
    }
    addItemButton.addEventListener("click", function(){
        var newItemText = newItemInput.value.trim();
        if(newItemText !==" "){
            var li = document.createElement("li");
            li.textContent = newItemText;

            var removeButton = document.createElement("button");
            removeButton.textContent ="Remove";
            removeButton.addEventListener("click", function(){
                itemList.removeChild(li);
                updateItemCount();
            });
            li.appendChild(removeButton);
            itemList.appendChild(li);

            newItemInput.value = "";
            updateItemCount();
        }
    });
});