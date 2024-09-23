import React, { useState, useEffect } from 'react';
import player from '../assets/counterimg/counter-players-icon.svg';
import academie from '../assets/counterimg/counter-academies-icon.svg';
import coache from '../assets/counterimg/counter-coaches-icon.svg';
import team from '../assets/counterimg/counter-teams-icon.svg';


function Counter() {
  const [players, setPlayers] = useState(0);
  const [academies, setAcademies] = useState(0);
  const [coaches, setCoaches] = useState(0);
  const [teams, setTeams] = useState(0);

  useEffect(() => {
    const countUp = (setter, value, duration) => {
      let start = 0;
      const step = Math.ceil(value / duration * 50);
      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setter(value);
          clearInterval(interval);
        } else {
          setter(start);
        }
      }, 50);
    };

    countUp(setPlayers, 18000, 2000);
    countUp(setAcademies, 40000, 2000);
    countUp(setCoaches, 67000, 2000);
    countUp(setTeams, 3800, 2000);
  }, []);

  return (
    <section className="counter-section section-padding pb-0 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="counter">
              <figure>
                <img
                  src={player}
                  loading="lazy"
                  alt="Player Icon"
                  width={60}
                  height={60}
                />
              </figure>
              <h4>{players.toLocaleString()}+</h4>
              <h6>Players</h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="counter">
              <figure>
                <img
                  src={academie}
                  loading="lazy"
                  alt="Academy Icon"
                  width={60}
                  height={60}
                />
              </figure>
              <h4>{academies.toLocaleString()}+</h4>
              <h6>Academies</h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="counter">
              <figure>
                <img
                  src={coache}
                  loading="lazy"
                  alt="Coach Icon"
                  width={60}
                  height={60}
                />
              </figure>
              <h4>{coaches.toLocaleString()}+</h4>
              <h6>Coaches</h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="counter">
              <figure>
                <img
                  src={team}
                  loading="lazy"
                  alt="Teams Icon"
                  width={60}
                  height={60}
                />
              </figure>
              <h4>{teams.toLocaleString()}+</h4>
              <h6>Teams</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
