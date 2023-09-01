import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import br from '../../assets/brasil.png';
import us from '../../assets/estados-unidos.png';
import i18n from 'i18next'
import './style.css';

const languageOptions = [
    {
        name: 'Português',
        value: 'pt',
        flag: br
    },
    {
        name: 'English',
        value: 'en',
        flag: us
    },
]

export const Header = () => {
    const {t} = useTranslation();
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo pokemon" />
            <nav className='nav'>
                <NavLink to="/">{t('Home')}</NavLink>
                <NavLink to="/pokedex">{t('Pokédex')}</NavLink>
                <NavLink to="/lendarios">{t('Legendaries')}</NavLink>
            </nav>
            <div className='switch'>
                {languageOptions.map(languageOption => (
                    <button key={languageOption.value} onClick={() => {
                        i18n.changeLanguage(languageOption.value);
                    }}>
                        <img className='bandeiras' src={languageOption.flag} alt={languageOption.name} />
                    </button>
                ))}
            </div>
        </div>
    )

}