//Declare empty array for library 

let myLibrary = []; 
//object constructors
function Book(title,author,pages,read){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read; 

    // this.info = function(){
    //     return (title + author + ", " + pages + read);
    // }
} 

//function to adding a new book to the array 
function addBookToLibrary(title,author,pages,read){
   let book = new Book(title,author,pages,read);
   myLibrary.push(book);
   displayBooksOnPage();
}
   
//const theHobbit = new Book("The Hobbit", "by J.R.R" , 295 , "not read yet");
//function to display library array to cards
function displayBooksOnPage(){
    const books = document.querySelector(".books");

    const removeDivs =document.querySelectorAll(".card");
    //remove all the previously displayed cards before I loop array over again
    for(let i=0;i<removeDivs.length;i++){
        removeDivs[i].remove();
    }


//loop over the library array and display to the cards
let index=0;
 myLibrary.forEach(myLibrarys => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
  //create a remove book button and add a class attribute for each array card
   const removeBookButton = document.createElement("button");
   removeBookButton.classList.add("remove-book-button");
   removeBookButton.textContent = "Remove From Library"

//link the data attribute of the remove btn to the array card

   removeBookButton.dataset.linkedArray = index;
   
   card.append(removeBookButton);


   removeBookButton.addEventListener("click",removeBookFromLibrary);

   function removeBookFromLibrary(){
    let retrieveBookToRemove = removeBookButton.dataset.linkedArray;

    myLibrary.splice(parseInt(retrieveBookToRemove),1);

    card.remove();
    displayBooksOnPage();
   }

   const readStatusButton = document.createElement("button");
   readStatusButton.classList.add("read-status-button");
   readStatusButton.textContent = "Toggle Read Status";


   readStatusButton.dataset.linkedArray = index;
   card.appendChild(readStatusButton);

   readStatusButton.addEventListener("click", toggleReadStatus);

   function toggleReadStatus(){
    let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
    Book.prototype = Object.create(Book.prototype);
    const toggleBook = new Book(); 


    if((myLibrary[parseInt(retrieveBookToToggle)].Read) == "Yes"){
        toggleBook.Read = "No";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
    } 

    else if((myLibrary[parseInt(retrieveBookToToggle)].Read) == "No"){
        toggleBook.Read = "Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
    }

    displayBooksOnPage();
   }

    for(let key in myLibrarys){
        //console.log(`${key} : ${myLibrarys[key]}`);
        const para = document.createElement("p");
        para.textContent = `${key} : ${myLibrarys[key]}`;
        card.appendChild(para);
    }

    index++;
 })

}



// addBookToLibrary("The Hobbit", "by J.R.R Tolkien" , "295 pages" , "not read yet");
// addBookToLibrary("The Seven Habits of highly effective people ", "by Steven Covey" , "200 pages" , "not read yet");
// addBookToLibrary("The Hobbit", "by J.R.R Tolkien" , "295 pages" , "not read yet");
// addBookToLibrary("The Seven Habits of highly effective people ", "by Steven Covey" , "200 pages" , "not read yet");
// addBookToLibrary("The Hobbit", "by J.R.R Tolkien" , "295 pages" , "not read yet");
// addBookToLibrary("The Seven Habits of highly effective people ", "by Steven Covey" , "200 pages" , "not read yet");


// console.log("End of array Contents");
// displayBooksOnPage();
//start event listener / display a form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click",displayTheForm);


function displayTheForm(){
 document.getElementById("add-book-form").style.display = "";
}
// start event listener / add new input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click",intakeFormData);

//Transform form data to variables for intake

function intakeFormData(){
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").value;
    let Read = document.getElementById("Read").value;
//break out if form is incomplete or not valid
    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")){
        return;
    }
    //call function to input the book data to the array
    addBookToLibrary(Title,Author,Pages,Read);


    //reset the form after successfull submission
    document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm(){
    document.getElementById("add-book").reset();
}
