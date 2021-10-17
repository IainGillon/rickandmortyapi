import React from "react";
import ListItem from "./ListItem";

const CharacterList = ({characters, onCharacterClick}) => {
    const CharacterList = characters.map((character, index) => {
        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    })
    return (
        <div>
            <ul>
                {CharacterList}
            </ul>
        </div>
    )
}

export default CharacterList