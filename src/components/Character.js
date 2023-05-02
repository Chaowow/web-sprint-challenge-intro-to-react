// Write your Character component here
import React from "react";

 
//{name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}


const SwCharacters = (props) => {
    return (
        <div className="character-wrapper">
            {props.character.map((character) => {
                return(
                    <div key={character.url}>
                        <h2>{character.name}</h2>
                        <p>Born: {character.birth_year}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Height: {character.height}</p>
                        <p>Mass: {character.mass}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default SwCharacters
