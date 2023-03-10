import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot, userBots, setUserBots }) {
  function viewDetailsOnClick(){
    let clickedBot = {
      "id": `${bot.id}`,
      "name": `${bot.name}`,
      "health": `${bot.health}`,
      "damage": `${bot.damage}`,
      "armor": `${bot.armor}`,
      "bot_class": `${bot.bot_class}`,
      "catchphrase": `${bot.catchphrase}`,
      "avatar_url": `${bot.avatar_url}`
    }
    setUserBots(([...userBots, clickedBot]))   
  }
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("connect this to a function that shows all bots")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => viewDetailsOnClick() }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
