import React, { useState, useEffect } from "react";

function subscribeGitHubProfile(username, listener) {
  console.count(`subscribe for ${username}`);

  // mock "subscription" ...
  const intervalId = setInterval(async () => {
    console.count(`listener for ${username} called`);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const profile = await response.json();
    listener(profile);
  }, 3000);

  return () => {
    console.count(`unsubscribe for ${username}`);
    clearInterval(intervalId);
  };
}

function GitHubProfile({ username }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeGitHubProfile(username, (profile) => {
      setProfile(profile);
    });

    return () => {
      unsubscribe();
      setProfile(null);
    };
  }, [username]);

  if (profile === null) {
    return <p>loading ...</p>;
  }

  const { login, avatar_url } = profile;

  return (
    <>
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
    </>
  );
}

export default GitHubProfile;
