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

export const Search = () => {
    const {t} = useTranslation();

    return (
     <div className='search'>
        <input type="search" className="input" placeholder={t('Search')}/>
     </div>
    )
}
