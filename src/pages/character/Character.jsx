import React from 'react'
import CharacterCard from '../../components/characterCard/CharacterCard'

const Character = () => {
    return (
        <div className='container'>

            <h1 className='mt-4 text-2xl text-black text-center'>Characters</h1>

            <div className='mt-4'>Seacrch</div>

            <div className='sm:flex'>

                <div className='bg-amber-200 mt-4 w-full sm:w-80 sm:mr-6'>Filters</div>

                <div className='mt-4 w-full sm:flex sm:flex-col'>

                    <div className='w-full flex flex-col sm:flex-row items-center justify-center flex-wrap gap-5'>

                        <CharacterCard name='Rick' status='Alive' species='HUman' image="https://rickandmortyapi.com/api/character/avatar/23.jpeg" location='eart' episode='erds' />

                        <CharacterCard name='Rick' status='Dead' species='HUman' image="https://rickandmortyapi.com/api/character/avatar/23.jpeg" location='eart' episode='erds' />

                        <CharacterCard name='Rick' status='unknown' species='HUman' image="https://rickandmortyapi.com/api/character/avatar/23.jpeg" location='eart' episode='erds' />

                        <CharacterCard name='Rick' status='Alive' species='HUman' image="https://rickandmortyapi.com/api/character/avatar/23.jpeg" location='eart' episode='erds' />

                        <CharacterCard name='Rick' status='Alive' species='HUman' image="https://rickandmortyapi.com/api/character/avatar/23.jpeg" location='eart' episode='erds' />

                    </div>

                    <div>Paginate</div>
                </div>
            </div>
        </div>
    )
}

export default Character