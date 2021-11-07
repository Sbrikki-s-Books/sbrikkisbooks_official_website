import React from 'react'

function BookLoading(props) {
    return (
        <div>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_t8f3t4.json"  background="transparent"  speed="1"  style="width: ${props.width}; height: ${props.heigth};"  loop controls autoplay></lottie-player>
        </div>
    )
}

export default BookLoading
