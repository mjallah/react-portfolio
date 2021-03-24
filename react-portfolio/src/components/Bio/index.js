import React from 'react'
import avatar from '../../assets/Avatar.jpg'

function Bio() {
    return (
        <div className="bio">
            <img id="avatar" src={avatar} alt="Malik Jallah" />
            <h2>Malik Jallah</h2>
            <h2>malikjallah@gmail.com</h2>
            <h2>952-688-7694</h2>
            <p>A little about me: I am from New Prague, MN. Currently living in Minnetonka, MN. I am a student in the UofM Coding Bootcamp. Alumnus of The University of St Thomas with a BS in Financial Management.</p>
        </div>
    )
}

export default Bio
