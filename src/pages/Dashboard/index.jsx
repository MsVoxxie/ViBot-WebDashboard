import React from "react";
import { getGuildConfig, getUserDetails } from "../../utils/api";
import { DashboardMenu } from "../../components";

export function Dashboard({
  history,
  match,
}) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    getUserDetails()
      .then(({ data }) => {
        setUser(data);
        return getGuildConfig(match.params.id);
      })
      .then(({ data }) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
        setLoading(false);
      });
  }, [history, match]);

  return (
    !loading && (
        <DashboardMenu user={user} config={config} />
    )
  );
}
