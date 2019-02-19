export default class DarkSkyService {
  _apiBase =
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15143a7f5e1e19d0e71cf3b9e5c9173a";
  _geocodeApiBase =
    "https://us1.locationiq.com/v1/search.php?key=e428d801ba99a5";
  _reverseGeocodeBase =
    "https://us1.locationiq.com/v1/reverse.php?key=e428d801ba99a5";
  getForecast = async (latitude, longtitude) => {
    const url = `${this._apiBase}/${latitude},${longtitude}`;
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error("Could not fetch");
    }
    return await result.json();
  };
  getGeocode = async city => {
    const res = await fetch(`${this._geocodeApiBase}&q=${city}&format=json`);
    return await res.json();
  };
  getCityData = async (lat, long) => {
    const res = await fetch(
      `${
        this._reverseGeocodeBase
      }&lat=${lat}&lon=${long}&format=json&accept-language=en`
    );
    return await res.json();
  };
}
