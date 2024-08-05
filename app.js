



 // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {



  // Get the form element for creating memes
  const memeForm = document.getElementById("meme-form");
  // Get the gallery element where memes will be displayed
  const listGallary = document.querySelector(".gallary");
  // Get the input element for the top text of the meme
  const topText = document.getElementById("top-text");
  // Get the input element for the image URL of the meme
  const urlInput = document.getElementById("image-url");
  // Get the input element for the bottom text of the meme
  const bottomText = document.getElementById("bottom-text");



  memeForm.addEventListener("submit", function (event) {

    // Prevent form from submitting normally
    event.preventDefault();

    // Check if the image URL is not empty
    
    if (urlInput.value.trim() !== ""){

        // Create a new div element to hold the meme

        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        

        // Create and set the img element
        const img = document.createElement("img");
        img.src = urlInput.value;
        memeDiv.appendChild(img);
        img.classList.add("img");
        console.log(img);


        // Create and set the top text div
        const topTextDiv = document.createElement("div");
        topTextDiv.classList.add("text", "top");
        topTextDiv.innerHTML = topText.value;
        console.log(topTextDiv);
        memeDiv.appendChild(topTextDiv);
        console.log(memeDiv);


        // Create and set the bottom text div
        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("text", "bottom");
        bottomTextDiv.innerHTML = bottomText.value;
        memeDiv.appendChild(bottomTextDiv);


        // Create and set the remove button
        const removeDiv = document.createElement("div");

        removeDiv.classList.add("red-cross");
        removeDiv.innerText = "X";
        removeDiv.style.color = "gray";

        // Remove meme when 'X' is clicked
        removeDiv.addEventListener("click", function () {
        memeDiv.remove();
        });

    

        memeDiv.appendChild(removeDiv);
        // Add meme to the gallery
        listGallary.appendChild(memeDiv);
   }
    // Reset the form inputs
    memeForm.reset();

  });
});



