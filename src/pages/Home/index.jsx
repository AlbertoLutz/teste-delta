import React from 'react';
import './styles.css';

import truckImg from '../../assets/svg/truck.svg';
import homePerson from '../../assets/img/home-person.png';

import leftArrow from  '../../assets/svg/left-arrows.svg'
import rightArrow from '../../assets/svg/right-arrow.svg';


function Home() {
    return (

        <main className="container">

            <header>
                <h1>LOGO</h1>



            </header>

            <section>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>

                <spam></spam>

                <hr></hr>

            </section>



            <div className="carousel">
                <img src={truckImg} alt="" />

                <h3>Carousel 1</h3>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero consequuntur, nulla obcaecati a recusandae amet,
                    impedit molestiae odit nisi necessitatibus id? Accusantium
                    architecto dicta delectus.
              </p>

            </div>

            <div className="carousel-img">
                <img src={homePerson} alt="" />

                <span>
                    <img src={leftArrow} alt="" />
                </span>

                <span>
                <img src={rightArrow} alt="" />
                </span>
            </div>



        </main>
    );
};

export default Home;
