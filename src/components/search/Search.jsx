import {
    SearchContainer,
    SearchWrapper,
    SearchInput,
    SearchButton
} from './search.elements'

const Search = ({ setSearch, setPage, placeholder }) => {

    const handleChange = e => {
        setPage(1);
        setSearch(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchInput
                    onChange={e => handleChange(e)}
                    type="search"
                    name="search"
                    placeholder={placeholder}
                />
                <SearchButton
                    onClick={e => onSubmit(e)}
                    type="submit"
                >
                    <svg className="text-gray-600 h-4 w-4 fill-current" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </SearchButton>
            </SearchWrapper>
        </SearchContainer>
    )
}

export default Search