import React from 'react';
import Html5Topics from './components/Html5/Html5Topics';
import Css3Topics from './components/Css3/Css3Topics';
import ScssTopics from './components/Scss/ScssTopics';
import './styles/html5.scss';
import './styles/css3.scss';
import './styles/scss.scss';

const App: React.FC = () => {
  return (
    <div>
      <h1>Web Development Topics</h1>
      <Html5Topics />
      <Css3Topics />
      <ScssTopics />
    </div>
  );
};

export default App;