import { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import CharacterCard from '../../components/characterCard/CharacterCard';
import { getCharacters } from '../../api/apiCalls';

const Character = () => {

    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching, isPreviousData } = useQuery(["characters", page], () => getCharacters(page), { keepPreviousData: true, staleTime: 5000 });

    // Prefetch the next page!
    useEffect(() => {
        if (data?.info.next) {
            queryClient.prefetchQuery(['characters', page + 1], () => getCharacters(page + 1))
        }
    }, [data, page, queryClient]);

    return (
        <div className='container'>

            <h1 className='mt-4 text-2xl text-black text-center'>Characters</h1>

            <div className='mt-4'>Seacrch</div>

            <div className='sm:flex'>

                <div className='bg-amber-200 mt-4 w-full sm:w-80 sm:mr-6'>Filters</div>

                <div className='mt-4 w-full sm:flex sm:flex-col'>

                    <div className='w-full flex flex-col sm:flex-row items-center justify-center flex-wrap gap-5'>
                        {isLoading && (<div>Loading...</div>)}
                        {error && <div>Error: {error.message}</div>}
                        {data &&
                            data.results?.map(character => (
                                <CharacterCard key={character.id} name={character.name} status={character.status} species={character.species} image={character.image} location={character.location?.name} episode={character.episode[0]} />
                            ))
                        }
                    </div>

                    <div>
                        <div>Current Page: {page}</div>
                        <button onClick={() => setPage(old => Math.max(old - 1, 1))}>Previous Page</button>
                        <button onClick={() => { setPage(old => (data?.info.next ? old + 1 : old)) }} disabled={isPreviousData || !data?.info.next}>Next Page</button>
                        {
                            // Since the last page's data potentially sticks around between page requests,
                            // we can use `isFetching` to show a background loading
                            // indicator since our `status === 'loading'` state won't be triggered
                            isFetching ? <span> Loading...</span> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character