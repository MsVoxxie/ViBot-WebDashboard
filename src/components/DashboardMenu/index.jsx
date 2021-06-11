import React from 'react';
import { Formik } from 'formik';
import { updateGuild } from '../../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function DashboardMenu({ config }) {
	return (
	<div className='box'>
		<h1>Editing {config.guildname}</h1>
		<div className='menu-container'>
			<div className='col'>
				{/* Prefix */}
			<div className='menu-item'>
				<h2>Prefix</h2>
				<Formik
					initialValues={{ prefix: config.prefix }}
					onSubmit={({ prefix }) => {
						updateGuild(config.guildid, 'prefix', prefix);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<input className='inputField' type='text' name='prefix' onChange={props.handleChange} defaultValue={config.prefix} />
							<button type='submit' onClick={() => toast.success('✅ Updated Prefix', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Prefix</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
			</div>

				{/* Prune */}
				<div className='menu-item'>
				<h2>Prune</h2>
				<Formik
					initialValues={{ prune: config.prune }}
					onSubmit={(prune) => {
						updateGuild(config.guildid, 'prune', prune);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<select name='prune' defaultValue={config.prune} onChange={props.handleChange}>
								<option value='true'>true</option>
								<option value='false'>false</option>
							</select>
							<button type='submit' onClick={() => toast.success('✅ Updated Prune', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Prune</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
				</div>

				{/* Audit */}
				<div className='menu-item'>
				<h2>Audit</h2>
				<Formik
					initialValues={{ audit: config.audit }}
					onSubmit={(audit) => {
						updateGuild(config.guildid, 'audit', audit);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
						<select name='audit' defaultValue={config.audit} onChange={props.handleChange}>
							<option value='true'>true</option>
							<option value='false'>false</option>
						</select>
						<button type='submit' onClick={() => toast.success('✅ Updated Audit', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Audit</button>
							<ToastContainer/>
					</form>
					)}
				</Formik>
				</div>

				{/* Welcome */}
				<div className='menu-item'>
				<h2>Welcome</h2>
				<Formik
					initialValues={{ welcome: config.welcome }}
					onSubmit={(welcome) => {
						updateGuild(config.guildid, 'welcome', welcome);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
						<select name='welcome' defaultValue={config.welcome} onChange={props.handleChange}>
							<option value='true'>true</option>
							<option value='false'>false</option>
						</select>
						<button type='submit' onClick={() => toast.success('✅ Updated Welcome', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Welcome</button>
							<ToastContainer/>
					</form>
					)}
				</Formik>
				</div>
			</div>

			<div className='col'>

			{/* Guild Color */}
			<div className='menu-item'>
				<h2>Guild Color</h2>
				<Formik
					initialValues={{ guildcolor: config.guildcolor }}
					onSubmit={({ guildcolor }) => {
						updateGuild(config.guildid, 'guildcolor', guildcolor);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<input className='colorPicker' type='color' name='guildcolor' onChange={props.handleChange} defaultValue={config.guildcolor} />
							<button type='submit' onClick={() => toast.success('✅ Updated Guildcolor', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Guildcolor</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
			</div>

				{/* AuditChannel */}
				<div className='menu-item'>
				<h2>Audit Channel</h2>
				<Formik
					initialValues={{ auditchannel: '' }}
					onSubmit={(auditchannel) => {
						updateGuild(config.guildid, 'auditchannel', auditchannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<select name='auditchannel' defaultValue={config.auditchannel} onChange={props.handleChange}>
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
							</select>
							<button type='submit' onClick={() => toast.success('✅ Updated Auditchannel', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Auditchannel</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
				</div>

				{/* WelcomeChannel */}
				<div className='menu-item'>
				<h2>Welcome Channel</h2>
				<Formik
					initialValues={{ welcomechannel: '' }}
					onSubmit={(welcomechannel) => {
						updateGuild(config.guildid, 'welcomechannel', welcomechannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<select name='welcomechannel' defaultValue={config.welcomechannel} onChange={props.handleChange}>
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
							</select>
							<button type='submit' onClick={() => toast.success('✅ Updated Welcomechannel', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Welcomechannel</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
				</div>

				{/* RulesChannel */}
				<div className='menu-item'>
				<h2>Rules Channel</h2>
				<Formik
					initialValues={{ ruleschannel: '' }}
					onSubmit={(ruleschannel) => {
						updateGuild(config.guildid, 'ruleschannel', ruleschannel);
					}}>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<select name='ruleschannel' defaultValue={config.ruleschannel} onChange={props.handleChange}>
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
							</select>
							<button type='submit' onClick={() => toast.success('✅ Updated Ruleschannel', {position: "top-left",autoClose: 3000,hideProgressBar: true,closeOnClick: false,pauseOnHover: false,draggable: false,progress: undefined,})}>Update Ruleschannel</button>
							<ToastContainer/>
						</form>
					)}
				</Formik>
				</div>
			</div>
		</div>
		</div>
	);
}
