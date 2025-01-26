document.addEventListener('DOMContentLoaded', () => {
    // Select all cards with links
    const cardsWithLinks = document.querySelectorAll('.card-link-card');
  
    // Target the container on the right
    const rightCardContainer = document.getElementById('right-card-container');
  
    // Map card indices to their respective video sources
    const videoSources = {
      0: "video1.mp4", // Card 1
      1: "video2.mp4", // Card 2
      2: "video3.mp4", // Card 3
      // Add more mappings as needed
    };
  
    // Add event listeners to each card
    cardsWithLinks.forEach((card, index) => {
      card.addEventListener('click', () => {
        // Replace content of the right card dynamically
        const videoSrc = videoSources[index];
        if (videoSrc) {
          rightCardContainer.innerHTML = `
            <div class="card" style="width: 100%; max-width: 730px; overflow: hidden;">
              <div class="card-body">
                <video src="${videoSrc}" autoplay controls style="width: 100%; height: auto; display: block;"></video>
              </div>
            </div>
          `;
        } else {
          // Handle cases where no video source is found for the card
          rightCardContainer.innerHTML = `
            <div class="card" style="width: 100%; max-width: 730px; overflow: hidden;">
              <div class="card-body">
                <p>No video available for this card.</p>
              </div>
            </div>
          `;
        }
      });
    });
  });
  