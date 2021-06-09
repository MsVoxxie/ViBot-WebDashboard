import { Button } from '@chakra-ui/react'
export function MenuComponent( {guilds}) {

    return (
        <div>
            {guilds.map((guild) => (
                <div>
                    <Button colorScheme="blue" onClick={() => {
                        window.location.href=`http://192.168.0.110:3000/dashboard/${guild.id}/`
                    }}>
                        <h1>Configure {guild.name}</h1>
                    </Button>
                </div>
            ))}
        </div>
    );
}