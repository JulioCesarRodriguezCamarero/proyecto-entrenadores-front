import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default Layout;