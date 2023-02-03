async function getTopLanguages(username) {
  const response = await fetch(`https://api.github.com/users/SX-9/repos`);
  const repos = await response.json();

  const langCount = {};
  repos.forEach(repo => {
    if (repo.language in langCount) {
      langCount[repo.language]++;
    } else {
      langCount[repo.language] = 1;
    }
  });

  const sortedLangs = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  console.log("Your top languages are: ");
  sortedLangs.forEach(lang => console.log(`- ${lang[0]} (${lang[1]} repos)`));
}

getTopLanguages("username");

