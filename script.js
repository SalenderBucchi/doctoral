// Function to handle the fade-in/out of the interactive depth modals
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        setTimeout(() => { modal.style.display = 'none'; }, 300); // Wait for CSS fade out
    } else {
        modal.style.display = 'flex';
        // Small delay to trigger the CSS transition
        setTimeout(() => { modal.classList.add('show'); }, 10);
    }
}

// Close modals when clicking the background (outside the content box)
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
    });
}

// Fake live-search engine functionality for the Search window
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            // Displays fake search results updating in real-time as you type
            searchResults.innerHTML = `
                <div style="text-align: left; margin-top: 20px;">
                    <p style="padding: 15px 0; border-bottom: 1px solid #eee; cursor: pointer; color: #555;">
                        <i class="fas fa-search" style="margin-right: 10px; color: #ccc;"></i> 
                        <strong>${query}</strong> in Cinematic History
                    </p>
                    <p style="padding: 15px 0; border-bottom: 1px solid #eee; cursor: pointer; color: #555;">
                        <i class="fas fa-search" style="margin-right: 10px; color: #ccc;"></i> 
                        Explore <strong>${query}</strong> Edition Models
                    </p>
                </div>
            `;
        } else {
            searchResults.innerHTML = '';
        }
    });
}
