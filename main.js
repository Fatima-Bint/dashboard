
  
  var button = document.getElementById("redirect");

  document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener("click", function() {
        window.location.href = "./dashboard.html";
    });
  });
  


$(document).ready(function() {
    // Initial mode setting
    let isDarkMode = false;
  
    // Toggle mode function
    function toggleMode() {
      $('body').toggleClass('dark-mode', isDarkMode);
      isDarkMode = !isDarkMode;
    }
  
    // Bind the click event to the theme toggler
    $('.theme-toggler').on('click', toggleMode);
  });