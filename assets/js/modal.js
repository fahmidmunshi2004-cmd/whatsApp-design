//=============== page modal =================//
function toggleModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    if (modal.classList.contains('active')) {
        modal.classList.remove('active');

        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    } else {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}




