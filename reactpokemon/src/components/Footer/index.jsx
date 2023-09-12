import { useTranslation } from 'react-i18next';
import './style.css';

const languageOptions = [
    {
        name: 'Português',
        value: 'pt',
    },
    {
        name: 'English',
        value: 'en',
    },
]

export const Footer = () => {
    const {t} = useTranslation();

    return (
     <div className='footer'>
        <span>{t('MadeWith')} 💖 {t('by')} Juliana Castro</span>
     </div>
    )
}