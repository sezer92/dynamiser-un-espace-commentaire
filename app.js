
    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const messageInput = document.querySelector("#message");
    const errorMessage = document.querySelector("#error-message");
    const commentsList = document.querySelector("#comment-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Vérifie si les champs sont remplis
        if (!firstNameInput.value || !lastNameInput.value || !messageInput.value) {
            errorMessage.style.display = "block"; // Affiche le message d'erreur
            console.log("Erreur : Un ou plusieurs champs sont vides."); // Log d'erreur pour le débogage
        } else {
            errorMessage.style.display = "none"; // Cache le message d'erreur 

            // Crée un nouveau commentaire 
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

            const commentContentDiv = document.createElement("div");
            commentContentDiv.classList.add("flex-1", "py-10", "border-t", "border-gray-200");

            const commentAuthor = document.createElement("h3");
            commentAuthor.classList.add("font-medium", "text-gray-900");
            commentAuthor.textContent = firstNameInput.value + " " + lastNameInput.value;

            const commentBodyDiv = document.createElement("div");
            commentBodyDiv.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

            const commentText = document.createElement("p");
            commentText.textContent = messageInput.value; 

            // Assemble le nouveau commentaire 
            commentBodyDiv.appendChild(commentText); 
            commentContentDiv.appendChild(commentAuthor);
            commentContentDiv.appendChild(commentBodyDiv); 
            commentDiv.appendChild(commentContentDiv); 
            commentsList.appendChild(commentDiv);

            // Réinitialise les champs du formulaire
            firstNameInput.value = "";
            lastNameInput.value = "";
            messageInput.value = "";
        }
    });
