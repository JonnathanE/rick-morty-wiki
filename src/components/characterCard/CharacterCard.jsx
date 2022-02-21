import { Card, CardInfo, CardTitle, CardSection, CardSubtitle, CardRes, CartStatus } from './characterCard.elements';

const CharacterCard = ({ name, status, species, image, location, episode }) => {
    return (
        <Card>
            <img src={image} alt={name} className='w-full' />
            <CardInfo>
                <CardTitle>{name}</CardTitle>
                <div className='flex mt-2'>
                    <CartStatus status={status}>{status}</CartStatus>
                    <p>{species}</p>
                </div>
                <CardSection>
                    <CardSubtitle>Last known location:</CardSubtitle>
                    <CardRes>{location}</CardRes>
                </CardSection>
                <CardSection>
                    <CardSubtitle>First seen in:</CardSubtitle>
                    <CardRes>{episode}</CardRes>
                </CardSection>
            </CardInfo>
        </Card>
    )
}

export default CharacterCard