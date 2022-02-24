import tw from 'twin.macro';

export const PaginationContainer = tw.div`
    bg-white 
    px-4 
    py-3 
    flex 
    items-center 
    justify-between 
    border-t 
    border-gray-200 
    sm:px-6
`;

export const PaginationMobil = tw.div`
    flex-1 
    flex 
    justify-between 
    sm:hidden
`;

export const PaginationPc = tw.div`
    hidden 
    sm:flex-1 
    sm:flex 
    sm:items-center 
    sm:justify-between
`;

export const Info = tw.p`
    text-sm 
    text-gray-700
`;

export const InfoBold = tw.span`
    font-medium
    mx-1
`;