import React from "react";
import { getGuildConfig, getUserDetails } from "../../utils/api";
import { DashboardMenu } from "../../components";

export function Dashboard({
  history,
  match
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
        history.push("/");
        setLoading(false);
      });
  });

  return (
    !loading && (
      <div>
        <DashboardMenu user={user} config={config} />
      </div>
    )
  );
}
