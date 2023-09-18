import { useTranslation } from 'react-i18next';
import React from 'react';
import './modal.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Modal = ({ isOpen, setModalOpen }) => {


    const { t } = useTranslation();

    if (isOpen) {
        return (
            <div className='overlay'>

                <div className='modal'>

                    <div className='btn-close'>
                        <button onClick={setModalOpen}>fechar</button>
                    </div>

                    <div className='content'>

                        <div>
                            <span>Sylveon</span>
                            <p>{t('Type')}</p>
                            <p>{t('Attack')}</p>
                            <p>{t('Defense')}</p>
                        </div>

                        <div>
                            <img className='img-card' />
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}