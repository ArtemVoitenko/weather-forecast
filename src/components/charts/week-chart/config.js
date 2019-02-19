export const configurateChart = (
  categories,
  dataset,
  annotations,
  caption
) => ({
  type: "msline", // The chart type
  width: "100%", // Width of the chart
  height: "100%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      caption,
      captionFont: "Arial",
      captionFontBold: "1",
      captionFontColor: "#ffffff",
      captionFontSize: "30",
      captionPadding: "30",
      baseFont: "Roboto",
      chartTopMargin: "30",
      showHoverEffect: "1",
      theme: "fusion",
      showaxislines: "2",
      showYAxisValues: "0",
      numberSuffix: "°C",
      anchorBgColor: "#FFFFFF",
      paletteColors: "#FFFFFF",
      drawCrossLine: "1",
      plotToolText: "$label<br><hr><b>$dataValue</b>",
      showAxisLines: "0",
      anchorRadius: "6",
      divLineAlpha: "0",
      labelFontSize: "13",

      labelFontColor: "#ffffff",
      labelFontBold: "0",
      labelPadding: "50",
      rotateLabels: "0",
      slantLabels: "0",
      canvasPadding: "20",
      lineThickness: "4",
      showvalues: "1",
      valueFontColor: "#FFFFFF",
      valueFontBold: "1",
      theme: "fusion",
      bgColor: "transparent",
      canvasBgAlpha: "0",
      showLegend: "0",
      bgColor: "#D0DAD9",
      bgAlpha: "0"
    },

    categories,
    dataset,
    annotations
  }
});
