// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState('16px'); // Initialisé en tant que chaîne pour prendre en charge les unités (px)

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    const inputFontSize = event.target.value;
    setFontSize(inputFontSize);
  };

  return (
    <div className="App">
      <div>
        <label>
          Taille du texte:
          <input
            type="text"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        style={{ fontSize: fontSize+'px' }}
      />
      <div>
        <h2>Contenu du texte :</h2>
        <pre style={{ fontSize: fontSize+'px' }}>{text}</pre>
      </div>
    </div>
  );
}

export default App;
