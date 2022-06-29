import React from "react";
import { MenuComponent } from "../../components";
import { Flex, Spinner, Center } from '@chakra-ui/react';
import { getGuilds, getUserDetails } from "../../utils/api";

export function Menu({ 
  history,
  }) {

  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [guilds, setGuilds] = React.useState({});

  React.useEffect(() => {
    getUserDetails()
      .then(({ data }) => {
        setUser(data)
        return getGuilds();
      })
      .then(({ data }) => {
        setGuilds(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
        setLoading(false);
      });
  }, [history]);

  return (
    !loading && (
        <MenuComponent guilds={guilds} user={user} />    
    )
  );
}
