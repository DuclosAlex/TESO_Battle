"use client";

import styles from './CharacterCard.module.css';
import { Character } from "@/interfaces/Character/Character";
import { selectCharacter, reset } from "@/redux/slice/characterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";


const CharacterCard: React.FC<Character> = (character) => {

    const characterState = useAppSelector((state) => state.characterSlice);
    const dispatch = useAppDispatch();
    const [isSelected, setIsSelected] = useState(character.is_selected);

    const handleClick = () => {

        if(characterState.characters.some((char) => char.id === character.id)) {
            return console.log('Personnage déjà dans le tableau');
        }
        dispatch(reset());
        dispatch(selectCharacter(character));
        setIsSelected(true)
    }

    useEffect(() => {
        
            console.log(characterState.characters);
            if(characterState.characters[0] !== character && isSelected === true) {
                setIsSelected(false)
                console.log(character)
            }
        
    }, [characterState])


    return (
        <div className={`text-center bg-blue-500 p-4 m-auto w-1/4 ${ isSelected ? styles.selectedCharacter : '' }`}>
            <p>{ character.name }</p>
            <button className="bg-yellow-500" onClick={ handleClick } >Test du store</button>

        </div>
    )
}

export default CharacterCard;