// JavaScript functionality for the feedback form

// Add an event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector(".feedback-form");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Retrieve form data
        const lesson = document.querySelector("#lessonSelect").value;
        const rating = parseInt(document.querySelector("#rating").value);
        const positiveImpact = parseInt(document.querySelector("#positiveImpact").value);
        const comments = document.querySelector("#comments").value;

        // Validate the form data (you can add more validation here)
        if (isNaN(rating) || rating < 1 || rating > 5) {
            alert("Please enter a valid rating between 1 and 5.");
            return;
        }

        if (isNaN(positiveImpact) || positiveImpact < 0 || positiveImpact > 100) {
            alert("Please enter a valid positive impact percentage.");
            return;
        }

        // Create a feedback object (you can send this data to your server)
        const feedback = {
            lesson: lesson,
            rating: rating,
            positiveImpact: positiveImpact,
            comments: comments,
        };

        // Clear the form fields
        document.querySelector("#lessonSelect").value = "";
        document.querySelector("#rating").value = "";
        document.querySelector("#positiveImpact").value = "";
        document.querySelector("#comments").value = "";

        // Display a confirmation message (you can modify this part)
        alert("Feedback submitted successfully!");
    });
});
