import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import httpService from '../http/httpService';
import MainLayout from '../layout/MainLayout'
import { Typography } from 'antd';

const { Text, Title } = Typography;

const Home = () => {
    const [collaborators, setCollaborators] = useState([]);

    const fetchCollaborators = async () => {
        const capamerica = await httpService.get('collaborators/capamerica')
        const ironman = await httpService.get('collaborators/ironman')
        setCollaborators([capamerica.data, ironman.data]);
    }

    useEffect(() => {
        fetchCollaborators();
    }, [])

    return (
        <MainLayout>
            <Title level={2}>Collaborators</Title>
            <Row gutter={30}>
                {collaborators.map(collab => (
                    <Col span={8}>
                        <Card title={collab.name}>
                            <Title level={3}>Editors</Title>
                            {collab.editors.map((item, index) => (
                                <Text>{item}{index === collab.editors.length - 1 ? '' : ', '}</Text>
                            ))}
                            <Title level={3}>Writers</Title>
                            {collab.writers.map((item, index) => (
                                <Text>{item}{index === collab.writers.length - 1 ? '' : ', '}</Text>
                            ))}
                            <Title level={3}>Colorists</Title>
                            {collab.colorists.map((item, index) => (
                                <Text>{item}{index === collab.colorists.length - 1 ? '' : ', '}</Text>
                            ))}
                        </Card>
                    </Col>
                ))}
            </Row>
        </MainLayout>
    )
}

export default Home