import React from "react";
import Chart from "react-apexcharts";

const CustomBarChart = () => {
  const data = [
    { documentType: "Missing Legal\nPlan Docs", percentMissing: 1.2 },
    { documentType: "Missing Adoption\nAgreements", percentMissing: 2.3 },
    { documentType: "Missing Summary\nPlan Descriptions", percentMissing: 8.6 },
    { documentType: "Missing Fee\nSchedules", percentMissing: 0.8 },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    colors: ["#0770BF"], // Set bar fill color
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#0770BF"],
      },
    },
    xaxis: {
      categories: data
        .map((item) => item.documentType)
        .map((documentType) => documentType.split("\n")),
      position: "bottom",
      labels: {
        rotate: 0,
        trim: true,
        wrap: true,
        maxWidth: 120,
        style: {
          fontSize: "8px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      // tooltip: { enabled: true },
    },
    yaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: false,
        formatter: (val) => `${val}%`,
      },
    },
    title: {
      floating: true,
      offsetY: 10,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  const series = [
    {
      name: "Percent Missing",
      data: data.map((item) => item.percentMissing),
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default CustomBarChart;
