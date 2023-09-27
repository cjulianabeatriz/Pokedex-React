import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';
import pokebola from '../../assets/pokebola.png'
import './style.css';
import axios from 'axios';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Pokedex = ( ) => {

    const [pokemonKey, setPokemonKey] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonKey}`);
            setPokemonData(response.data)
        } catch (error) {
            console.log(error, 'error')
        }
    }
    
    const handleChange = (e) => {
        setPokemonKey(e.target.value.toLowerCase());
    }


    return (
        <div className='pokedex-page'>
            <div>

                <h1>{t('800')}</h1>
                <form className='form'onSubmit={handleSubmit}>
                    <input 
                    type="search"
                    className='input' 
                    onChange={handleChange} 
                    placeholder={t('Search')} />

                    <button className='pokeball' type='submit'> <img className='pokeball-img' src={pokebola}/> </button>
                </form>

                <div className='grid'>
                {pokemonData && (
                    <Card pokemon={pokemonData} key={pokemonData.id}/>
                )}
                </div>
                
            </div>
        </div>
    )
}