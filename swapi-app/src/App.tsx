import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

interface StarWarsCharacter {
  name: string;
  height?: number;
  hair_color?: string;
}

const baseURL = 'https://swapi.dev/api/people/';

const App = () => {
  const [character, setCharacter] = useState<StarWarsCharacter>();
  const [errorText, setErrorText] = useState<string>('');

  const fetchStarWarsCharacter = async (characterIndex: number) => {
    try {
      const apiResponse = await fetch(baseURL + `/${characterIndex}/`);

      if (apiResponse.status !== 200) {
        if (apiResponse.status === 418) {
          setErrorText("418 I'm a tea pot 🫖, silly");
        } else {
          setErrorText('Oops... something went wrong, try again 🤕');
        }
      } else {
        const json = (await apiResponse.json()) as StarWarsCharacter;
        setCharacter(json);
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchStarWarsCharacter(1);
  }, []);

  return (
    <div className='App'>
      <header>
        <h1>Star Wars API</h1>
      </header>
      {errorText !== '' && <p>{errorText}</p>}
      {character && (
        <div>
          <p>Character: The force will be with always {character?.name}</p>
        </div>
      )}
    </div>
  );
};

export default App;
