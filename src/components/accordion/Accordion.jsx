import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, name, filters, setFilter, setPage }) => {

    const [clicked, setClicked] = useState(false);

    const clickedInput = item => {
        setPage(1);
        setFilter(item);
    }

    const toggle = index => {
        if (clicked === index) {
            // if clicked question is already active, then close it
            return setClicked(null)
        }
        setClicked(index);
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <h2 onClick={() => setClicked(!clicked)}>
                <button type="button" className="flex items-center justify-between p-5 w-full font-medium text-left border border-gray-200 text-gray-900 bg-white">
                    <span className="flex items-center">
                        {title}
                    </span>
                    {clicked ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </h2>
            {clicked
                ? <div>
                    <div className="p-5 border border-gray-200">
                        <div className="mt-2">
                            {filters?.map((filter, index) => (
                                <label className="inline-flex items-center" key={index}>
                                    <input type="radio" onClick={() => clickedInput(filter)} name={name} id={`${name}-${index}`} />
                                    <span className="ml-2" for={`${name}-${index}`}>{filter}</span>
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