import React from 'react';
import PropTypes from 'prop-types';
// import FriendListItem from './FriendListItem';
// import friends from './friends.json';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
