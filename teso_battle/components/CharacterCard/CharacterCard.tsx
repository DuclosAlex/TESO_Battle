"use client";

import styles from './CharacterCard.module.css';
import { Character } from "@/interfaces/Character/Character";
import { selectCharacter, reset } from "@/redux/slice/characterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Image from 'next/image'


const CharacterCard: React.FC<Character> = (character) => {

    const characterState = useAppSelector((state) => state.characterSlice);
    const dispatch = useAppDispatch();
    const [isCharacterSelected, setIsCharacterSelected] = useState(false)

    const handleClick = () => {

        if(characterState.characters.some((char) => char.id === character.id)) {
            console.log(isCharacterSelected)
            return console.log('Personnage déjà dans le tableau');
        }
        setIsCharacterSelected(true)
        dispatch(reset());
        dispatch(selectCharacter(character));
        
        
    }

    useEffect(() => {
            if(characterState.characters[0]) {

                if(characterState.characters[0].id !== character.id && isCharacterSelected === true) {
                    
                    setIsCharacterSelected(false);
                }
            }
    }, [characterState])


    return (
        <div onClick={handleClick} className={`cursor-pointer text-center p-4 m-auto w-1/4 ${styles.characterContainer} ${ isCharacterSelected ? styles.selectedCharacter : '' }`}>
            <p>{ character.name }</p>
            <Image className='m-auto'
                src={character.src}
                alt={character.alt}
                width={200}
                height={200}
                />

        </div>
    )
}

export default CharacterCard;