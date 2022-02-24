import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import CharacterCard from '../../components/characterCard/CharacterCard';
import { getCharacters } from '../../api/apiCalls';
import Pagination from '../../components/pagination/Pagination';
import { CharacterWrapper, CharacterLeft, CharacterRight, CharacterCardContainer, CharacterPaginationContainer } from './character.elements';

const Character = () => {

    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching, isPreviousData } = useQuery(["characters", page], () => getCharacters(page), { keepPreviousData: true, staleTime: 5000 });
    const { info } = data || [];

    // Prefetch the next page!
    useEffect(() => {
        if (data?.info.next) {
            queryClient.prefetchQuery(['characters', page + 1], () => getCharacters(page + 1))
        }
    }, [data, page, queryClient]);

    return (
        <div className='container'>

            {/* 
                //TODO: create atoms for title 
            */}

            <h1 className='mt-4 text-2xl text-black text-center'>Characters</h1>

            {/* 
            // TODO: Create the search component
            */}

            <div className='mt-4'>Seacrch</div>

            <CharacterWrapper>

                {/* 
                // TODO: Create the filter component
                */}
                <CharacterLeft>Filters</CharacterLeft>

                <CharacterRight>
                    <CharacterCardContainer>
                        {isLoading && (<div>Loading...</div>)}
                        {error && <div>Error: {error.message}</div>}
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