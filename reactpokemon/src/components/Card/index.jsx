import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import sylveon from '../../assets/sylveon.png';
import { Modal } from '../../components/Modal/index'
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Card = () => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    return (
        <div className='card'>
            <div className='infos-card'>

                <span className='nome'>Sylveon</span>

                <div className='attack-defense'>

                    <span className='attack'>
                        <div className='circulo'>
                            <span className='pt-attack'>419</span>
                        </div>
                        <span className='legenda'>{t('Attack')}</span>
                    </span>

                    <span className='defense'>
                        <div className='circulo'>
                            <span className='pt-defense'>494</span>
                        </div>
                        <span className='legenda'>{t('Defense')}</span>
                    </span>

                </div>

                <button className='btn-card' onClick={() => setOpen(!open)}>{t('SeeMore')}</button>
                <Modal isOpen={open} setOpen={setOpen}/>
            </div>

            <div>
                <img className='img-card' src={sylveon} />
            </div>

        </div>

    )
}