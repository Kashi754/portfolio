let projectButtons = document.getElementsByClassName("accordion_trigger");

const displayDescription = (event) => {
    let element = event.currentTarget;
    if(element.getElementsByClassName("fa-circle-plus")[0].style.display === 'inline-block') {
        for (const projectButton of projectButtons) {
            projectButton.nextElementSibling.style.display = 'none';
            projectButton.getElementsByClassName("fa-circle-plus")[0].style.display = 'inline-block';
            projectButton.getElementsByClassName("fa-circle-minus")[0].style.display = 'none';
        }
        element.nextElementSibling.style.display = 'flex';
        element.getElementsByClassName("fa-circle-plus")[0].style.display = 'none';
        element.getElementsByClassName("fa-circle-minus")[0].style.display = 'inline-block';
    }
    else {
        element.nextElementSibling.style.display = 'none';
        element.getElementsByClassName("fa-circle-plus")[0].style.display = 'inline-block';
        element.getElementsByClassName("fa-circle-minus")[0].style.display = 'none';
    }
}

for (const projectButton of projectButtons) {
    projectButton.addEventListener('click', displayDescription);
}