import { useTranslation } from 'react-i18next';
import close from '../../assets/close.png';
import sylveon from '../../assets/sylveon.png';
import React from 'react';
import './modal.css';


const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export const Modal = ({ isOpen, setOpen }: IModal) => {
    const { t } = useTranslation();
    if (isOpen) {
        return (
            <div className='overlay'>

                <div className='modal'>

                    <div className='btn-close'>
                        <button onClick={() => setOpen(!isOpen)}>
                        <img className='img-btn' src={close} />
                        </button>
                    </div>

                    <div className='content'>

                        <div>
                            <span>Sylveon</span>
                            <p>{t('Type')}</p>
                            <p>{t('Attack')}</p>
                            <p>{t('Defense')}</p>
                        </div>

                        <div>
                            <img className='img-card' src={sylveon} />
                        </div>

                    </div>

                </div>
            </div>
        )
    } else {
        return <></>
    }
}