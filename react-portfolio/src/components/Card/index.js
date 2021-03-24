/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import MarketingSite from '../../assets/Marketing Site.png'
import Workday from '../../assets/Workday.png'
import MovieChallenge from '../../assets/MovieChallenge.png'

function Card() {
    return (
        <>
            <div className="card">
                <img className="project-img" src={MarketingSite} alt="Marketing Site" />
                <div className="card-info">
                    <a href="https://mjallah.github.io/Homework-1//" target="_blank">
                        <h2>Marketing Site</h2>
                    </a>
                    <p>Recreating a marketing page using div, float, clases, css styling</p>
                    <a href="https://mjallah.github.io/Homework-1/" target="_blank">&gt;Github Repository&lt;</a>
                </div>
            </div>
            <div class="card">
                <img class="project-img" src={Workday} alt="photo of workday" />
                <div class="card-info">
                    <a href="https://mjallah.github.io/Homework-5/" target="_blank">
                        <h2>Workday Scheduler</h2>
                    </a>
                    <p>Creating a work day scheduler</p>
                    <a href="https://github.com/NickStull/weather-dashboard" target="_blank">&gt;Github Repository&lt;</a>
                </div>
            </div>
            <div class="card">
                <img class="project-img" src={MovieChallenge} alt="photo of movie app" />
                <div class="card-info">
                    <a href="project22sample.herokuapp.com/" target="_blank">
                        <h2>Workday Scheduler</h2>
                    </a>
                    <p>Creating a bad movie challenge app</p>
                    <a href="https://github.com/mjallah/The_Bad_Movie_Challenge" target="_blank">&gt;Github Repository&lt;</a>
                </div>
            </div>
        </>
    )
}

export default Card
