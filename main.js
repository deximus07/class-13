let firstNameInput = document.getElementById('input1')
let lastNameInput = document.getElementById('input2')
let courseNameInput = document.getElementById('input3')

function upLocalStorage(){
    const formEl = document.getElementById('updateForm')
    formEl.onsubmit = function(e){
        e.preventDefault()
        if(localStorage){
            let listOfElements = localStorage.getItem('groupOfElements')
            let elements = listOfElements ? JSON.parse(listOfElements) : []
            let firstName = firstNameInput.value
            let lastName = lastNameInput.value
            let course = courseNameInput.value
            elements.push(firstName, lastName, course)
            localStorage.setItem('groupOfElements', JSON.stringify(elements))

            let ol = document.createElement('ol')
            for (let i = 0; i < elements.length; i++){
                let li = document.createElement('li')
                li.innerText = elements[i]
                ol.appendChild(li)
            }
        console.log(elements)
        document.querySelector('body').appendChild(ol)
        }
    }
}
upLocalStorage()