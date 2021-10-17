import React, { useEffect, useState } from 'react'
import CharacterList from '../components/CharacterList';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import ListItem from '../components/ListItem';

const CharacterContainer = () => {
    const[characters, setCharacters] = useState(null);
    const[selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        getCharacters();

    }, []);

    const getCharacters = function(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
    }

    const onCharacterSelected= function(character){
        setSelectedCharacter(character)
    }

    return (
        <div className="main-container">
        <CharacterSelector characters={characters} onCharacterSelected={onCharacterSelected}/>
        {selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : null};

        </div>
    )



}

export default CharacterContainer