import { useTranslation } from 'react-i18next';
import React from 'react';
import close from '../../assets/close.png'
import icon from '../../assets/icon.png'
import peso from '../../assets/peso.png'
import './modal.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Modal = ({ isOpen, setModalOpen, pokemonModal }) => {


    const { t } = useTranslation();

    if (isOpen) {
        return (
            <div className='overlay'>

                <div className='modal'>

                    <div className='btn-close'>
                        <button 
                        onClick={setModalOpen}>
                            <img className='btn-close' src={close}></img>
                            </button>
                    </div>

                    <div className='content'>

                        <div>

                            <div className='title-modal'>
                                <div className='id-modal'>{pokemonModal.id}</div>
                                <h2>{pokemonModal.name}</h2>
                            </div>

                            <div className='icon-modal'>
                                <p className='type'>{t('Type')}: {pokemonModal.types[0].type.name}</p>
                            </div>

                            <div className='attack-defense'>
                                <div className='attack'>
                                    <div className='circle'>
                                        <div className='number-attack'>{pokemonModal.stats[1].base_stat}</div>
                                    </div>
                                    <div className='legend'>
                                        <p>{t('Attack')}</p>
                                    </div>
                                </div>

                                <div className='defense'>
                                    <div className='circle'>
                                        <div className='number-defense'>{pokemonModal.stats[2].base_stat}</div>
                                    </div>
                                    <div className='legend'>
                                        <p>{t('Defense')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='peso'>
                                <p>{t('Weight')}: {pokemonModal.weight}</p>
                            </div>


                        </div>

                        <div>
                            <img className='img-modal' src={pokemonModal.sprites.other.home.front_default}></img>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}