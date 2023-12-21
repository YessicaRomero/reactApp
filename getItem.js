export  function getItems(){
    const itemsFromStorage = JSON.parse(window.localStorage.getItem("todo-list"));
    return itemsFromStorage || [];
}
