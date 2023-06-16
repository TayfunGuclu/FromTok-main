$(document).ready(function() {
    $("#formAlertBox").addClass("d-none")
})

document.addEventListener('submit', function(event) {
    event.preventDefault();
    let data = $('#formulaire-contact').serializeArray()
    let formData = {}

    for(let formControl of data) {
        formData[formControl.name] = formControl.value
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };
    
    fetch('./form.php', requestOptions)
        .then(response => {
            if (response.ok) {
                window.location.href = "./validation.html";
            } else {
                $("#formAlertBox").removeClass("d-none")
                console.log("Erreur côté serveur")
            }
        })
        .catch(error => {
            $("#formAlertBox").removeClass("d-none")
            console.log("Erreur côté client : " + error)
        });
});