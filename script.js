// question 1


const cat = {
    complain: function() {
        console.log(Meow)
    }
}


// question 2


const heading = document.querySelector("h3");
console.dir(heading);


// or like this from what i got from the console on MA1 page


document.querySelector (".token");
console.dir(heading);


// question 3


const heading = document.querySelector("h3")
heading.style.fontSize = "2em";


// question 4


heading.classList.add("subheading");


// question 5


covument.querySelectorAll("p");
console.dir(paragraphs);


// question 6


const resultsContainer = document.querySelector(".results").innerHTML = "<p>New paragraph</p>"


// question 7


function cat(catArray) {
   
     for (let i = 0; i < catArray.length; i++) {
        console.log(cats[0].name);
    }

    passIn(cats);

    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
}


// question 8


function cat(catArray) {
    let catHTML = "";
   
    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h1 class="cats">${catArray[i].name}</h1>`;
    }
    console.log(catHTML)
}


// question 9


cat(cats);

//need help on theese two last ones. refrences by linkedIn links or something, 

// question 10

