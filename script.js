 
        function updateTextInputs(val) {
        var rangeValue = parseInt(val);
        var textInput1 = document.getElementById('textInput1');
        var textInput2 = document.getElementById('textInput2');

        // Update first text input value (min)
        textInput1.value = rangeValue;
        textInput1.setAttribute('min', rangeValue);

        // Update second text input value (max)
        textInput2.value = 100 - rangeValue;
        textInput2.setAttribute('max', 100 - rangeValue);
    }
   
    document.addEventListener("DOMContentLoaded", function() {
        // Get reference to the link
        var agodaLink = document.querySelector("a[href='#maincontaner']");

        // Add click event listener to the link
        agodaLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            // Get reference to the maincontaner element
            var maincontaner = document.getElementById("maincontaner");
            
            // Remove the "display: none;" style attribute
            maincontaner.style.display = "";
        });
    });
 


    
 