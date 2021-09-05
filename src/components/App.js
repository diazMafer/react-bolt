import React from 'react';
import styled from 'styled-components';
import Topbar from './topbar/Topbar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background: #F5F8FE;
`;

const App = () => (
    <Container>
        <Topbar></Topbar>
    </Container>
);

export default App;
