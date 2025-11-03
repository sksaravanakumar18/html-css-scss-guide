import React from 'react';
import './Css3Topics.css'; // <-- Import your SCSS file here
// A simple syntax highlighter component (in a real app, use a library like react-syntax-highlighter)
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => (
    <pre className={`language-${language}`}>
        <code>{code.trim()}</code>
    </pre>
);

const Css3Topics: React.FC = () => {
    return (
        <div>
            {/* 
              This <style> block contains all the necessary CSS for this component.
              In a real application, this would be in a separate Css3Topics.module.css file.
            */} 

            <div className="page-container">
                <div className="page-header">
                    <h1>Core CSS3 Concepts</h1>
                    <p>An interactive guide to modern CSS features for layout, effects, and responsive design.</p>
                </div>

                {/* --- Topic: Positioning --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>Positioning</h2>
                        <p>Controls how an element is placed in the document flow. Mastering `position` is key to building any complex layout.</p>
                    </div>
                    <div className="example-grid">
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Relative & Absolute</h3>
                                <p><code>relative</code> positions an element relative to its normal position. <code>absolute</code> positions an element relative to its nearest `positioned` ancestor.</p>
                                <CodeBlock language="css" code={`
.container {
  position: relative; /* Establishes a positioning context */
}
.box-a {
  position: relative;
  top: 10px; left: 10px;
}
.box-b {
  position: absolute;
  top: 20px; right: 20px;
}
                                `} />
                                <div className="result-box">
                                    <div className="pos-container">
                                        <div className="pos-box pos-relative">Relative</div>
                                        <div className="pos-box pos-absolute">Absolute</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Fixed & Sticky</h3>
                                <p><code>fixed</code> positions an element relative to the viewport (it stays in place when you scroll). <code>sticky</code> is a hybrid that behaves like `relative` until it hits a specified offset, then it becomes `fixed`.</p>
                                <CodeBlock language="css" code={`
.box-c {
  position: fixed;
  bottom: 20px; right: 20px;
}
.box-d {
  position: sticky;
  top: 0; /* Becomes fixed at the top of its container */
}
                                `} />
                                <div className="result-box">
                                    <div className="sticky-container">
                                        <p>Scroll this container...</p>
                                        <div className="pos-box pos-sticky">Sticky Header</div>
                                        <div style={{ height: '300px' }}></div>
                                    </div>
                                    <p>(A "fixed" element would appear outside this box, fixed to your browser window)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- Topic: Flexbox --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>Flexbox (Flexible Box Layout)</h2>
                        <p>A one-dimensional layout model for distributing space and aligning items within a container. Perfect for components.</p>
                    </div>
                    <div className="example-grid">
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Justify Content (Main Axis)</h3>
                                <p>Distributes space along the main axis (horizontally in a row).</p>
                                <CodeBlock language="css" code={`
.container {
  display: flex;
  justify-content: space-between;
}
                                `} />
                                <div className="result-box">
                                    <div className="flex-container" style={{ justifyContent: 'space-between' }}>
                                        <div className="flex-item">1</div>
                                        <div className="flex-item">2</div>
                                        <div className="flex-item">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Align Items (Cross Axis)</h3>
                                <p>Aligns items along the cross axis (vertically in a row).</p>
                                <CodeBlock language="css" code={`
.container {
  display: flex;
  align-items: center;
}
                                `} />
                                <div className="result-box">
                                    <div className="flex-container" style={{ alignItems: 'center' }}>
                                        <div className="flex-item">1</div>
                                        <div className="flex-item flex-item-tall">2</div>
                                        <div className="flex-item">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Flex Direction Column</h3>
                                <p>Changes the main axis to vertical. `justify-content` now controls vertical alignment.</p>
                                <CodeBlock language="css" code={`
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
                                `} />
                                <div className="result-box">
                                    <div className="flex-container flex-col" style={{ alignItems: 'flex-start' }}>
                                        <div className="flex-item">1</div>
                                        <div className="flex-item">2</div>
                                        <div className="flex-item">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="example-item">
                            <div className="code-result">
                                <h3>Wrapping</h3>
                                <p><code>flex-wrap: wrap</code> allows items to wrap onto a new line if they overflow the container.</p>
                                <CodeBlock language="css" code={`
.container {
  display: flex;
  flex-wrap: wrap;
}
                                `} />
                                <div className="result-box">
                                    <div className="flex-container" style={{ flexWrap: 'wrap' }}>
                                        <div className="flex-item">Item 1</div>
                                        <div className="flex-item">Item 2</div>
                                        <div className="flex-item">Item 3</div>
                                        <div className="flex-item">Item 4</div>
                                        <div className="flex-item">Item 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Topic: Grid --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>Grid Layout</h2>
                        <p>A two-dimensional layout system for creating rows and columns. Ideal for overall page structure.</p>
                    </div>
                    <div className="example-grid">
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Template Columns & Rows</h3>
                                <p>Define a grid structure with `fr` (fractional) units for flexible columns.</p>
                                <CodeBlock language="css" code={`
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 50px 50px;
  gap: 10px;
}
                                `} />
                                <div className="result-box">
                                    <div className="grid-container" style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '50px 50px' }}>
                                        <div className="grid-item">A (2fr)</div>
                                        <div className="grid-item">B</div>
                                        <div className="grid-item">C</div>
                                        <div className="grid-item">D</div>
                                        <div className="grid-item">E</div>
                                        <div className="grid-item">F</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Spanning Items</h3>
                                <p>Items can be made to span multiple tracks (columns or rows).</p>
                                <CodeBlock language="css" code={`
.item-a {
  grid-column: span 2; /* Spans 2 columns */
}
.item-d {
  grid-row: span 2; /* Spans 2 rows */
}
                                `} />
                                <div className="result-box">
                                    <div className="grid-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 50px)' }}>
                                        <div className="grid-item grid-span-2">A (spans 2)</div>
                                        <div className="grid-item">B</div>
                                        <div className="grid-item">C</div>
                                        <div className="grid-item">D</div>
                                        <div className="grid-item">E</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="example-item">
                            <div className="code-result">
                                <h3>Responsive Grid (auto-fit)</h3>
                                <p>Create a responsive grid that automatically adjusts the number of columns based on container width.</p>
                                <CodeBlock language="css" code={`
.container {
  display: grid;
  grid-template-columns: 
    repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}
                                `} />
                                <div className="result-box">
                                    <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}>
                                        <div className="grid-item">1</div>
                                        <div className="grid-item">2</div>
                                        <div className="grid-item">3</div>
                                        <div className="grid-item">4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="example-item">
                            <div className="code-result">
                                <h3>Grid Template Areas</h3>
                                <p>A visual and intuitive way to define a layout by naming grid areas.</p>
                                <CodeBlock language="css" code={`
.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
                                `} />
                                <div className="result-box">
                                    <div className="grid-container" style={{ height: '200px', gridTemplateAreas: '"header header" "sidebar main" "footer footer"', gridTemplateRows: 'auto 1fr auto' }}>
                                        <div className="grid-item" style={{ gridArea: 'header' }}>Header</div>
                                        <div className="grid-item" style={{ gridArea: 'sidebar' }}>Sidebar</div>
                                        <div className="grid-item" style={{ gridArea: 'main' }}>Main</div>
                                        <div className="grid-item" style={{ gridArea: 'footer' }}>Footer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- Topic: Visual Effects --- */}
                <section className="topic-section">
                    <div className="topic-header">
                        <h2>Visual Effects</h2>
                        <p>CSS3 provides a powerful suite of tools for adding depth, motion, and visual flair to your designs.</p>
                    </div>
                    <div className="example-grid">
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Transitions</h3>
                                <p>Animate property changes smoothly over a given duration.</p>
                                <CodeBlock language="css" code={`
.box {
  transition: all 0.4s ease-in-out;
}
.box:hover {
  background-color: #20c997;
  border-radius: 50%;
  transform: scale(1.2);
}
                                `} />
                                <div className="result-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="transition-box"></div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Transforms</h3>
                                <p>Rotate, scale, skew, or translate an element in 2D or 3D space.</p>
                                <CodeBlock language="css" code={`
.box:hover {
  transform: rotate(-5deg) scale(1.1);
}
                                `} />
                                <div className="result-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="transform-box">Hover Me</div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Box Shadow</h3>
                                <p>Adds shadow effects to an element's frame for depth.</p>
                                <CodeBlock language="css" code={`
.box {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 
              0 4px 6px -2px rgba(0,0,0,0.05);
}
                                `} />
                                <div className="result-box">
                                    <div className="shadow-box">This is a card with depth.</div>
                                </div>
                            </div>
                        </div>
                        <div className="example-item">
                            <div className="code-result">
                                <h3>Filters</h3>
                                <p>Apply graphical effects like blur, contrast, or grayscale.</p>
                                <CodeBlock language="css" code={`
img:hover {
  filter: saturate(180%) contrast(120%);
}
                                `} />
                                <div className="result-box">
                                    <img src="https://picsum.photos/id/1060/200/100" alt="Landscape" className="filter-image" style={{ borderRadius: '4px' }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Css3Topics;