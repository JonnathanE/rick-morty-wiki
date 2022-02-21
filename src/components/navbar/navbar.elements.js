import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = tw.div`
    w-full
    h-20
    md:h-16
    bg-gray-700
`;

export const Wrapper = tw.div`
    w-full
    h-full
    max-w-7xl
    pl-6
    pr-6
    pt-4
    sm:pt-0
    flex
    flex-wrap
    justify-between
    items-center
    /*
    max-width: 1300px;
    */
`;

export const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
        text-lg
    `}
    img {
        ${tw`
            mr-2
        `}
    }
    p {
        &:nth-child(2) {
            ${tw`
                mr-2
                text-white
            `}
        }
        &:nth-child(3) {
            font-size: 1.5rem;
            font-weight: 500;
            ${tw`
                text-green-400
            `}
        }
    }
`;

export const Menu = tw.ul`
    w-full
    h-auto
    sm:w-auto
    sm:h-full
    list-none
    flex
    justify-center
    items-center
`;

export const MenuItem = tw.li`
    text-2xl
    sm:text-base
    text-white
    hover:text-green-400
    font-bold
    sm:font-normal
    hover:border-b-2
    hover:border-b-green-400
    mb-3.5
    sm:mb-0
    sm:mr-4
    cursor-pointer
`;