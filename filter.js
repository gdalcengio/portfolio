// function filterSelection (c)  {
//     for (var i = 0; i < 5; i++) {
//         let projectClass = projects[i].classList;
//         if (projectClass.contains('all')) {
//             // projectClass.remove("hidden");
//             // projectClass.add("success");
//         } else {
//             projects[i].classList.add("hidden");
//         }
//     }   
// }

function filterSelection(c) {
    var projects, i;
    projects = document.getElementsByClassName("image-link-container");

    for (i = 0; i < projects.length; i++) {
        projects[i].classList.add("hidden");
        if (projects[i].classList.contains(c)) projects[i].classList.remove("hidden");
    }
}

function showAll() {
    var projects, i;
    projects = document.getElementsByClassName("image-link-container");

    for (i = 0; i < projects.length; i++) {
        projects[i].classList.remove("hidden");
    }
}