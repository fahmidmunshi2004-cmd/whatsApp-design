document.addEventListener("DOMContentLoaded", function () {

    const boxes = document.querySelectorAll('.video');

    if (!boxes.length) return;

    boxes.forEach(function (box) {

        const video = box.querySelector('video');
        const btn = box.querySelector('.play_btn');

        if (!video || !btn) return; // safety check

        const icon = btn.querySelector('i');

        let hideTimer;

        function pauseAllVideos(currentVideo) {
            document.querySelectorAll('.short-video').forEach(v => {
                if (v !== currentVideo) {
                    v.pause();

                    const parent = v.closest('.video');
                    if (!parent) return;

                    const b = parent.querySelector('.play_btn');
                    const i = b?.querySelector('i');

                    if (b && i) {
                        b.classList.remove('active');
                        i.classList.remove('fa-pause');
                        i.classList.add('fa-play');
                        b.classList.remove('hide');
                    }
                }
            });
        }

        function showButton() {
            btn.classList.remove('hide');
        }

        function hideButton() {
            btn.classList.add('hide');
        }

        function setPlay() {
            btn.classList.remove('active');
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }

        function setPause() {
            btn.classList.add('active');
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }

        function toggleVideo() {
            if (video.paused) {
                pauseAllVideos(video);

                video.play();
                setPause();
                showButton();

                clearTimeout(hideTimer);
                hideTimer = setTimeout(hideButton, 1000);
            } else {
                video.pause();
                setPlay();
                showButton();
            }
        }

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleVideo();
        });

        video.addEventListener('click', function () {
            toggleVideo();
        });

        video.addEventListener('play', function () {
            setPause();
            showButton();

            clearTimeout(hideTimer);
            hideTimer = setTimeout(hideButton, 1000);
        });

        video.addEventListener('pause', function () {
            setPlay();
            showButton();
        });

        video.addEventListener('ended', function () {
            setPlay();
            showButton();
        });

    });

});


//======================= tab ============================//
document.querySelectorAll('.tab-wrapper').forEach(wrapper => {

    const tabs = wrapper.querySelectorAll('.tab-btn button');
    const contents = wrapper.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            // active button
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const target = tab.dataset.tab;

            // hide all
            contents.forEach(c => {
                c.classList.add('d-none');
                c.classList.remove('d-block');
            });

            // show selected
            const activeContent = wrapper.querySelector('#' + target);
            activeContent.classList.remove('d-none');
            activeContent.classList.add('d-block');
        });
    });

});





//=============================== uplode video ===============================//
const fileInput = document.querySelector('.br-upload-zone input');
const fileCard = document.querySelector('.br-file-card');
if (!fileInput || !fileCard) {
} else {

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

}





//================ thum img ========================//
const input = document.getElementById('uploadFile');
const box = document.querySelector('.upload-box');

if (!input || !box) {
    // this page does not have upload UI
} else {

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

}



//================ video  progress ========================//
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.video').forEach(container => {

        const video = container.querySelector('video');
        const progressContainer = container.querySelector('.video-progress');
        const progressBar = container.querySelector('.video-progress-bar');

        if (!video || !progressContainer || !progressBar) return;

        let isDragging = false;

        // ================= SMOOTH UPDATE ================= //
        function updateProgress() {
            if (!video.duration) return;

            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.width = percent + '%';

            if (!video.paused && !video.ended) {
                requestAnimationFrame(updateProgress);
            }
        }

        video.addEventListener('play', () => {
            requestAnimationFrame(updateProgress);
        });

        // ================= CLICK SEEK ================= //
        progressContainer.addEventListener('click', function (e) {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            const percent = clickX / rect.width;
            video.currentTime = percent * video.duration;
        });

        // ================= DRAG START ================= //
        progressContainer.addEventListener('mousedown', function () {
            isDragging = true;
            progressContainer.classList.add('dragging');
        });

        // ================= DRAG MOVE ================= //
        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;

            const rect = progressContainer.getBoundingClientRect();
            let x = e.clientX - rect.left;

            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            const percent = x / rect.width;

            progressBar.style.width = percent * 100 + '%';
            video.currentTime = percent * video.duration;
        });

        // ================= DRAG END ================= //
        document.addEventListener('mouseup', function () {
            if (isDragging) {
                isDragging = false;
                progressContainer.classList.remove('dragging');
            }
        });

    });

});





// ================= time update ================= //
document.querySelectorAll('.video').forEach(container => {
    const video = container.querySelector('video');
    const timeBox = container.querySelector('.video-time span');
    if (!video || !timeBox) return;
    let timeText = null;
    function getTimeTextNode() {
        for (let node of timeBox.childNodes) {
            if (node.nodeType === 3) { // text node
                timeText = node;
                break;
            }
        }
    }

    getTimeTextNode();

    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    // ================= REAL DURATION SHOW ================= //
    video.addEventListener('loadedmetadata', function () {
        if (!video.duration) return;

        const duration = formatTime(video.duration);

        // set initial duration (right side / total time)
        if (timeText) {
            timeText.textContent = duration;
        } else {
            timeBox.insertAdjacentText('beforeend', duration);
        }
    });

    // ================= COUNTDOWN ================= //
    video.addEventListener('timeupdate', function () {
        if (!video.duration) return;

        const remaining = video.duration - video.currentTime;
        const time = formatTime(remaining);

        if (timeText) {
            timeText.textContent = time;
        }
    });

    video.addEventListener('play', () => {
        timeBox.classList.add('playing');
    });

    video.addEventListener('pause', () => {
        timeBox.classList.remove('playing');
    });

    video.addEventListener('ended', () => {
        timeBox.classList.remove('playing');
    });

});


// ================= text truncate ================= //
document.querySelectorAll('.dis_title').forEach(el => {

    const fullText = el.textContent.trim();
    const limit = 30;

    if (fullText.length <= limit) return;

    let shortText = fullText.substring(0, limit) + '...';
    let isExpanded = false;

    el.innerHTML = `
        <span class="text-content">
            <span class="text">${shortText}</span>
            <button class="toggle-btn">Show more</button>
        </span>
    `;

    const textWrapper = el.querySelector('.text');
    const btn = el.querySelector('.toggle-btn');

    // smooth base styles //
    textWrapper.style.transition = "opacity 0.25s ease";
    textWrapper.style.display = "inline";

    function animateChange(newText, btnText) {
        // fade out //
        textWrapper.style.opacity = '0';

        setTimeout(() => {
            textWrapper.textContent = newText;
            textWrapper.style.opacity = '1';
        }, 150);

        btn.textContent = btnText;
    }

    function expand() {
        animateChange(fullText, 'Show less');
        isExpanded = true;
    }

    function collapse() {
        animateChange(shortText, 'Show more');
        isExpanded = false;
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        isExpanded ? collapse() : expand();
    });

    // ================= GLOBAL CLICK ================= //
    document.addEventListener('click', function (e) {
        if (!isExpanded) return;
        if (el.contains(e.target)) return;
        collapse();
    });

    // ================= VIDEO CLICK ================= //
    document.querySelectorAll('.video video').forEach(video => {
        video.addEventListener('click', function () {
            if (isExpanded) collapse();
        });
    });

});
