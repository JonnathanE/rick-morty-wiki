import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCharacter } from '../../api/apiCalls';
import {
    Card,
    CardInfo,
    CardInfoSection,
    CardSubtitle,
    CartStatus,
    CardImgContainer
} from './characterInfo.elements';
import Spinner from '../../components/spinner/Spinner';
import NoSearch from '../../components/noSearch/NoSearch';

const CharacterInfo = () => {

    const { id } = useParams();

    const [episodes, setEpisodes] = useState([]);

    const { data, error, isLoading } = useQuery(['simpleCharacter', id], () => getCharacter(id));

    useEffect(() => {
        (async function () {
            let response = await Promise.all(
                data?.episode.map(x => {
                    return fetch(x).then(res => res.json());
                })
            );
            setEpisodes(response);
        })();
    }, [data?.episode]);

    return (
        <div className='container'>
            <div className='flex justify-center mt-4'>
                {isLoading && <Spinner />}
                {error && <NoSearch />}
                {data &&
                    <Card>
                        <CardImgContainer>
                            <img src={data?.image} alt={data?.name} />
                        </CardImgContainer>

                        <CardInfo >
                            <h1 className='text-xl font-bold'>{data?.name}</h1>
                            <CardInfoSection>
                                <CartStatus status={data?.status}>{data?.status}</CartStatus>
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Specie: </CardSubtitle>
                                {data?.species}
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Type: </CardSubtitle>
                                {data?.type || 'Unknown'}
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Gender: </CardSubtitle>
                                {data?.gender}
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Origin: </CardSubtitle>
                                {data?.origin?.name}
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Location: </CardSubtitle>
                                {data?.location?.name}
                            </CardInfoSection>
                            <CardInfoSection>
                                <CardSubtitle>Episodes: </CardSubtitle>
                                <ul className='text-sm bg-white rounded-lg border border-gray-200 '>
                                    {episodes.map(episode => (
                                        <li key={episode.id} className='py-2 px-4 w-full border-b border-gray-200'>Episode {episode.id}: {episode.name}</li>
                                    ))}
                                </ul>
                            </CardInfoSection>
                        </CardInfo>
                    </Card>
                }
            </div>
        </div>
    )
}

export default CharacterInfo