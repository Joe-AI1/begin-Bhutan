document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the Home page
    if (document.body.id === 'home-page') {
        // Fetch the JSON data for the home page sections
        fetch('data/sections.json')
            .then(response => response.json())
            .then(data => {
                const sectionsContainer = document.getElementById('sections-container');

                // Loop through each section in the JSON data
                data.sections.forEach(section => {
                    // Create an anchor tag to wrap the section
                    const sectionLink = document.createElement('a');
                    sectionLink.href = section.link;

                    // Create a div for the section
                    const sectionDiv = document.createElement('div');
                    sectionDiv.classList.add('section');
                    sectionDiv.style.backgroundImage = `url(${section.image})`;

                    console.log(section.image); // Log the image path to the console

                    // Add the section title
                    const sectionTitle = document.createElement('h2');
                    sectionTitle.textContent = section.title;

                    // Append the title to the section div
                    sectionDiv.appendChild(sectionTitle);

                    // Append the section div to the link
                    sectionLink.appendChild(sectionDiv);

                    // Append the link to the container
                    sectionsContainer.appendChild(sectionLink);
                });
            })
            .catch(error => {
                console.error('Error loading JSON data:', error);
            });
    }
});
