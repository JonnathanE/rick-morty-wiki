import tw, {styled} from 'twin.macro';

export const Card = tw.div`
w-72
sm:w-[700px]
overflow-hidden
sm:flex
`;

export const CardImgContainer = tw.div`

`;

export const CardInfo = tw.div`
p-2 sm:ml-4
`;

export const CardInfoSection = tw.div`
mt-2
`;

export const CardSubtitle = tw.span`
text-gray-600
`;

export const CartStatus = styled.span`
    ${tw`
        inline-block  
        rounded-full 
        px-3 
        py-1 
        text-sm 
        font-semibold  
        mr-2 
        mb-2
    `}
    ${({ status }) => status === 'Alive' && tw`bg-green-600 text-white`}
    ${({ status }) => status === 'Dead' && tw`bg-red-600 text-white`}
    ${({ status }) => status === 'unknown' && tw`bg-gray-200 text-gray-700`}
`;
