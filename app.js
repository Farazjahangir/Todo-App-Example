
// Function to create any element
function elementGenerator(el , text){
    var element = document.createElement(el)
    var textNode = document.createTextNode(text)
    element.appendChild(textNode)
    return element
}

// Function to create input elements
function inputElGenerator(type , value){
    var inputElement = document.createElement('input')
    inputElement.setAttribute('type' , type)
    inputElement.setAttribute('value' , value)
    return inputElement
}

// function to add task
function addTask(){
    var userInput = document.getElementById('input-task').value
    var parentEl = document.getElementById('parent-el')

    // creating li element
    var liEl = elementGenerator('li' , userInput)

    // Creating Span element
    var spanEl = document.createElement('span')

    // Creating Delete Button Element
    var deleteBtnEl = elementGenerator('button' , 'Delete')
    deleteBtnEl.setAttribute('class' , 'deleteBtn')
    deleteBtnEl.setAttribute('onClick' , 'deleteLi(this)')

    // Creating Edit Button Element
    var editBtnEl = elementGenerator('button' , "Edit")
    editBtnEl.setAttribute('class' , 'editBtn')
    editBtnEl.setAttribute('onClick' , 'editTodo(this)')

    
    // Appending Buttons into SPAN
    spanEl.appendChild(deleteBtnEl)
    spanEl.appendChild(editBtnEl) 

    // Appending Span el into LI
    liEl.appendChild(spanEl)

    // Appending LI el onto DOM
    parentEl.appendChild(liEl)
}

// Function To Delete Node
function deleteLi(el){
    parentNode = el.parentNode.parentNode.parentNode
    nodeToDelete = el.parentNode.parentNode;
    parentNode.removeChild(nodeToDelete)   
}

function editTodo(el){
    var parentNode = el.parentNode.parentNode;
    var nodeToDelete = el.parentNode;

    parentNode.removeChild(nodeToDelete)
    var oldText= parentNode.innerText;
    parentNode.innerText = ''
    
    // Creating Input el
    var inputEl = inputElGenerator('text' , oldText)
    inputEl.setAttribute('class' , 'input-box')

    // Creating Span element
    var spanEl = document.createElement('span')

    // Creating Done Button Element
    var doneBtnEl = elementGenerator('button' , 'Done')
    doneBtnEl.setAttribute('class' , 'doneBtn')
    doneBtnEl.setAttribute('onClick' , 'done(this)')
    spanEl.appendChild(doneBtnEl)


    parentNode.appendChild(inputEl)
    parentNode.appendChild(spanEl)   
}

function done(el){
    var parentEl = el.parentNode.parentNode
    var inputEl = el.parentNode.previousElementSibling;
    var spanEl = el.parentNode

    parentEl.removeChild(spanEl)

    var updatedText = inputEl.value
    parentEl.removeChild(inputEl)


    var liText = document.createTextNode(updatedText)

    // Creating Span element
    var spanEl = document.createElement('span')

    // Creating Delete Button Element
    var deleteBtnEl = elementGenerator('button' , 'Delete')
    deleteBtnEl.setAttribute('class' , 'deleteBtn')
    deleteBtnEl.setAttribute('onClick' , 'deleteLi(this)')

    // Creating Edit Button Element
    var editBtnEl = elementGenerator('button' , 'Edit')
    editBtnEl.setAttribute('class' , 'editBtn')

    editBtnEl.setAttribute('onClick' , 'editTodo(this)')

    spanEl.appendChild(deleteBtnEl)
    spanEl.appendChild(editBtnEl)

    parentEl.appendChild(liText)
    parentEl.appendChild(spanEl)

    
}



