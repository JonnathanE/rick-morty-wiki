const NoSearch = ({ search, errorMessage = '' }) => {
    return (
        <div className="flex flex-col mt-4">
            <div className='text-xl'>
                {search 
                ? <p className='text-gray-800'>We were unable to find results for <span className='ml-2 text-green-600'>{search}</span></p>
            : <p className='text-gray-800'>We did not find any results 😥</p>}
            </div>
            <p className='text-gray-700'>Please try your search again</p>
        </div>

    )
}

export default NoSearch