/* this is a commentary js*/

// string //

/* AUSSI POSSIBLE MAIS PAS NECESSAIRE ICI
const myVar2 = "ma variable";
var myVar = "ma varibale";
*/

/*
let myVar = "ma variable"
myVar = "variable changée";
const myVar2 = "ma variable 2";

console.log(myVar);
*/

// boolean

/*
let isTrue = true;
let isFalse = false;

console.log(isTrue);
*/

// chiffres et opérateurs - balise "typeof" permet d'avoir la nature d'une donnée

/*
let chiffre1 = 4;
let chiffre2 = 3;

console.log(typeof chiffre1, typeof chiffre2);
*/

/* template string, littéraux de gabarits et concat
Littéraux de gab = `mettre entre apppostrophes les valeurs` 
différents types de valeurs sont possibles, var sont mises entre ${}
*/

/*
let test = 'test ' + myVar;
let test2 = `test ${myVar}`;
console.log(test2)
*/

// conditions
// = définit une valeur, == vérifie que c'est le mm nombre, === vérifie same number et type (comme typeof)
// != vérifie la différence des valeurs
// apprendre la balise "switch" peut être intéressant
/*
if (chiffre1 < 3) {
    console.log('condition valide')
} else if (chiffre1 <= 4) {
    console.log('ok ok')
}

else {
    console.log('condition invalide')
}
*/

// tableaux
/* Les nombres donnés aux items par le navigateur commencent à 0.
Ainsi, pour cibler l'item 1 ici, il faut mettre 0 entre [] car c'est le premier
*/

/*
let array = ['item 1', 'item 2', 'item 3', 'item 4']
console.log(array.length);
console.log(array[0]);
*/

// objets

/*
let obj = {
    title: "Mon titre",
    description: "Ma description"
}

console.log(obj.title, obj.description);
*/

//boucles, while, for, foreach

/*
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach(item => {
    console.log(item)
})
*/

//functions

/*
function myFunction(item, item2) {
    console.log(item);
}
*/

const myFunction = (item, item2) => {
    //    console.log(item, item2);
}

myFunction('toto', 5);
myFunction('tota', 7);

const calcul = (nb1, nb2) => {
    return nb1 + nb2
}

let result = calcul(4, 5);

//console.log(result)

// interagir avec le dom // methode, propriété, evenements

//console.log(document.body);

// selectors d'une zone du document

let header = document.querySelector('.header')

//console.log(header)
let grids = document.querySelectorAll('.grid')
//console.log(grids)

/*
grids.forEach(grid => {
    grid.classList.add('titi');
});

// evenements les + courants (capte evenments sur le site et permet d'y réagir)


document.addEventListener("DOMContentLoaded", () => {
//    console.log("DOM entièrement chargé et analysé")
});

header.addEventListener('click', (e) => {
//    console.log(e.clientX);
});

header.addEventListener('mouseenter', (e) => {
    console.log("mouse entered");
});
*/

// insertion dom et navigation ds le dom

/*
let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
header.parentNode.append(div);
console.log(header.nextElementSibling);
*/

//function du theme

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    })
    links.forEach(link =>
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        })
    );    
}
menuMobile();

/* portfolio filter*/

function tabsFilter() {
    const tabs = document.querySelectorAll('.portfolio-filter a ');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach (elem => {
            elem.classList.remove('active');
        });
    }

    const showProjets = (elem) => {
        projets.forEach(projet => {
            let filter = projet.getAttribute('data-category');
            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }

            /*
            if (filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }
            */
            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter);
            resetActiveLinks(elem);
            elem.classList.add('active');
        })
    });
    }
tabsFilter();

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');
    
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        })
    }


    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show')
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModals();
        });
    });
}

showProjectDetails();

// effets

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar')

    sections.forEach((section, index) => {
        if (index === 0) return
        section.style.opacity = "0";
        section.style.transform = "translateY(60px)";
        section.style.transition = "all 1.6s";
    });

    skills.forEach(skill => {
        skill.style.width = "0";
        skill.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target
                elem.style.opacity = "1";
                elem.style.transform = "translateY(0px)";
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target
                elem.style.width = elem.dataset.width + "%";
                elem.style.transition = ('all 1s')
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();

// training 2

const scrollAddHeader = () => {
    const theHeader = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    let headerDiv = document.createElement('div');
    headerDiv.innerHTML = '<span>number</span>'

    //console.log(headerDiv);

    let headerObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                theHeader.append(headerDiv);
            }
        })
    })

    sections.forEach(section => {
        headerObserver.observe(section);
    })

    let index = sections.index

    for (let i = 0; i < sections.length; i++) {
    console.log(index[i])
    }

}
//scrollAddHeader();

