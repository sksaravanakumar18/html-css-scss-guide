import React from 'react';

const ScssTopics: React.FC = () => {
    return (
        <div>
            <h1>SCSS Topics</h1>
            <section>
                <h2>Variables</h2>
                <p>SCSS allows you to use variables to store values that you can reuse throughout your stylesheets.</p>
            </section>
            <section>
                <h2>Nesting</h2>
                <p>Nesting allows you to write CSS selectors in a nested hierarchy, making your styles more readable.</p>
            </section>
            <section>
                <h2>Mixins</h2>
                <p>Mixins let you create reusable chunks of styles that can be included in other selectors.</p>
            </section>
            <section>
                <h2>Functions</h2>
                <p>SCSS provides built-in functions and allows you to create your own to manipulate values.</p>
            </section>
            <section>
                <h2>Inheritance</h2>
                <p>Inheritance allows one selector to inherit the styles of another, promoting code reuse.</p>
            </section>
        </div>
    );
};

export default ScssTopics;