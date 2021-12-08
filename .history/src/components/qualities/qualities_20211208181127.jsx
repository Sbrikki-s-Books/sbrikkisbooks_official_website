import React from 'react'

function Qualities({quality}) {
    return (
        <div>
            {
                quality.map((elem, i) => {
                    console.log(elem)
                    return (
                        <>

                        </>
                    )
                })
            }
        </div>
    )
}

export default Qualities
