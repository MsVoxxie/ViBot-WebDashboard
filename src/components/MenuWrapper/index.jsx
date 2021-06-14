import React from 'react';
import { Avatar, Box, Button, Center, Flex, Heading, Spacer } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from "react-router-dom";

export function MenuComponent({ guilds }) {

  const formBackground = useColorModeValue("gray.200", "gray.700");

  if(guilds.included.length === 0 && guilds.excluded.length === 0){
    return (
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <Box bg={formBackground} rounded={6}>
            <Center m={2}>
              Unfortunately you have no guilds with the correct permissions. (Manage Guild)
            </Center>
        </Box>
      </Flex>
      )
  }else{
    return (
      <Flex justify='center' alignItems='center' direction='column'>
      <Flex justify='center' m={6}>
        <Heading>Please Select a Guild</Heading>
      </Flex>
      {guilds.included.sort((a, b) => (a.name > b.name) ? 1 : -1).map((guild) => {
        return (
          <Flex mb={2} justify='center'>
              <Box bg={formBackground} rounded={6} minWidth='450px' width='40vw'>
                  <Flex justify='center' alignItems='center' justifyContent='space-around'>
                      <Avatar m={2} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} />
                      <Heading size='md'>{guild.name}</Heading>
                      <Spacer/>
                      <Button m={2}>
                        <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>
                      </Button>
                  </Flex>
              </Box>
          </Flex>
        );
      })}

      {guilds.excluded.sort((a, b) => (a.name > b.name) ? 1 : -1).map((guild) => {
        return (
          <Flex mb={2} justify='center'>
              <Box bg={formBackground} rounded={6} minWidth='450px' width='40vw'>
                  <Flex justify='center' alignItems='center' justifyContent='space-around'>
                      <Avatar m={2} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} />
                      <Heading size='md'>{guild.name}</Heading>
                      <Spacer/>
                      <Button m={2} onClick={() => (window.open("https://discord.com/oauth2/authorize?client_id=827375161665650689&scope=bot&permissions=2419453143", "name", "width=500, height=680"))}>Invite ViBot</Button>
                  </Flex>
              </Box>
          </Flex>
        );
      })}
    </Flex>
  )
  }
}
