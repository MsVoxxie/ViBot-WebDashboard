import React from 'react';
import { Button } from '@chakra-ui/react'

export function Landing(props) {
    const login = () => window.location.href = 'http://192.168.0.110:3001/api/auth/discord/';
    return(
        <Button
        onClick={login}
        colorScheme="red">
            Login</Button>
    )
}