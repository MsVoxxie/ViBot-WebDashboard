import React from 'react';
import { Formik } from 'formik';
import { updateGuild } from '../../utils/api';
import { Box, Avatar, Heading, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

export function DashboardMenu({ config }) {
	return (
		//Servers
		<Box
			width='80px'
			height='100%'
			position='fixed'
			overflow='scroll'
			bg='secondary'
			css={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
			}}>
			<Heading
				justifyContent='center'
				display='flex'
				alignItems='center'
				boxSizing='border-box'
				boxShadow='0px 1px 25px 0px rgba(0,0,0,0.25)'
				padding='20px 0px'>
				<Avatar h='55px' w='55px' borderRadius='50px' />
			</Heading>
			{/* Content */}
			<Flex display='flex' direction='column' alignItems='center' padding='20px 0px'>
				<Avatar />
				<Avatar />
				<Avatar />
				<Avatar />
				<Avatar />
			</Flex>
		</Box>
	);
}
