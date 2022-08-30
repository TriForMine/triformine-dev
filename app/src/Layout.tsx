import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import {useLoaderData} from "remix";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }} maxWidth="xl">
            <Navbar />
            <Box>
                {children}
            </Box>
            <Footer />
        </Container>
    );
}
