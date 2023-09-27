import React from 'react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Lendarios = () => {
    
    const { t } = useTranslation();

    return (
        <h1>Lendarios</h1>
    )
}