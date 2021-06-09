import React from 'react';
import { Formik } from 'formik';
import { Input, Button } from '@chakra-ui/react';
import { updateGuild } from '../../utils/api';

export function DashboardMenu({
    config,
}){

return(
    <Formik
    initialValues={{prefix: config.prefix}}
    onSubmit={({prefix}) => {
        updateGuild(config.guildid, 'prefix', prefix)
        console.log(config.guildid);
    }}
    >
        {
            (props) => (
                <form onSubmit={props.handleSubmit}>
                    <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={config.prefix} />
                    <Button type="submit" colorScheme="orange" children="Update Prefix" />
                </form>
            )
        }
    </Formik>
    )
}