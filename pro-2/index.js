document.addEventListener("click", handleActivity);
document.addEventListener("mousemove", handleActivity);
document.addEventListener("keydown", handleActivity);
function handleActivity() {
  const expire = authCheck();
  if (expire < 300) {
    fetch("http://localhost:3006/user")
      .then((response) => response.json())
      .then((data) => {
        jwtToken = data.token;
      })
      .catch((error) => console.error(error));
  }
}
function authCheck() {
  if (!jwtToken) {
    return -1;
  }
  const decodedToken = jwt_decode(jwtToken);
  const expTime = decodedToken.exp;
  const remainingTime = expTime - Date.now() / 1000;
  return remainingTime;
}
