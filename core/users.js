import SC from 'soundcloud';

export default function init (core) {
  var users = {
    login: login
  };

  return users;

  function login (id) {
    SC.initialize({
      client_id: id,
      redirect_uri: ""
    });
  }
}
