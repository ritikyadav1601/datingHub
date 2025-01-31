import React, { useState } from "react";
import "../Styles/HappyClients.css"
import Testi1 from "../Assests/Testi1.png"
import Testi2 from "../Assests/Testi2.png"
import Testi3 from "../Assests/Testi3.png"

const testimonials = [
    {
        name: "Dinesh Singh",
        text: "I’ve tried many dating apps before, but this one truly stands out! The user experience is smooth, and I quickly connected with like-minded people. It’s amazing how easy it is to navigate and find matches. Highly recommend it!",
        bgColor: "#AC1639",
        image: Testi1,
    },
    {
        name: "Sachin",
        text: "This app has made dating so much easier and more fun! The matches are relevant, and the features are super intuitive. I met some incredible people, and I appreciate how safe and secure the platform feels. Definitely a 10/10!",
        bgColor: "#272727",
        image: Testi2,
    },
    {
        name: "Simran",
        text: "A wonderful platform that brings people together in the most natural way. I love how easy it is to use and how quickly I found great matches. The design is sleek, and I feel confident meeting new people. Truly one of the best dating apps!",
        bgColor: "#272727",
        image: Testi3,
    },
];

const HappyClients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonials">
            <h2 className="heading">Our Happy Clients</h2>
            <div className="carousel">
                <div className="testimonial-container">
                    {testimonials.map((testimonial, index) => {
                        let position = "next";
                        if (index === currentIndex) position = "active";
                        else if (
                            index === (currentIndex - 1 + testimonials.length) % testimonials.length
                        )
                            position = "prev";

                        return (
                            <div
                                key={index}
                                className={`testimonial-card ${position}`}
                                style={{ backgroundColor: testimonial.bgColor }}
                            >
                                <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                                <h3>{testimonial.name}</h3>
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <p>{testimonial.text}</p>
                            </div>
                        );
                    })}
                </div>
                {/* Moved navigation buttons below the cards */}
                <div className="arrow-container">
                    <button className="arrow left-arrow" onClick={prevSlide}>←</button>
                    <button className="arrow right-arrow" onClick={nextSlide}>→</button>
                </div>

            </div>
        </div>
    );
};

export default HappyClients;
