import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative bg-gray-800 flex flex-col justify-center items-center">
            <div className='mt-5 text-gray-300'>
                <p>Made with <span className='mr-2' role='link' aria-label='heart'>💚</span>by <a className='text-blue-500 hover:underline' href='https://jede-portfolio.web.app/' target='blank'>Jonnathan Espinoza</a></p>
            </div>
            <div className='flex'>
                <a href='https://github.com/JonnathanE/rick-morty-wiki' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:bg-gray-600 rounded-full hover:text-white transition-colors duration-300'>
                    <FaGithub />
                    <span className='sr-only'>Github</span>
                </a>
                <a href='https://twitter.com/JonnathanE1' target="blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'>
                    <FaTwitter />
                    <span className='sr-only'>Twitter</span>
                </a>
            </div>
        </div>
    )
}

export default Footer