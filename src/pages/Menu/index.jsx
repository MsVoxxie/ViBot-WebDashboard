import React from "react";
import { MenuComponent } from "../../components";
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
        history.push("/");
        setLoading(false);
      });
  }, [history]);

  return (
    loading && (
      <h1>t</h1>
    ),
    !loading && (
        <MenuComponent guilds={guilds} user={user} />    
    )
  );
}
