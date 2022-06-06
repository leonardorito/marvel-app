import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const Logo = styled.div`
    color: #fff;
`;

const ContentStyled = styled(Content)`
    padding: 0 50px;
    height: 100%;
`;

const MenuStyled = styled(Menu)`
    width: 100%;
`;

const items1 = [
  {
    name: 'Collaborators',
    url: '/',
  },
  {
    name: 'Characters',
    url: '/characters',
  }
].map((key) => ({
  key: key.name,
  label: <Link to={key.url}>{key.name}</Link>,
}));

const MainLayout = ({ children }) => (
  <Layout className="layout">
    <Header style={{ marginBottom: '30px', display: 'flex' }}>
      <Logo className="logo">Marvel</Logo>
      <MenuStyled theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <ContentStyled>
      {children}
    </ContentStyled>
  </Layout>
);

export default MainLayout;