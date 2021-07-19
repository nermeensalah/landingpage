/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionList = document.getElementsByTagName("section");
let ul = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//when window loaded create li dynamically
window.onload = function () {

    for (var i = 0; i < sectionList.length; i++) {
        var li = document.createElement('li');
        li.setAttribute("class", "li__menu")
        var link = document.createElement('a');
        link.innerText = sectionList[i].id;
        link.href = `#${sectionList[i].id}`;
        link.setAttribute("id", "a_" + link.innerText);
        li.appendChild(link);
        li.setAttribute("id", "li_" + link.innerText);
        ul.appendChild(li);

    }
}

// attach listner to Nav bar section
ul.addEventListener('click', function (e) {
    event.preventDefault();
    // if hyberlink clicked
    if (e.target.id.includes('a_')) {
        scrollToElement(e.target);
    }
    // if li clicked
    else if (e.target.id.includes('li_')) {
        scrollToElement(e.target.children[0]);
    }
});

//scrill smoothly to section
const scrollToElement = (item) => {
    //get section dimention
    let section = document.querySelector(item.hash);
    let height = section.offsetTop - ul.offsetHeight;
    scrollTo({
        top: height,
        behavior: 'smooth'
    });
}




window.addEventListener('scroll', () => {

    for (var i = 0; i < sectionList.length; i++) {
        let link = document.getElementById("a_" + sectionList[i].id);

        if (checkDim(sectionList[i])) {

            sectionList[i].classList.add("your-active-class");
            link.parentElement.classList.add('active_li');
        } else {
            sectionList[i].classList.remove("your-active-class");
            link.parentElement.classList.remove('active_li');
        }

    }
});

const startpoint = 250;
function checkDim(section) {
    window.scrollY;
    if (section.offsetTop <= window.scrollY + startpoint && section.offsetTop + section.offsetHeight - startpoint > window.scrollY)
        return true;
    else
        return false;
}
