import { Link } from 'react-router-dom';
import Picture from '../../images/img/Rick-And-Morty-Picture.png';

const Home = () => {
    return (
        <div className='relative h-screen'>
            <div className='container flex flex-col-reverse sm:flex-row items-center gap-8 mt-14 sm:mt-2'>

                <div className='flex flex-1 flex-col items-center lg:items-start sm:ml-8'>

                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>Rick and Morty Wiki</h1>

                    <span className='text-xl text-center lg:text-left mb-6 text-green-600'>"Wubba Lubba Dub Dub"</span>

                    <p className='text-lg text-center lg:text-left mb-6'>On the next page you can search for the different characters from the Rick and Morty series.</p>

                    <p className='mb-6 text-gray-600'>Information is obtained from <a href='https://rickandmortyapi.com/' target={'blank'} className='underline text-blue-400'>The Rick and Morty API</a></p>

                    <div className=''>
                        <Link to='/character' className='btn text-lg bg-green-600 hover:bg-green-500 text-white'>Search Characters</Link>
                    </div>

                </div>
                <div className='flex flex-1 justify-center'>
                    <img src={Picture} alt="" className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4' />
                </div>
            </div>
        </div>
    )
}

export default Home