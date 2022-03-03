import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getLocation } from '../../api/apiCalls';
import Title from '../../atoms/title/Title';
import {
    CharacterWrapper,
    CharacterLeft,
    CharacterRight,
    CharacterCardContainer,
} from './location.elements';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Select from '../../components/select/Select';
import Spinner from '../../components/spinner/Spinner';
import NoSearch from '../../components/noSearch/NoSearch';

const Location = () => {

    const [location, setLocation] = useState(1);
    const [characters, setCharacters] = useState([]);

    const { data, error, isLoading } = useQuery(["location", location], () => getLocation(location));

    useEffect(() => {
        (async function () {
            let results = await Promise.all(
                data?.residents.map(x => {
                    return fetch(x).then(res => res.json());
                })
            );
            setCharacters(results);
        })();
    }, [data?.residents, location]);

    return (
        <div className='container min-h-screen mb-6'>
            {isLoading && <Spinner />}
            {error && <NoSearch />}

            <Title>Location: <span className='text-green-400'>{data?.name || "Unknown"}</span></Title>
            <h5 className='text-center'>Dimension: {data?.dimension || "Unknown"}</h5>
            <h5 className='text-center'>Type: {data?.type || "Unknown"}</h5>
            <CharacterWrapper>
                <CharacterLeft>
                    <h4 className='text-center text-xl text-black font-semibold'>Pick Location</h4>
                    <div className='mt-2'>
                        <Select setItem={setLocation} name='Location' total={126} />
                    </div>
                </CharacterLeft>
                <CharacterRight>
                    <h4 className='font-semibold text-center mb-2 mt-4 sm:mt-0 text-black text-xl'>List of character who have been last seen in the location:</h4>
                    <CharacterCardContainer>
                        {characters.map(character => (
                            <CharacterCard key={character.id} id={character.id} name={character.name} status={character.status} species={character.species} image={character.image} location={character.location?.name} episode={character.episode[0]} />
                        ))}
                    </CharacterCardContainer>
                </CharacterRight>
            </CharacterWrapper>

        </div>
    )
}

export default Location