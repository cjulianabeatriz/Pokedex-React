import { useTranslation } from 'react-i18next';
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt',},
    { name: 'English', value: 'en', },
]

export const Button = ( button ) => {
    const {t} = useTranslation();

    return (
     <>
        <button className='button'>{button.name}</button>
     </>
    )
}