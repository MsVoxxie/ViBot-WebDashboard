import React from 'react';
import { MenuComponent } from '../../components';
import { getGuilds, getUserDetails } from '../../utils/api';

export function Menu( {
    history,
}) {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [guilds, setGuilds] = React.useState([]);

    React.useEffect( () => {
        getUserDetails()
        .then(({data}) => {
            setUser(data);
            console.log(user);
            setLoading(false);
            return getGuilds()
        }).then(({data}) => {
            setGuilds(data)
            console.log(data);
        }).catch((err) => {
            history.push('/')
            setLoading(false);
        })
    }, []) 

    return !loading && (
        <div>
            <h1>Menu Page</h1>
            <MenuComponent guilds ={guilds}/>
        </div>
    );
}