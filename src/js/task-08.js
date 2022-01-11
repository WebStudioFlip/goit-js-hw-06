const form = document.querySelector(".login-form")


const onFormSubmit = function (event) {   
    event.preventDefault();       
    const formInputs = [...event.currentTarget.querySelectorAll("input")] 
    if ( formInputs.find(el => el.value.length === 0))
       {alert("Заполните все поля");} else {          
           const element = {}
        formInputs.forEach(el=>{           
            element[el.name] = form.elements[el.name].value
    } )
    console.log(element)   
    form.reset()
}
}

form.addEventListener("submit", onFormSubmit)


