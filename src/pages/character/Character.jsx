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
import Accordion from '../../components/accordion/Accordion';
import Spinner from '../../components/spinner/Spinner';
import NoSearch from '../../components/noSearch/NoSearch';

const Character = () => {

    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [spaciesFilter, setSpaciesFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    const { data, error, isLoading, isFetching, isPreviousData } = useQuery(
        ["characters", page, search, statusFilter, spaciesFilter, genderFilter],
        () => getCharacters(page, search, statusFilter, spaciesFilter, genderFilter),
        { keepPreviousData: true, staleTime: 5000 }
    );

    const { info } = data || {};

    const dataFiltersStatus = ['Alive', 'Dead', 'Unknown']
    const dataFiltersSpecies = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']
    const dataFiltersGender = ['Female', 'Male', 'Genderless', 'Unknown']

    const clearAllFilters = () => {
        setStatusFilter('');
        setSpaciesFilter('');
        setGenderFilter('');
        setPage(1);
        window.location.reload(false);
    }

    // Prefetch the next page!
    useEffect(() => {
        if (data?.info.next) {
            queryClient.prefetchQuery(['characters', page + 1, search, statusFilter, spaciesFilter, genderFilter],
                () => getCharacters(page + 1, search, statusFilter, spaciesFilter, genderFilter)
            )
        }
    }, [data, page, queryClient, search, statusFilter, spaciesFilter, genderFilter]);

    return (
        <div className='container'>
            <Title>Characters</Title>
            <div className='mt-4'>
                <Search setSearch={setSearch} setPage={setPage} placeholder="Search for characters" />
            </div>
            <CharacterWrapper>
                <CharacterLeft>
                    <div>
                        <p className='text-center text-xl text-black font-semibold'>Filters</p>
                        <div onClick={clearAllFilters} className='text-center cursor-pointer underline text-blue-500 mb-3' >Clear Filters</div>
                        <div>
                            <Accordion title='Satatus' name='status' filters={dataFiltersStatus} filterName={statusFilter} setFilter={setStatusFilter} setPage={setPage} isOpen={true} />
                            <Accordion title='Species' name='species' filters={dataFiltersSpecies} filterName={spaciesFilter} setFilter={setSpaciesFilter} setPage={setPage} />
                            <Accordion title='Gender' name='gender' filters={dataFiltersGender} filterName={genderFilter} setFilter={setGenderFilter} setPage={setPage} />
                        </div>
                    </div>
                </CharacterLeft>
                <CharacterRight>
                    {isFetching && (<Spinner />)}
                    <CharacterCardContainer>
                        {error && <NoSearch search={search} errorMessage={error.message} />}
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