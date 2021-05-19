export const pusherConfig = {
  broadcaster: 'pusher',
  key: '123',
  wsHost: window.location.hostname,
  wsPort: 6001,
  cluster: 'mt1',
  forceTLS: false,
  // used for
  // authEndpoint: 'http://' + window.location.hostname + '/api/broadcasting/auth',
  // auth: {
  //   headers: {
  //      Authorization: 'Bearer ' + token,
  //   }
  // }
}
