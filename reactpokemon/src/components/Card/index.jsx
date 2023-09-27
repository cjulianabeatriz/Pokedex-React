import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Modal } from '../../components/Modal/index'
import spinner from '../../assets/spinner.gif'
import pokemonInstance from '../../helper/axios-instance'
import useAxios from '../../hook/use-axios';
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Card = ({ pokemon }) => {


    const [pokemonData, error, loading] = useAxios({
        axiosInstance: pokemonInstance,
        method: 'get',
        url: `pokemon/${pokemon.name}`,
    })

    const { t } = useTranslation();

    const [openModal, setOpenModal] = useState(false);


    if (!loading) {
        return (
            <div className='poke'>
                <div className='poke-card'>
                    <img className='img-card' src={pokemonData.sprites.other.home.front_default}></img>
                    <div className='pokemon-name'>{pokemonData.id} - {pokemonData.name}</div>
                    <button className='btn-card' onClick={() => setOpenModal(true)}>{t('SeeMore')}</button>
                    <Modal pokemonModal={pokemonData} isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                </div>
            </div >
        )
    } else {
        return (
            <div><img src={spinner}/></div>
        )
    }


}