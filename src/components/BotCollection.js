import React from "react";
import BotCard from "./BotCard";

function BotCollection({botCollection, userBots, setUserBots}) {
  // use cards to display all fetched bots to the collection area
  const displayBotCards = botCollection.map(bot => {
    return <BotCard key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots}/>
  })
  //function that will add a clicked bot to the user bots army
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*  Collection of all bots */}
        {displayBotCards}
      </div>
    </div>
  );
}

export default BotCollection;
