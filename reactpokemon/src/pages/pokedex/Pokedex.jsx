import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from '../../components/Search';
import { Card } from '../../components/Card';
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Pokedex = () => {
    const { t } = useTranslation();

    return (
        <div className='pokedex'>
            <div>
                <h1>{t('800')}</h1>
                <Search />
                <Card />
            </div>
        </div>
    )
}