import React from 'react';
import { Formik } from 'formik';
import { Input, Button, Select } from '@chakra-ui/react';
import { updateGuild } from '../../utils/api';
import { setupOptions } from '../../utils/functions';

export function DashboardMenu({ config }) {
	return (
		<div className='menu-container'>
			<div className='menu-selectors'>
				<h1>Editing {config.guildname}</h1>
				{/* Prefix */}
				<h1>Prefix</h1>
				<Formik
					initialValues={{ prefix: config.prefix }}
					onSubmit={({ prefix }) => {
						updateGuild(config.guildid, 'prefix', prefix);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Input
								type='text'
								name='prefix'
								onChange={props.handleChange}
								defaultValue={config.prefix}
							/>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update prefix'
							/>
						</form>
					)}
				</Formik>

				{/* Guild Color */}
				<h1>Guild Color</h1>
				<Formik
					initialValues={{ guildcolor: config.guildcolor }}
					onSubmit={({ guildcolor }) => {
						updateGuild(config.guildid, 'guildcolor', guildcolor);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Input
								type='color'
								name='guildcolor'
								onChange={props.handleChange}
								defaultValue={config.guildcolor}
							/>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update guildcolor'
							/>
						</form>
					)}
				</Formik>

				{/* Prune */}
				<h1>Prune</h1>
				<Formik
					initialValues={{ prune: '' }}
					onSubmit={(prune) => {
						console.log(prune, config);
						updateGuild(config.guildid, 'prune', prune);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='prune'
								defaultValue={config.prune}
								onChange={props.handleChange}>
								<option value='true'>true</option>
								<option value='false'>false</option>
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update prune'
							/>
						</form>
					)}
				</Formik>

				{/* Audit */}
				<h1>Audit</h1>
				<Formik
					initialValues={{ audit: '' }}
					onSubmit={(audit) => {
						console.log(audit, config);
						updateGuild(config.guildid, 'audit', audit);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='audit'
								defaultValue={config.audit}
								onChange={props.handleChange}>
								<option value='true'>true</option>
								<option value='false'>false</option>
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update audit'
							/>
						</form>
					)}
				</Formik>

				{/* AuditChannel */}
				<h1>Audit Channel</h1>
				<Formik
					initialValues={{ auditchannel: '' }}
					onSubmit={(auditchannel) => {
						console.log(auditchannel, config);
						updateGuild(config.guildid, 'auditchannel', auditchannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='auditchannel'
								defaultValue={config.auditchannel}
								onChange={props.handleChange}>
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
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update auditchannel'
							/>
						</form>
					)}
				</Formik>

				{/* Welcome */}
				<h1>Welcome</h1>
				<Formik
					initialValues={{ welcome: '' }}
					onSubmit={(welcome) => {
						console.log(welcome, config);
						updateGuild(config.guildid, 'welcome', welcome);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='welcome'
								defaultValue={config.welcome}
								onChange={props.handleChange}>
								<option value='true'>true</option>
								<option value='false'>false</option>
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update welcome'
							/>
						</form>
					)}
				</Formik>

				{/* WelcomeChannel */}
				<h1>Welcome Channel</h1>
				<Formik
					initialValues={{ welcomechannel: '' }}
					onSubmit={(welcomechannel) => {
						console.log(welcomechannel, config);
						updateGuild(config.guildid, 'welcomechannel', welcomechannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='welcomechannel'
								defaultValue={config.welcomechannel}
								onChange={props.handleChange}>
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
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update welcomechannel'
							/>
						</form>
					)}
				</Formik>

				{/* RulesChannel */}
				<h1>Rules Channel</h1>
				<Formik
					initialValues={{ ruleschannel: '' }}
					onSubmit={(ruleschannel) => {
						console.log(ruleschannel, config);
						updateGuild(config.guildid, 'ruleschannel', ruleschannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<Select
								name='ruleschannel'
								defaultValue={config.ruleschannel}
								onChange={props.handleChange}>
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
							</Select>
							<Button
								type='submit'
								colorScheme='orange'
								children='Update ruleschannel'
							/>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
}
