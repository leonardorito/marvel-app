import React, { useEffect, useState } from 'react'
import { Card, Col, Divider, Row } from 'antd';
import httpService from '../http/httpService';
import MainLayout from '../layout/MainLayout'
import { Typography } from 'antd';

const { Text, Title } = Typography;

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const capamerica = await httpService.get('characters/capamerica')
        const ironman = await httpService.get('characters/ironman')
        setCharacters([capamerica.data, ironman.data]);
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <MainLayout>
            <Title level={2}>Characters in comics</Title>
            <Row gutter={30}>
                {characters.map(char => (
                    <Col span={8}>
                        <Card title={char.name}>
                            {char.characters.map(sidekick => (
                                <>
                                    <Text>{sidekick.character}: {sidekick.comics.map((comic, index) => (
                                        <Text>{comic}{index === sidekick.comics.length - 1 ? '' : ', '}</Text>
                                    ))}
                                    </Text>
                                    <Divider />
                                </>
                            ))}
                        </Card>
                    </Col>
                ))}
            </Row>
        </MainLayout>
    )
}

export default Characters