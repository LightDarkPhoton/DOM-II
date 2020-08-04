// Your code goes here


let contentPickSection = document.querySelector(".content-pick");
let destinationOne = contentPickSection.querySelector(".destination");
let buttonOne = destinationOne.querySelector(".btn");

// Event One
buttonOne.addEventListener("click", function() {
    alert("boo");
})

// Event Two
let destinationTwo = destinationOne.nextElementSibling;
let buttonTwo = destinationTwo.querySelector(".btn");
buttonTwo.addEventListener("mouseenter", function() {
    alert("too");
})

// Event Three
let destinationThree = destinationTwo.nextElementSibling;
let buttonThree = destinationThree.querySelector(".btn");
buttonThree.addEventListener("dblclick", function () {
    buttonThree.style.backgroundColor = "green";
})

// Event Four
let contentDestination = document.querySelector(".content-destination");
let headerContentDestination = contentDestination.querySelector("h2");

document.addEventListener("wheel", function() {
    headerContentDestination.style.color = "blue";
})

// Event Five
let paragraphContentDestination = contentDestination.querySelector("p");
document.addEventListener("drag", function () {
    paragraphContentDestination.style.color = "red";
})

// Event Six contextmenu
let contentSection = document.querySelector(".content-section");
let contentSectionTextContent = contentSection.querySelector(".text-content");
let contentSectionHeader = contentSectionTextContent.querySelector("h2");
document.addEventListener("contextmenu", function () {
    contentSectionHeader.style.color = "orange";
})

// Event Seven copy
let contentSectionParagraph = document.querySelector(".content-section .text-content p");
document.addEventListener("copy", function() {
    contentSectionParagraph.style.color = "blue";
})

// Event Eight: cut
contentSectionParagraphTwo = contentSectionParagraph.nextElementSibling;
document.addEventListener("cut", function() {
    contentSectionParagraphTwo.style.color = "purple";
})

// Event Nine: paste
let inverseContent = document.querySelector(".content-section.inverse-content");
let inverseContentTextHeader = inverseContent.querySelector(".text-content h2");

document.addEventListener("paste", function() {
    inverseContentTextHeader.style.color = "brown";
})

// Event Ten: keydown
let inverseContentParagraph = inverseContent.querySelector(".text-content p");

document.addEventListener("keydown", function() {
    inverseContentParagraph.style.color = "red";
})
