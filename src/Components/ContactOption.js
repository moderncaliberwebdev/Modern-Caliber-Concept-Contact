import React, { useEffect } from 'react'

import '../css/ContactOption.css'

function contactOption(props) {

    
    // const option__button = document.getElementById('right')
    // option__button.addEventListener('click', (e) => {
    //     props.animateBox()
    // })
    useEffect(() => {
        const option = document.getElementById(props.position)
        option.addEventListener('click', () => {
            if(document.getElementById(props.position).classList.contains('left')) {
                props.animateBox(props.position)
            }
            if(document.getElementById(props.position).classList.contains('middle')) {
                props.animateBox(props.position)
            }
            if(document.getElementById(props.position).classList.contains('right')) {
                props.animateBox(props.position)
            }
        })
    })
    return (
        <div className={`contactOption ${props.position}`} id={props.position} >
            <img src={props.imgSrc} alt="location image" />
            <p>{props.optionContent}</p>
        </div>
    )
}

export default contactOption
