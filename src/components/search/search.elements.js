import tw from 'twin.macro';

export const SearchContainer = tw.div`
    flex
    items-center
    justify-center
`;

export const SearchWrapper = tw.div`
    pt-2
    relative
    mx-auto
    text-gray-600
`;

export const SearchInput = tw.input`
    border-2
    border-gray-400
    bg-white
    h-10
    px-5
    pr-16
    rounded-lg
    text-sm
    focus:outline-none
`;

export const SearchButton = tw.button`
    absolute
    right-0
    top-0
    mt-5
    mr-4
`;