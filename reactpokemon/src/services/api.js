import axios from  'axios';
import react, { useState, useEffect } from 'react';

const Api = () => {

    const [data, setData] = useState();
    const [name, setName] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    const [image, setImage] = useState();
    const [number, setNumber] = useState();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then((response) => {
                setData(response.data);
                setName(response.data.name)
                setAttack(response.data.stats[1].base_stat)
                setDefense(response.data.stats[2].base_stat)
                setImage(response.data.sprites.front_default)
            })
            .catch((error) => { console.log('Ocorreu um erro') })
    }, [`https://pokeapi.co/api/v2/pokemon/ditto${number}`])
}

export default Api;