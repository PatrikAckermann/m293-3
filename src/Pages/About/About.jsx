import React from 'react';
import TextElement from '../../Components/TextElement/TextElement';
import './About.css';
import ExploreProjects from '../../Components/ExploreProjects/ExploreProjects';

export default function About() {
    return <div className="About Page">
        <h2 className="About-Title">about us</h2>
        <TextElement className="" title="story" text="Founded in 2024 by just one person, our web design agency is dedicated to create innovative and visually stunning websites that elevate your brands recognition on the web. With our experience in software development, we create a great user experience which keeps the user engaged on your site." />
        <TextElement className="" title="products" text="We make unique solutions fitting your needs perfectly. We offer anything from an appealing homepage to a functional internal web tool for your business. It can run completely without any server logic, or it can be based on a back-end with database and extensive data processing. Whatever you need on your browser, we can make it." />
        <ExploreProjects />
    </div>
}