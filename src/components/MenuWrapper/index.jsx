// import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
export function MenuComponent({ guilds }) {
  return (
    <body>
      <div className="guild-container">
        <h1>Configure Guilds</h1>
        {guilds.included.map((guild) => (
          <div className="guild-item" key={guild.name}>
            <div className="guild">
              <h1>{guild.name}</h1>
              <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>
              {/* <img src={`https://cdn.discordapp.com/${guild.icon}`} alt='' /> */}
            </div>
          </div>
        ))}
      </div>

      <div className="bot-container">
        <h1>Configure Bot</h1>
        {guilds.excluded.map((guild) => (
          <div className="guild-item" key={guild.name}>
            <div className="guild">
              <h1>{guild.name}</h1>
              <a
                href={
                  "https://discord.com/oauth2/authorize?client_id=827375161665650689&scope=bot&permissions=2419453143"
                }
              >
                Invite Bot
              </a>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
}
