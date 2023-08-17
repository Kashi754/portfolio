let projectButtons = document.getElementsByClassName("accordion_trigger");

const displayDescription = (event) => {
    let element = event.currentTarget;
    element.classList.toggle("active");
    let panel = element.nextElementSibling;

    if (!panel.style.maxHeight) {
        for (const projectButton of projectButtons) {
            projectButton.nextElementSibling.style.maxHeight = null;
            projectButton.getElementsByClassName("fa-circle-plus")[0].style.display = 'inline-block';
            projectButton.getElementsByClassName("fa-circle-minus")[0].style.display = 'none';
        }
        panel.style.maxHeight = panel.scrollHeight + "px";
        element.getElementsByClassName("fa-circle-plus")[0].style.display = 'none';
        element.getElementsByClassName("fa-circle-minus")[0].style.display = 'inline-block';
    }
    else  {
        panel.style.maxHeight = null;
        element.getElementsByClassName("fa-circle-plus")[0].style.display = 'inline-block';
        element.getElementsByClassName("fa-circle-minus")[0].style.display = 'none';
    }
}

for (const projectButton of projectButtons) {
    projectButton.addEventListener('click', displayDescription);
}
