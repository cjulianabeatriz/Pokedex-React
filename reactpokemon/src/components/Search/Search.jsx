import { useTranslation } from 'react-i18next';
import './style.css';


const languageOptions = [
    { name: 'Português', value: 'pt', },
    { name: 'English', value: 'en', },
]

export const Search = ({ searchPokemon, searchName, handleChange}) => {

    const { register, handleSubmit } = useForm()

    const { t } = useTranslation();

    return (
        <>
        <div className='search'>
            <form className='form'>
                <input
                className='input'
                type="search"
                onChange={handleChange}
                value={searchName}
                placeholder={t('Search')}>
                </input>
                <button
                className="pokeball"
                type="submit"
                onClick={searchPokemon}>Enviar
                </button>
            </form>
        </div>
        </>
    )
}