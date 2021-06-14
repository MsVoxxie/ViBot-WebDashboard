import React from 'react';
import { Formik } from 'formik';
import { updateGuild } from '../../utils/api';
import { Box, Button, Flex, Heading, Input, Select, SimpleGrid, Text, useToast, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useColorModeValue } from '@chakra-ui/color-mode';

export function DashboardMenu({ config }) {

	const formBackground = useColorModeValue("gray.100", "gray.700");
	const toast = useToast()

	return (
		//Main Container
		<Flex justify='center' alignItems='center' direction='column'>
			<Flex justify='center' m={6}>
				<Breadcrumb separator='»'>
					<BreadcrumbItem>
						<BreadcrumbLink as={Link} to='/menu'>Guilds List</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink>{config.guildname}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Flex>
			<SimpleGrid columns={2} spacing="30px">

				{/* Prefix */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ prefix: config.prefix }}
							onSubmit={({ prefix }) => {
								updateGuild(config.guildid, 'prefix', prefix);
								toast({
									title: "Success!",
									description: `Prefix set to ${prefix}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Prefix</Heading>
										<Flex justify='center'>
											<Input ml={2} type="text" name="prefix" onChange={props.handleChange} defaultValue={config.prefix} />
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>What prefix should I respond to?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Guildcolor */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ guildcolor: config.guildcolor }}
							onSubmit={({ guildcolor }) => {
								updateGuild(config.guildid, 'guildcolor', guildcolor);
								toast({
									title: "Success!",
									description: `Guild Color set to ${guildcolor}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Guild Color</Heading>
										<Flex justify='center'>
											<Input ml={2} type="color" name="guildcolor" onChange={props.handleChange} defaultValue={config.guildcolor} />
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>What color should I use for embeds?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Audit */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ audit: config.audit }}
							onSubmit={({ audit }) => {
								updateGuild(config.guildid, 'audit', audit);
								toast({
									title: "Success!",
									description: `Audit set to ${audit}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Audit</Heading>
										<Flex justify='center'>
											<Select ml={2} name='audit' onChange={props.handleChange} placeholder={`Currently ${config.audit === true ? 'Enabled' : 'Disabled'}`}>
												<option value='true'>Enabled</option>
												<option value='false'>Disabled</option>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Should I Audit Changes?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Prune */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ prune: config.prune }}
							onSubmit={({ prune }) => {
								updateGuild(config.guildid, 'prune', prune);
								toast({
									title: "Success!",
									description: `Prune set to ${prune}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Prune</Heading>
										<Flex justify='center'>
											<Select ml={2} name='prune' onChange={props.handleChange} placeholder={`Currently ${config.prune === true ? 'Enabled' : 'Disabled'}`}>
												<option value='true'>Enabled</option>
												<option value='false'>Disabled</option>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Should I Prune my own messages?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Welcome */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ welcome: config.welcome }}
							onSubmit={({ welcome }) => {
								updateGuild(config.guildid, 'welcome', welcome);
								toast({
									title: "Success!",
									description: `Welcome set to ${welcome}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Welcome</Heading>
										<Flex justify='center'>
											<Select ml={2} name='welcome' onChange={props.handleChange} placeholder={`Currently ${config.welcome === true ? 'Enabled' : 'Disabled'}`}>
												<option value='true'>Enabled</option>
												<option value='false'>Disabled</option>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Should I Welcome new users?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Audit Channel */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ auditchannel: config.auditchannel }}
							onSubmit={({ auditchannel }) => {
								updateGuild(config.guildid, 'auditchannel', auditchannel);
								toast({
									title: "Success!",
									description: `Audit Channel id set to ${auditchannel.length > 0 ? auditchannel : 'Null'}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Audit Channel</Heading>
										<Flex justify='center'>
											<Select ml={2} name='auditchannel' onChange={props.handleChange} defaultValue={config.auditchannel}>
												{config.channels.map((objects, index) => {
													return (
														// Name of Category
														<optgroup key={objects.category} label={objects.category}>

															{objects.channels.map((channel, ch) => {
																// Name of Channel
																return (
																	channel.map((chan, i) => {
																		return (
																			<option key={chan.id} value={chan.id}>{chan.name}</option>
																		);
																	})
																);
															})}
														</optgroup>
													);
												})}
												<optgroup key='Clear' label='Reset Channel'><option key='none' value=''>Unset Channel</option></optgroup>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Where should I send Audits?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Welcome Channel */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ welcomechannel: config.welcomechannel }}
							onSubmit={({ welcomechannel }) => {
								updateGuild(config.guildid, 'welcomechannel', welcomechannel);
								toast({
									title: "Success!",
									description: `Welcome Channel id set to ${welcomechannel.length > 0 ? welcomechannel : 'Null'}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Welcome Channel</Heading>
										<Flex justify='center'>
											<Select ml={2} name='welcomechannel' onChange={props.handleChange} defaultValue={config.welcomechannel}>
												{config.channels.map((objects, index) => {
													return (
														// Name of Category
														<optgroup key={objects.category} label={objects.category}>

															{objects.channels.map((channel, ch) => {
																// Name of Channel
																return (
																	channel.map((chan, i) => {
																		return (
																			<option key={chan.id} value={chan.id}>{chan.name}</option>
																		);
																	})
																);
															})}
														</optgroup>
													);
												})}
												<optgroup key='Clear' label='Reset Channel'><option key='none' value=''>Unset Channel</option></optgroup>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Where should I send Welcomes?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>

				{/* Rules Channel */}
				<Box background={formBackground} rounded={6}>
					<Flex p={2} width='fit-content'>
						<Formik
							initialValues={{ ruleschannel: config.ruleschannel }}
							onSubmit={({ ruleschannel }) => {
								updateGuild(config.guildid, 'ruleschannel', ruleschannel);
								toast({
									title: "Success!",
									description: `Rules Channel id set to ${ruleschannel.length > 0 ? ruleschannel : 'Null'}`,
									status: "success",
									duration: 3000,
									isClosable: false,
								})
							}}>
							{
								(props) => (
									<form onSubmit={props.handleSubmit}>
										<Heading size='md'>Rules Channel</Heading>
										<Flex justify='center'>
											<Select ml={2} name='ruleschannel' onChange={props.handleChange} defaultValue={config.ruleschannel}>
												{config.channels.map((objects, index) => {
													return (
														// Name of Category
														<optgroup key={objects.category} label={objects.category}>

															{objects.channels.map((channel, ch) => {
																// Name of Channel
																return (
																	channel.map((chan, i) => {
																		return (
																			<option key={chan.id} value={chan.id}>{chan.name}</option>
																		);
																	})
																);
															})}
														</optgroup>
													);
												})}
												<optgroup key='Clear' label='Reset Channel'><option key='none' value=''>Unset Channel</option></optgroup>
											</Select>
											<Button type='submit'>Save</Button>
										</Flex>
										<Text>Where should I send new users to for rules?</Text>
									</form>
								)
							}
						</Formik>
					</Flex>
				</Box>
			</SimpleGrid>
		</Flex>
	);
}
