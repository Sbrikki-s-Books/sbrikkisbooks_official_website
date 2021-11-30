import React from 'react'

const ImageMoving = () => {
    const card = document.querySelector(".card");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

    const THRESHOLD = 15;

    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
        card.style.transform =
            `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
        card.style.transform =
            `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
    if (!motionMatchMedia.matches && card) {
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
    }

    return (
        <img class="card" src="../../assets/gigi.png">
            <div class="content">
                <h2>The Best Beaches</h2>
                <p>Check out these top 10 beaches this summer.</p>
            </div>
        </img>
    )
}

export default ImageMoving
