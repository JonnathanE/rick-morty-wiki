import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getCharacters } from '../../api/apiCalls';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Pagination from '../../components/pagination/Pagination';
import {
    CharacterWrapper,
    CharacterLeft,
    CharacterRight,
    CharacterCardContainer,
    CharacterPaginationContainer
} from './character.elements';
import Search from '../../components/search/Search';
import Title from '../../atoms/title/Title';

const Character = () => {

    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const { data, error, isLoading, isFetching, isPreviousData } = useQuery(["characters", page, search],
        () => getCharacters(page, search),
        { keepPreviousData: true, staleTime: 5000 }
    );

    const { info } = data || {};

    // Prefetch the next page!
    useEffect(() => {
        if (data?.info.next) {
            queryClient.prefetchQuery(['characters', page + 1, search],
                () => getCharacters(page + 1, search)
            )
        }
    }, [data, page, queryClient, search]);

    return (
        <div className='container'>

            <Title>Characters</Title>

            <div className='mt-4'>
                <Search setSearch={setSearch} setPage={setPage} placeholder="Search for characters" />
            </div>

            <CharacterWrapper>
                {/* 
                // TODO: Create the filter component
                */}
                <CharacterLeft>Filters</CharacterLeft>

                <CharacterRight>
                    {/**
                     // TODO: CREATE THE COMPONENT FOR LOADAING, FETCHING AND ERROR
                     */}
                    {isLoading && (<div>Loading...</div>)}
                    {isFetching && (<div>Fetching...</div>)}
                    {error && <div>My Error: {error.message}</div>}
                    <CharacterCardContainer>
                        {data &&
                            data.results?.map(character => (
                                <CharacterCard key={character.id} name={character.name} status={character.status} species={character.species} image={character.image} location={character.location?.name} episode={character.episode[0]} />
                            ))
                        }
                    </CharacterCardContainer>
                </CharacterRight>
            </CharacterWrapper>

            <CharacterPaginationContainer>
                <Pagination info={info} page={page} setPage={setPage} isNext={data?.info.next} isPreviousData={isPreviousData} dataLength={20} isFetching={isFetching} />
            </CharacterPaginationContainer>
        </div>
    )
}

export default Character