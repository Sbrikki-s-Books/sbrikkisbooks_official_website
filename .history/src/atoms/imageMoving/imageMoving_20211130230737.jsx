import React from 'react'

const ImageMoving = () => {
    const card = document.querySelector(".card");
const THRESHOLD = 15;

function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  
      const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  }

function resetStyles(e) {
	// TODO
}

card.addEventListener("mousemove", handleHover);
card.addEventListener("mouseleave", resetStyles);
    
    return (
        <article class="card">
            <div class="content">
                <h2>The Best Beaches</h2>
                <p>Check out these top 10 beaches this summer.</p>
            </div>
        </article>
    )
}

export default ImageMoving
