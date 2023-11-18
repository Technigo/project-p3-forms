function search() {
  var searchText = document.getElementById("search").value.toLowerCase();
  var recipeTitles = document.getElementsByClassName("recipe");

  for (var i = 0; i < recipeTitles.length; i++) {
    // Get the text content of the current recipe title
    var title = recipeTitles[i].textContent.toLowerCase();

    // Get the parent recipe element
    var recipe = recipeTitles[i].closest(".recipe");

    // Check if the search text is present in the title
    if (title.includes(searchText)) {
      // If the search text is present, show the recipe
      recipe.style.display = "";
    } else {
      // If not present, hide the recipe
      recipe.style.display = "none";
    }
  }
}
