import React from 'react';
import PropTypes from 'prop-types';
import style from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={style.friends}>
      <ul className={style.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={style.friendsItem} key={id}>
            <span className={`${style.friendsStatus} ${style[isOnline]}`}>
              {isOnline}
            </span>
            <img className={style.avatar} src={avatar} alt={name} />
            <p className={style.friendsName}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
