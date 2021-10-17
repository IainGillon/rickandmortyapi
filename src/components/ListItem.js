import React from 'react';

 const ListItem =  ({character, onCharacterClick}) => {
     const handleClick = function(){
         onCharacterClick(character)
     }
     return <li onClick={handleClick}>{character.name}</li>



 }

 export default ListItem