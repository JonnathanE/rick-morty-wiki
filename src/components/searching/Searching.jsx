import './spinnerSearch.css';

const Searching = () => {
    return (
        <>
            <span className='bg-green-700 text-white px-3 py-1 rounded-lg flex items-center'>
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-5 w-5 mr-2"></div>
                Searching...
            </span>
        </>
    )
}

export default Searching