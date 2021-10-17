import React from "react";

const CharacterDetail = ({character}) => {
    return (
        <div>
            <h3>{character.info.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p><img class="picture" src={character.image}/></p>

        </div>
    )
}

export default CharacterDetail