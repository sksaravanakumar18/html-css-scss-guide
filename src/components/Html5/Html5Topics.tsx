import React, { useState, useEffect } from 'react';
import './Html5Topics.css'; // <-- Import your SCSS file here

// A simple syntax highlighter component (in a real app, use a library like react-syntax-highlighter)
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => (
    <pre className={`language-${language}`}>
        <code>{code.trim()}</code>
    </pre>
);

const Html5Topics: React.FC = () => {
    // State for the interactive <output> example
    const [valA, setValA] = useState(50);
    const [valB, setValB] = useState(50);
    const [sum, setSum] = useState(100);

    useEffect(() => {
        setSum(valA + valB);
    }, [valA, valB]);


    return (
        <div>
            {/* 
              This <style> block contains all the necessary CSS for this component.
              In a real application, this would be in a separate CSS/SCSS file.
            */} 

            <div className="page-container">
                <div className="page-header">
                    <h1>HTML5 Forms: Elements & Attributes</h1>
                    <p>An interactive guide to the powerful new features for forms introduced in HTML5.</p>
                </div>

                {/* --- Topic 1: New Input Types --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>New Input Types</h2>
                        <p className="subtitle">Enhance user experience with specialized input controls for specific data types.</p>
                    </div>
                    <div className="topic-content">
                        <div className="explanation">
                            <p>HTML5 introduced several new <code>type</code> attributes for the <code>&lt;input&gt;</code> element. These provide better user interfaces (like date pickers and color wheels) and more robust validation on mobile and desktop browsers.</p>
                            <ul>
                                <li><strong><code>color</code></strong>: A color picker control.</li>
                                <li><strong><code>date</code></strong>: A control for entering a date (year, month, day).</li>
                                <li><strong><code>email</code></strong>: A field optimized for email addresses with built-in validation.</li>
                                <li><strong><code>number</code></strong>: A field for entering numbers, often with spinner controls.</li>
                                <li><strong><code>range</code></strong>: A slider control for selecting a value within a range.</li>
                                <li><strong><code>tel</code></strong>, <strong><code>url</code></strong>, <strong><code>search</code></strong>, and more provide semantic meaning and specialized keyboards on mobile devices.</li>
                            </ul>
                        </div>
                        <div className="code-result">
                            <h3>Code Snippet</h3>
                            <CodeBlock language="html" code={`
<form>
  <label for="favcolor">Favorite Color:</label>
  <input type="color" id="favcolor" value="#0d6efd">
  
  <label for="bday">Birthday:</label>
  <input type="date" id="bday">
  
  <label for="quantity">Quantity:</label>
  <input type="number" id="quantity" min="1" max="10">
  
  <label for="volume">Volume:</label>
  <input type="range" id="volume" min="0" max="100">
</form>
                            `} />
                            <h3>Live Result</h3>
                            <div className="result-box">
                               <form className="form-preview" onSubmit={e => e.preventDefault()}>
                                    <div>
                                        <label htmlFor="favcolor-demo">Favorite Color:</label>
                                        <input type="color" id="favcolor-demo" defaultValue="#0d6efd" />
                                    </div>
                                    <div>
                                        <label htmlFor="bday-demo">Birthday:</label>
                                        <input type="date" id="bday-demo" />
                                    </div>
                                    <div>
                                        <label htmlFor="quantity-demo">Quantity (1-10):</label>
                                        <input type="number" id="quantity-demo" min="1" max="10" placeholder="1" />
                                    </div>
                                    <div>
                                        <label htmlFor="volume-demo">Volume:</label>
                                        <input type="range" id="volume-demo" min="0" max="100" />
                                    </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Topic 2: New Form Attributes --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>New Form Attributes</h2>
                        <p className="subtitle">Simplify form validation and improve usability with new attributes for input elements.</p>
                    </div>
                    <div className="topic-content">
                        <div className="explanation">
                            <p>These attributes provide declarative, browser-native functionality that previously required JavaScript.</p>
                            <ul>
                                <li><strong><code>required</code></strong>: A boolean attribute specifying that the field must be filled out before submitting.</li>
                                <li><strong><code>placeholder</code></strong>: Provides hint text that disappears when the user starts typing.</li>
                                <li><strong><code>pattern</code></strong>: Specifies a regular expression the input's value must match. The browser can validate this.</li>
                                <li><strong><code>autofocus</code></strong>: Automatically focuses the input field when the page loads.</li>
                                <li><strong><code>min</code> / <code>max</code> / <code>step</code></strong>: Defines constraints for number and range inputs.</li>
                                <li><strong><code>multiple</code></strong>: Allows multiple values to be selected for `email` and `file` inputs.</li>
                            </ul>
                        </div>
                        <div className="code-result">
                            <h3>Code Snippet</h3>
                            <CodeBlock language="html" code={`
<form>
  <label for="username">Username:</label>
  <input 
    type="text"
    id="username"
    placeholder="4-8 characters"
    required
    pattern="[a-zA-Z0-9]{4,8}"
  >
  <p>Try submitting with invalid data.</p>
  <button type="submit">Register</button>
</form>
                            `} />
                            <h3>Live Result</h3>
                            <div className="result-box">
                                <form className="form-preview">
                                    <div>
                                        <label htmlFor="username-demo">Username:</label>
                                        <input 
                                            type="text" 
                                            id="username-demo" 
                                            placeholder="4-8 letters/numbers only" 
                                            required 
                                            pattern="[a-zA-Z0-9]{4,8}"
                                            title="Please enter 4 to 8 alphanumeric characters."
                                        />
                                    </div>
                                    <p>Try submitting with empty, short, or invalid input (e.g., "!@#") to see the browser's built-in validation message.</p>
                                    <button type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Topic 3: New Form Elements --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>New Form Elements</h2>
                        <p className="subtitle">Beyond <code>&lt;input&gt;</code>, HTML5 provides new tags for richer form experiences.</p>
                    </div>
                    <div className="topic-content">
                        <div className="explanation">
                            <h3><code>&lt;datalist&gt;</code></h3>
                            <p>Provides an "autocomplete" feature for <code>&lt;input&gt;</code> elements. It defines a list of pre-defined options that appear as suggestions as the user types.</p>
                            <p>The `list` attribute of the input must match the `id` of the datalist.</p>
                            <br/>
                            <h3><code>&lt;output&gt;</code></h3>
                            <p>Represents the result of a calculation or user action. It's a semantic way to display output from form inputs. The `for` attribute can link it to the inputs that were part of the calculation for accessibility.</p>
                        </div>
                        <div className="code-result">
                            <h3>Datalist Snippet & Result</h3>
                            <CodeBlock language="html" code={`
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
                            `} />
                            <div className="result-box" style={{marginBottom: '1.5rem'}}>
                                <div className="form-preview">
                                    <label htmlFor="browser-demo">Choose a browser:</label>
                                    <input list="browsers-demo" id="browser-demo" name="browser" />
                                    <datalist id="browsers-demo">
                                        <option value="Chrome" />
                                        <option value="Firefox" />
                                        <option value="Safari" />
                                        <option value="Edge" />
                                        <option value="Opera" />
                                    </datalist>
                                </div>
                            </div>

                            <h3>Output Snippet & Result</h3>
                            <CodeBlock language="html" code={`
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="range" id="a" value="50">
  +
  <input type="range" id="b" value="50">
  =
  <output name="result" for="a b">100</output>
</form>
                            `} />
                            <div className="result-box">
                                <form className="form-preview">
                                    <div>
                                        <label>Value A: {valA}</label>
                                        <input type="range" value={valA} onChange={(e) => setValA(parseInt(e.target.value))} />
                                    </div>
                                    <div>
                                        <label>Value B: {valB}</label>
                                        <input type="range" value={valB} onChange={(e) => setValB(parseInt(e.target.value))} />
                                    </div>
                                    <div style={{textAlign: 'center', fontSize: '1.2rem'}}>
                                        <strong>Total: </strong>
                                        <output>{sum}</output>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Html5Topics;