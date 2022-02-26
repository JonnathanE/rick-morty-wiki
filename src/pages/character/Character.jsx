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
import Filters from '../../components/filters/Filters';
import Accordion from '../../components/accordion/Accordion';

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

    const dataFiltersStatus = ['alive', 'dead', 'unknown']

    const dataFiltersSpecies = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']

    const dataFiltersGender = ['female', 'male', 'genderless', 'unknown']

    // Prefetch the next page!
    useEffect(() => {
        if (data?.info.next) {
            queryClient.prefetchQuery(['characters', page + 1, search, statusFilter, spaciesFilter, genderFilter],
                () => getCharacters(page + 1, search, statusFilter, spaciesFilter, genderFilter)
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
                <CharacterLeft>
                    <div>
                        <p className='text-center text-xl text-black'>Filter</p>
                        {/* 
                            // TODO: Implement the functionality to clear all filters
                        */}
                        <div className='text-center'>Clear Filter</div>
                        {/* 
                            // TODO: Add filter toggles
                        */}
                        <div>Togles</div>
                        <div>
                            {/* 
                            // TODO: Sterilize radio buttons
                            */}
                            <Accordion title='Satatus' name='status' filters={dataFiltersStatus} setFilter={setStatusFilter} setPage={setPage} />
                            <Accordion title='Species' name='species' filters={dataFiltersSpecies} setFilter={setSpaciesFilter} setPage={setPage} />
                            <Accordion title='Gender' name='gender' filters={dataFiltersGender} setFilter={setGenderFilter} setPage={setPage} />
                        </div>
                    </div>
                </CharacterLeft>

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