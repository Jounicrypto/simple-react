
import React from 'react'

function SocialItems(props) {
  return (
    <div>
        <ul className="list-group">
            <li className='list-group-item'>
                <img src="{props.p.img}" alt={`Icon of ${props.p.media}`}/>
                <input type="checkbox" id="{props.p.id}"/>
                <label htmlFor={props.p.id}>{props.p.media}</label>
            </li>
        </ul>
    </div>
  )
}

export default SocialItems
