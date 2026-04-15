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
document.querySelectorAll('.dis_title, .dis_title_2').forEach(el => {

    const fullText = el.textContent.trim();

    const limit = el.classList.contains('dis_title_2') ? 120 : 30;

    if (fullText.length <= limit) return;

    const shortText = fullText.substring(0, limit) + '...';

    let isExpanded = false;

    el.innerHTML = `
        <span class="text-content d-flex flex-colamun">
            <span class="text">${shortText}</span>

            </span>
        <div class="btn-group">
            <button type="button" class="show-more toggle-btn">Show more</button>
            <button type="button" class="show-less toggle-btn" style="display:none;">Show less</button>
        </div>
    `;

    const textWrapper = el.querySelector('.text');
    const showMoreBtn = el.querySelector('.show-more');
    const showLessBtn = el.querySelector('.show-less');

    function setText(text) {
        textWrapper.style.opacity = '0';

        setTimeout(() => {
            textWrapper.textContent = text;
            textWrapper.style.opacity = '1';
        }, 150);
    }

    showMoreBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        setText(fullText);
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline-block";

        isExpanded = true;
    });

    showLessBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        setText(shortText);
        showMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "none";

        isExpanded = false;
    });

    document.addEventListener('click', function (e) {
        if (!isExpanded) return;
        if (el.contains(e.target)) return;

        setText(shortText);
        showMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "none";

        isExpanded = false;
    });

});


// ================= rells like & save ================= //
document.addEventListener('click', function (e) {

    const btn = e.target.closest('.like-btn, .save-btn');
    if (!btn) return;

    const icon = btn.querySelector('i');
    const countEl = btn.querySelector('span');

    let count = parseInt(countEl?.textContent.trim() || "0");
    let active = btn.classList.contains('active');

    const isLike = btn.classList.contains('like-btn');

    active = !active;
    btn.classList.toggle('active', active);

    count = active ? count + 1 : Math.max(0, count - 1);
    if (countEl) countEl.textContent = count;

    if (isLike) {
        icon?.classList.toggle('fas', active);
        icon?.classList.toggle('fal', !active);
        btn.classList.toggle('liked', active);
    } else {
        icon?.classList.toggle('fas', active);
        icon?.classList.toggle('far', !active);
        btn.classList.toggle('saved', active);
    }

});


//================= rells__comments_reply ===================//
document.addEventListener('click', function (e) {

    // reply open
    const replyBtn = e.target.closest('.reply-btn');
    if (replyBtn) {
        e.preventDefault();

        const box = replyBtn.closest('.rells__comments_reply');
        const textareaBox = box.querySelector('.rell_reply_textarea');
        const textarea = box.querySelector('textarea');

        textareaBox.classList.toggle('show');
        textarea.focus();
    }

    // send reply
    const sendBtn = e.target.closest('.send-btn');
    if (sendBtn) {

        const box = sendBtn.closest('.rells__comments_reply');
        const textarea = box.querySelector('textarea');
        const dropdown = box.querySelector('.dropdown__menu');

        const text = textarea.value.trim();
        if (!text) return;

        const html = `
            <div class="rells__comment__main__content">
                <div class="author d-flex align-items-start gap-2">
                    <a href="#">
                        <img src="assets/img/abter/header-abtar.png" alt="">
                    </a>
                    <div class="author__comment">
                        <a href="#" class="author_name">You</a>
                        <div class="title mt-6">
                            <h5 class="dis_title dis_title_3">
                                <span class="text">${text}</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        `;

        dropdown?.insertAdjacentHTML('beforeend', html);

        textarea.value = "";
        box.querySelector('.rell_reply_textarea').classList.remove('show');
        dropdown?.classList.add('show');

        initTruncate();
    }

});


//================= main comments ===================//
document.addEventListener("DOMContentLoaded", function () {

    window.initTruncate = function (parent = document) {
        parent.querySelectorAll('.dis_title').forEach(el => {

            if (el.dataset.done) return;
            el.dataset.done = "true";

            const fullText = el.textContent.trim();
            const limit = 120;

            if (fullText.length <= limit) return;

            const shortText = fullText.substring(0, limit) + '...';
            let isOpen = false;

            el.innerHTML = `
                <span class="text">${shortText}</span>
                <button type="button" class="toggle-btn">Show more</button>
            `;

            const text = el.querySelector('.text');
            const btn = el.querySelector('.toggle-btn');

            btn.addEventListener('click', function (e) {
                e.stopPropagation();

                text.textContent = isOpen ? shortText : fullText;
                btn.textContent = isOpen ? "Show more" : "Show less";

                isOpen = !isOpen;
            });
        });
    }

    initTruncate();


    const modalInput = document.querySelector('.rell_main_comment textarea');
    const sendBtn = document.querySelector('.comment-send-btn');
    const commentArea = document.querySelector('.rells_comment_area');

    if (!modalInput || !sendBtn || !commentArea) return;

    sendBtn.addEventListener('click', function () {

        const text = modalInput.value.trim();
        if (!text) return;

        const html = `
            <div class="rells__comment__main__content">
                <div class="author d-flex align-items-start gap-2">
                    <a href="#">
                        <img src="assets/img/abter/header-abtar.png" alt="">
                    </a>
                    <div class="author__comment">
                        <a href="#" class="author_name">You</a>
                        <div class="title mt-6">
                            <h5 class="dis_title dis_title_3">
                                <span class="text">${text}</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="author__comment_info">
                <span>1h</span>
                <div class="rells__like">
                    <a href="#" class="like-btn">
                        <i>Like</i>
                        <span class="like-count"></span>
                    </a>
                </div>
                <div class="rells__comments_reply p-relative">
                    <buton class="like-btn reply-btn">
                        Reply
                    </buton>
                    <div id="comment__reply__dropdown" class="dropdown__menu active">
                    </div>

                    <div class="rell_reply_textarea p-relative">

                        <textarea name="send__message" placeholder="Type a message"></textarea>

                        <button type="button" class="send-btn">
                            <i class="fal fa-paper-plane"></i>
                        </button>

                    </div>
                </div>
            </div>
        `;

        commentArea.insertAdjacentHTML('beforeend', html);

        modalInput.value = "";


        initTruncate();
    });

});






//================= reels slider ===================//
var swiper = new Swiper(".rellsSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,

    navigation: {
        nextEl: ".reels-button-next",
        prevEl: ".reels-button-prev",
    }
});

