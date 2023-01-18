import "../scss/app.scss";
import {pluck} from "ramda";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  //For plucking array data via ramda function pluck
  const getClassNameArray = pluck("class");

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];

  const classArray = getClassNameArray(arrayToPluck);

  //Adds the fetched classes to each element
  const articles = document.querySelectorAll("article");
  articles.forEach((article, index) => {
    article.classList.add(classArray[index]);
  })

  console.log(classArray);
});
