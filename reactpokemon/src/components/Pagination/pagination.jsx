import { useTranslation } from 'react-i18next';
import React from 'react';


const languageOptions = [
    { name: 'Português', value: 'pt',},
    { name: 'English', value: 'en', },
]

export const Pagination = () => {
    
    const {t} = useTranslation();

    return (
     <div className='pagination'>
        <button>Carregar mais</button>
     </div>
    )
}