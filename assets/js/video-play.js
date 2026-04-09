document.querySelectorAll('.video').forEach(function (box) {
    const video = box.querySelector('video');
    const btn = box.querySelector('.play_btn');
    const icon = btn.querySelector('i');

    let hideTimer;

    function pauseAllVideos(currentVideo) {
        document.querySelectorAll('.short-video').forEach(v => {
            if (v !== currentVideo) {
                v.pause();

                const parent = v.closest('.video');
                const b = parent.querySelector('.play_btn');
                const i = b.querySelector('i');

                b.classList.remove('active');
                i.classList.remove('fa-pause');
                i.classList.add('fa-play');
                b.classList.remove('hide');
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
            pauseAllVideos(video); // ✅ pause others

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