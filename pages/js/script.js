// JavaScript to load JSON data and display sections

// Fetch the JSON data from the file
fetch('data.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        const sectionsContainer = document.getElementById('sections-container');

        // Loop through the sections from JSON data
        data.sections.forEach(section => {
            // Create a new div for each section
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('section');

            // Add the title, description, and image to the section div
            sectionDiv.innerHTML = `
                <h2>${section.title}</h2>
                <p>${section.description}</p>
                <img src="${section.image}" alt="${section.title}">
                <a href="${section.link}">Learn More</a>
            `;

            // Append the section div to the container
            sectionsContainer.appendChild(sectionDiv);
        });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
    });
