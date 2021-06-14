import React from "react";
import { LandingComponent } from "../../components";
import { getBotDetails, getUserDetails } from "../../utils/api";

export function Landing({
  history,
}) {

  const [user, setUser] = React.useState(null);
  const [bot, setBot] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBotDetails()
    .then(({ data }) => {
      setBot(data);
      return getUserDetails();
    })
    .then(({ data }) => {
      setUser(data);
      history.push('/menu')
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [history]);

  return (
    !loading && (
      <LandingComponent bot={bot} user={user} />
    )
  );
}
