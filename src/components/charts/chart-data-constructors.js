import { getDay } from "../../methods/convert-data-menthods";
import { toCelsius } from "../../methods/convert-weather-values";
import { determineImage } from "../../methods/common-methods";

export default class WeekDataConstructor {
  constructor(data) {
    this.data = data;
    this.categories = this.categoriesArray();

    this.dataset = [
      {
        seriesname: "minValue",
        data: this.temperatureCollection("temperatureMin")
      },
      {
        seriesname: "maxValue",
        data: this.temperatureCollection("temperatureMax")
      }
    ];
    this.annotations = this.getAnnotations();
  }

  getAnnotations() {
    return {
      groups: [
        {
          id: "weather-images",
          items: this.getWeatherImage()
        }
      ]
    };
  }
  getWeatherImage() {
    let collection = [];
    for (let i = 0; i < this.data.length; i++) {
      collection.push({
        id: `image-${i}`,
        type: "image",
        url: determineImage(this.data[i].icon),
        x: `$xaxis.label.${i}.x -15`,
        y: `$xaxis.label.${i}.y - 50`,
        xScale: "20",
        yScale: "20"
      });
    }
    return collection;
  }

  categoriesArray() {
    return [
      {
        category: this.categoriesCollection()
      }
    ];
  }
  temperatureCollection(criterium) {
    let collection = [];
    for (let i = 0; i < this.data.length; i++) {
      collection.push({
        value: toCelsius(this.data[i][criterium])
      });
    }
    return collection;
  }
  categoriesCollection() {
    let collection = [];
    for (let i = 0; i < this.data.length; i++) {
      collection.push({ label: getDay(this.data[i].time) });
    }
    return collection;
  }
}
