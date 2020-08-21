/*document.querySelector("#container") .style.backgroundColor = "red"  | style corresponding to my wanting to change the CSS, then I put it. and indicate what I want to change | IMPORTANT in the script instead of background-color, the - is replaced by the capital letter*/
document.querySelector("#add-time") //I select via id the element that refers to the button
.addEventListener('click', cloneField) /*addEventListener to explain what event / action will be done on the element - in this case, click through the*/
/*"clik" and then I choose the name for action - preference over what to do. In this case, cloneField to clone part of the form*/

function cloneField() { /*I assign a role to the action I created for the button element*/
    //clone, duplicate fields, but what fields?
    const newAppointment = document.querySelector('.schedule-item').cloneNode(true) //to clone - for this it has to be true within the parentheses - boolean*/
    //const is for a variable that I want to keep the value

    //before cloning, I want to clear the fields, because the user may have filled in, but which fields?
    const cleanFields = newAppointment.querySelectorAll("input") //selects all inputs
  
    //for each field to perform the cleaning, but the field of the moment, whatever and how many the inputs suffer
    cleanFields.forEach(function(clean){
        clean.value = ""
    })

    //put the duplicate field on the page, but where?
    document.querySelector('#schedule-item-availability').appendChild(newAppointment)
}