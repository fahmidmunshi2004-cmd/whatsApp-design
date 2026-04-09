
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



//=============================== uplode video ===============================//
const fileInput = document.querySelector('.br-upload-zone input');
const fileCard = document.querySelector('.br-file-card');
const video = fileCard.querySelector('video');
const fileName = fileCard.querySelector('h6');
const fileSize = fileCard.querySelector('small');
const removeBtn = fileCard.querySelector('.btn-remove');

fileCard.style.display = "none";

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
        alert('Only video allowed!');
        fileInput.value = "";
        return;
    }

    video.src = URL.createObjectURL(file);
    video.load();

    fileName.textContent = file.name;
    fileSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";

    fileCard.style.display = "block";
});

removeBtn.addEventListener('click', function () {
    fileInput.value = "";
    fileCard.style.display = "none";
    video.src = "";
});





//============= thum img ========================//
const input = document.getElementById('uploadFile');
const box = document.querySelector('.upload-box');

input.addEventListener('change', handleFile);

// drag over
box.addEventListener('dragover', e => {
    e.preventDefault();
    box.style.borderColor = '#000';
});

// drag leave
box.addEventListener('dragleave', () => {
    box.style.borderColor = '#ccc';
});

// drop
box.addEventListener('drop', e => {
    e.preventDefault();
    box.style.borderColor = '#ccc';

    const file = e.dataTransfer.files[0];
    handleFile({ target: { files: [file] } });
});

function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Only image allowed!');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (ev) {
        box.innerHTML = `
            <img src="${ev.target.result}">
            <button type="button" class="remove-cover"><i class="fal fa-times"></i></button>
        `;

        const removeBtn = box.querySelector('.remove-cover');

        removeBtn.addEventListener('click', function (event) {
            event.stopPropagation();

            input.value = "";

            box.innerHTML = `
                <i class="fal fa-plus mb-1"></i>
                <span class="gallery-photo-add">Add from gallery</span>
            `;
        });
    };

    reader.readAsDataURL(file);
}