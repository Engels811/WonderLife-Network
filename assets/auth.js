function login(){
  const client_id="1440533345523204217";
  const redirect="https://engels811.github.io/wonderlife-dashboard/index.html";
  const url=`https://discord.com/oauth2/authorize?client_id=1440533345523204217&permissions=268504086&response_type=code&redirect_uri=https%3A%2F%2Fengels811.github.io%2Fwonderlife-dashboard%2Findex.html&integration_type=0&scope=identify+guilds+bot+guilds.members.read+applications.commands`;
  window.location.href=url;
}
function logout(){localStorage.removeItem("token");window.location.href="index.html";}
