import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import banner from '../../assets/banner.png'
import './style.css';

const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en',},
]

export const Home = () => {
    const {t} = useTranslation();

    return (
     <div className='container'>
        <div className="titulo">
            <h1>{t('FindAll')}</h1>
            <p>{t('YouCan')}</p>
            <button className='button'>
                <Link to="/Pokedex">{t('See')}</Link>
            </button>
        </div>
        <div className='img-banner'>
        <img className='img' src={banner} alt="pokemon" />
        </div>
     </div>
    )
}
