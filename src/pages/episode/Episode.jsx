import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getEpisode } from '../../api/apiCalls';
import Title from '../../atoms/title/Title';
import {
    CharacterWrapper,
    CharacterLeft,
    CharacterRight,
    CharacterCardContainer,
} from './episode.elements';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Select from '../../components/select/Select';
import Spinner from '../../components/spinner/Spinner';
import NoSearch from '../../components/noSearch/NoSearch';

const Episode = () => {

    const [episode, setEpisode] = useState(1);
    const [characters, setCharacters] = useState([]);

    const { data, error, isLoading } = useQuery(["episode", episode], () => getEpisode(episode));

    useEffect(() => {
        (async function () {
            let results = await Promise.all(
                data.characters.map(x => {
                    return fetch(x).then(res => res.json());
                })
            );
            setCharacters(results);
        })();
    }, [data?.characters, episode]);

    return (
        <div className='container'>
            {isLoading && <Spinner />}
            {error && <NoSearch />}
            <Title>Episode: <span className='text-green-400'>{data?.name || "Unknown"}</span></Title>
            <h5 className='text-center'>Air Date: {data?.air_date || "Unknown"}</h5>
            <CharacterWrapper>
                <CharacterLeft>
                    <h4 className='text-center text-xl text-black font-semibold'>Pick Episodes</h4>
                    <div className='mt-2'>
                        <Select setItem={setEpisode} name='Episode' total={51} />
                    </div>
                </CharacterLeft>
                <CharacterRight>
                    <h4 className='font-semibold text-center mb-2 mt-4 sm:mt-0 text-black text-xl'>List of characters who have been seen in the episode:</h4>
                    <CharacterCardContainer>
                        {characters?.map(character => (
                            <CharacterCard key={character.id} name={character.name} status={character.status} species={character.species} image={character.image} location={character.location?.name} episode={character.episode[0]} />
                        ))}
                    </CharacterCardContainer>
                </CharacterRight>
            </CharacterWrapper>
        </div>
    )
}

export default Episode