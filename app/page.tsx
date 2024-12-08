'use client';

import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Text, Avatar } from '@nextui-org/react';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.Telegram.WebApp) {
        if (window.Telegram.WebApp.initDataUnsafe?.user) {
          setUserData(window.Telegram.WebApp.initDataUnsafe.user);
        }
      }
    }
  }, []);
  
  return (
    <Container
      css={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '$background',
      }}
    >
      {userData ? (
        <Card css={{ mw: "400px", padding: "1rem" }}>
          <Card.Header>
            <Row justify="center" align="center">
              <Avatar
                squared
                size="xl"
                src={`https://ui-avatars.com/api/?name=${userData.first_name}+${userData.last_name || ''}`}
                alt="User Avatar"
                css={{ marginRight: "1rem" }}
              />
              <Text h3>{userData.first_name} {userData.last_name || ''}</Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Text size="$lg">Username:</Text>
                <Text weight="bold">{userData.username || 'N/A'}</Text>
              </Col>
              <Col>
                <Text size="$lg">Language:</Text>
                <Text weight="bold">{userData.language_code || 'N/A'}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text size="$lg">Premium:</Text>
                <Text weight="bold">{userData.is_premium ? 'Yes' : 'No'}</Text>
              </Col>
              <Col>
                <Text size="$lg">ID:</Text>
                <Text weight="bold">{userData.id}</Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <Text h3>Loading...</Text>
      )}
    </Container>
  );
}
