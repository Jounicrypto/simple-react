import React from 'react'


function Header() {
    
    const client = "Programmer";
    const title = {
        designer : "Design is my life!",
        programmer : "Programming is my life!"
    }

    const info = {
        name: "Adnan",
        nick: "Jouni"
    }
    
    return (
        <div className='navbar rounded'>
            Hello! {`${info.name} ${info.nick}`}
            <h1>{client === "Designer" ? title.designer : title.programmer}</h1>
        </div>  
)
}

export default Header
