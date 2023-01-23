import axios from "axios";
import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function UserBots({ bot, userBots, setUserBots}) {
    // function that accesses a users collection of array and removes a clicked bot
    function removeUserBot(arrayOfUserBots){
        let id = bot.id;
        const newBotArr = userBots.filter((bot) => bot.id !== id);
        setUserBots(newBotArr)        
        console.log(userBots);
    }
    function dischargebot(id=`${bot.id}`){
        console.log(id);
        axios
        .delete(`http://localhost:8002/bots/${id}`)
        .then(alert("bot deleted"))        
    }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // onClick={() =>{removeUserBot(`${userBots}`)}}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} onClick={() =>{removeUserBot(`${userBots}`)}}/>
          
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => {dischargebot()} }
              >
                X
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserBots;
