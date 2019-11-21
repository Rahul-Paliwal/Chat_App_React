import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';
const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div >
     <div className="chatinfo_container">
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      </div>
      {
      users
        ? ( 
          <div>
            <div className="chatinfo_container">
            <h1 aria-label="emoji">People currently chatting:❤️</h1>
            </div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        :null
                }
  
    </div>
    
  </div>
);
export default TextContainer;