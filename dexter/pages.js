const cards = document.querySelectorAll('.profile-card');
const cardsPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    cards.forEach((card, index) => {
        card.style.display = (index >= start && index < end) ? 'block' : 'none';
    });
    document.getElementById('pageIndicator').textContent = `${page}/${totalPages}`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);
