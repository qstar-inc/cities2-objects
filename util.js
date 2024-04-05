function trimString(str) {
  return str.replace(
    /^[\s\uFEFF\xA0]*<br\s*\/?>|<br\s*\/?>[\s\uFEFF\xA0]*$/gi,
    ""
  );
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${parseInt(day)}${
    ["th", "st", "nd", "rd"][parseInt(day) % 10] || "th"
  } ${new Date(dateString).toLocaleString("en-US", {
    month: "short",
  })} ${year}`;
}

String.prototype.toSentenceCase = function () {
  var upperCaseNotAvailable = "0123456789!'?^|[]@#-.,"; //! And other...
  if (upperCaseNotAvailable.indexOf(this[0]) < 0)
    return this[0].toUpperCase() + this.slice(1);

  return this;
};
