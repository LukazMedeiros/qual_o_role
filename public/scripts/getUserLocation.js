const token =
  "pk.eyJ1IjoibHVjYXMtbWFwYm94IiwiYSI6ImNrdjZ2NnBwODljb3gyd284N25scTZvb3AifQ.XjdbZq8aKD6tIZs-YXG97g";

async function getDistrict(latitude, longitude) {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?limit=1&access_token=${token}`
  );
  const data = await response.json();
  document.querySelector("#location").value =
    data?.features[0]?.context[2]?.text;
}

(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getDistrict(latitude, longitude);
    });
  }
})();
