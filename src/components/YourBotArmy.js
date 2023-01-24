import React from "react";
import UserBots from "./UserBots";

function YourBotArmy({mybots, userBots, setUserBots}) {
  // create a reacts element array to render all user selected bots
  if(mybots){
  const displayUserBotSpecs = mybots.map(bot => {
    return <UserBots key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots}/>
  })
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          { displayUserBotSpecs }
        </div>
      </div>
    </div>
  );
}else{
  return(
    <p>Select a bot to add it to your collection</p>
  )
}

  
}

export default YourBotArmy;
