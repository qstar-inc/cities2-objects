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