import React from 'react';


const CharacterSelector = ({characters, onCharacterSelected}) => {
    const handleChange = function(event) {
        onCharacterSelected(characters[event.target.value]);

    }
    const CharacterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>
            {character.name}
        </option>
    })
    return(
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a character</option>

        {CharacterOptions}

        </select>
    )
}

export default CharacterSelector