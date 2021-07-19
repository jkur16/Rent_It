const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".username-link").value.trim();
  const email = document.querySelector(".email-link").value.trim();
  const password = document.querySelector(".password-link").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/signedin");
    } else {
      alert(response.statusText);
    }
  }
};

var kraken = new Kraken({
  api_key: "5415d7a3f6a4dfaddcd4cb90ea8db4",
  api_secret: "Super secret secret",
});

var params = {
  url: "https://awesome-website.com/images/header.png",
  wait: true,
  resize: {
    width: 100,
    height: 75,
    strategy: "crop",
  },
};

kraken.url(params, function (status) {
  if (status.success) {
    console.log("Success. Optimized image URL: %s", status.kraked_url);
  } else {
    console.log("Fail. Error message: %s", status.message);
  }
});

document.querySelector("#signup").addEventListener("submit", signupFormHandler);
