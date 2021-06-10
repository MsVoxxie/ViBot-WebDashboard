import { textDecoration } from "@chakra-ui/styled-system";
import { Link } from "react-router-dom";
export function MenuComponent({ guilds }) {
  return (
    <div className='body'>
      <main className='guildList'>
        {guilds.included.sort((a, b) => (a.name > b.name) ? 1 : -1).map((guild) => {
          return (
          <div key={guild.name} className='guildContainer'>
            <div className='guildItem'>
              <img className='guildAvatar' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="" />
              <span className='guildName'>{guild.name}</span>
            </div>
            <button className='guildButton dashboard'>
            <Link to={`/dashboard/${guild.id}`} className='noDeco'>View Dashboard</Link>
            </button>
          </div>
          );
        })}

        {guilds.excluded.sort((a, b) => (a.name > b.name) ? 1 : -1).map((guild) => {
          return (
          <div key={guild.name} className='guildContainer'>
            <div className='guildItem'>
              <img className='guildAvatar' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="" />
              <span className='guildName'>{guild.name}</span>
            </div>
            <button className='guildButton invite' onClick={() => (window.open("https://discord.com/oauth2/authorize?client_id=827375161665650689&scope=bot&permissions=2419453143", "name", "width=500, height=680"))}>Invite ViBot</button>
          </div>
          );
        })}
      </main> 
    </div>
  );
}
