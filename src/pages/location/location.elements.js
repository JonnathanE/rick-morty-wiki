import tw from 'twin.macro';

export const CharacterWrapper = tw.div`
    sm:flex mt-4
`;

export const CharacterLeft = tw.div`
bg-white w-full sm:w-96 sm:mr-6
`;

export const CharacterRight = tw.div`
w-full sm:flex sm:flex-col
`;

export const CharacterCardContainer = tw.div`
w-full flex flex-col sm:flex-row items-center justify-center flex-wrap gap-5
`;