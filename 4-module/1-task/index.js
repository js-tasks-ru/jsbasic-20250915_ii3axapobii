function makeFriendsList(friends) {
  let friendsStr = friends.map(item => `${item.firstName} ${item.lastName}`);
  let friendsList = document.createElement('UL');
  for (let friendItem of friendsStr){
    let friendLi = document.createElement('LI');
    friendLi.textContent = friendItem;
    friendsList.appendChild(friendLi);
  }
  return friendsList;

}