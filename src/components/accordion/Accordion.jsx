import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, name, filters, filterName, setFilter, setPage, isOpen = false }) => {

    const [clicked, setClicked] = useState(isOpen);

    const clickedInput = item => {
        setPage(1);
        setFilter(item);
    }

    // const toggle = index => {
    //     if (clicked === index) {
    //         // if clicked question is already active, then close it
    //         return setClicked(null)
    //     }
    //     setClicked(index);
    // }

    return (
        <IconContext.Provider value={{ color: '#4ade80', size: '25px' }}>
            <h2 onClick={() => setClicked(!clicked)}>
                <button type="button" className="flex items-center justify-between p-5 w-full font-medium text-left border border-gray-200 text-gray-900 bg-white">
                    <span className="flex items-center">
                        {title}
                    </span>
                    {filterName && <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>{filterName}</span>}
                    {clicked ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </h2>
            {clicked
                ? <div>
                    <div className="p-5 border border-gray-200">
                        <div className="mt-2">
                            {filters?.map((filter, index) => (
                                <label className="inline-flex items-center" key={index}>
                                    <input type="radio" onClick={() => clickedInput(filter)} name={name} id={`${name}-${index}`} className='hidden peer' />
                                    <span className="ml-2 mb-2 px-3 py-1 rounded-lg border border-green-400 hover:bg-green-200 peer-checked:bg-green-400 cursor-pointer" htmlFor={`${name}-${index}`}>{filter}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                : null
            }

        </IconContext.Provider>
    )
}

export default Accordion