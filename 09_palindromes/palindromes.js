const palindromes = function (word) {
  if (
    word
      .toLowerCase()
      .replace(/[/\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split("")
      .join("") ===
    word
      .toLowerCase()
      .replace(/[/\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
