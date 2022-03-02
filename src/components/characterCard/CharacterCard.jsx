import { useState, useEffect } from 'react';
import { Card, CardInfo, CardTitle, CardSection, CardSubtitle, CardRes, CartStatus } from './characterCard.elements';

const CharacterCard = ({ name, status, species, image, location, episode }) => {

    const [episodeRequest, setEpisodeRequest] = useState({});

    useEffect(() => {
        (async function () {
            let data = await fetch(episode).then(res => res.json());
            setEpisodeRequest(data);
        })();
    }, [episode]);

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
                    <CardRes>Episode {episodeRequest?.id}: {episodeRequest?.name}</CardRes>
                </CardSection>
            </CardInfo>
        </Card>
    )
}

export default CharacterCard