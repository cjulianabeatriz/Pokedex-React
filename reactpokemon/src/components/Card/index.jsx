import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import  { Modal } from '../../components/Modal/index'
import axios from 'axios';
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Card = ( props ) => {

    const [openModal, setOpenModal] = useState(false);

    const [data, setData] = useState();
    const [name, setName] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    const [image, setImage] = useState();
    const [number, setNumber] = useState();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then((response) => {
                setData(response.data);
                setName(response.data.name)
                setAttack(response.data.stats[1].base_stat)
                setDefense(response.data.stats[2].base_stat)
                setImage(response.data.sprites.front_default)
            })
            .catch((error) => { console.log('Ocorreu um erro') })
    }, [`https://pokeapi.co/api/v2/pokemon/ditto${number}`])

    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='search'>
                <input type={"search"} className="input" placeholder={t('Search')} value={number} onChange={handleChange}  />
            </div>
            <div className='card'>
                <div>
                    <img className='img-card' src={image}></img>
                </div>
            </div>
            <div className='infos-card'>
                <div className='infos'>
                    <h2>{name}</h2>
                    <p>{props.attack}: {attack}</p>
                    <p>{props.defense}: {defense}</p>
                    <button className='btn-card' onClick={() => setOpenModal(true)}>{t('SeeMore')}</button>
                </div>
            </div>
            <Modal isOpen={openModal} setModalOpen = {() => setOpenModal(!openModal)}/>
        </>
    )
}