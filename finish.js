const oneButton = document.getElementById("oneButton");

const celsiusNavigation1 = document.getElementById("celsiusNavigation1");

const celsiusNavigation2 = document.getElementById("celsiusNavigation2");

const oneDay2 = document.getElementById("oneDay2");

const twoDay2 = document.getElementById("twoDay2");

const threeDay2 = document.getElementById("threeDay2");

const fourDay2 = document.getElementById("fourDay2");

const fivDay2 = document.getElementById("fivDay2");

const sixDay2 = document.getElementById("sixDay2");

const sevenDay2 = document.getElementById("sevenDay2");

window.onload = function () {
  navigator.geolocation.getCurrentPosition(showLocation, error);

  function showLocation(position) {
    let currPosLat = position.coords.latitude;
    let currPosLng = position.coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${currPosLat}&lon=${currPosLng}&units=metric&exclude=current,hourly,minutely&APPID=50e04cf67719af5691c59a407bb9b0e8`
    )
      .then((response) => response.json())
      .then((data) => {
      
        let day = new Date();

        document.getElementById("dayCity").innerHTML = day;

        document.getElementById("dayLogo").innerHTML = data.timezone;

        document.getElementById("numberLogo").innerHTML =
          Math.round(data.daily[0].temp.eve) + `${"℃"}`;

        celsiusNavigation1.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[0].temp.eve) + `${"℃"}`;
          let unix_timestamp = data.daily[0].sunrise;
          let date = new Date(unix_timestamp * 1000);
          let hours = date.getHours();
          let minutes = "0" + date.getMinutes();
          let seconds = "0" + date.getSeconds();
          let formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;

          let unix_timestampNight = data.daily[0].sunset;
          let dateNight = new Date(unix_timestampNight * 1000);
          let hoursNight = dateNight.getHours();
          let minutesNight = "0" + dateNight.getMinutes();
          let secondsNight = "0" + dateNight.getSeconds();
          let formattedTimeNight =
            hoursNight +
            ":" +
            minutesNight.substr(-2) +
            ":" +
            secondsNight.substr(-2);

          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[0].feels_like.night) + `${"℃"}`;
        });

        celsiusNavigation2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round((data.daily[0].temp.eve * 9) / 5) + 32 + `${"℉"}`;
          let unix_timestamp = data.daily[0].sunrise;
          let date = new Date(unix_timestamp * 1000);
          let hours = date.getHours();
          let minutes = "0" + date.getMinutes();
          let seconds = "0" + date.getSeconds();
          let formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round((data.daily[0].feels_like.morn * 9) / 5) + 32 + `${"℉"}`;

          let unix_timestampNight = data.daily[0].sunset;
          let dateNight = new Date(unix_timestampNight * 1000);
          let hoursNight = dateNight.getHours();
          let minutesNight = "0" + dateNight.getMinutes();
          let secondsNight = "0" + dateNight.getSeconds();
          let formattedTimeNight =
            hoursNight +
            ":" +
            minutesNight.substr(-2) +
            ":" +
            secondsNight.substr(-2);

          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round((data.daily[0].feels_like.night * 9) / 5) +
            32 +
            `${"℉"}`;
        });

        let unix_timestamp = data.daily[0].sunrise;
        let date = new Date(unix_timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

        document.getElementById("songStationsDey").innerHTML = formattedTime;
        document.getElementById("songStationsTime").innerHTML =
          Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;

        let unix_timestampNight = data.daily[0].sunset;
        let dateNight = new Date(unix_timestampNight * 1000);
        let hoursNight = dateNight.getHours();
        let minutesNight = "0" + dateNight.getMinutes();
        let secondsNight = "0" + dateNight.getSeconds();
        let formattedTimeNight =
          hoursNight +
          ":" +
          minutesNight.substr(-2) +
          ":" +
          secondsNight.substr(-2);

        document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
        document.getElementById("sunsetTime").innerHTML =
          Math.round(data.daily[0].feels_like.night) + `${"℃"}`;

        document.getElementById("weatherDay").innerHTML =
          data.daily[0].weather[0].main;

        document.getElementById("windDay").innerHTML =
          Math.round(data.daily[0].wind_speed) + `${" km"}`;

        document.getElementById("visibilityDay").innerHTML =
          Math.round(data.daily[0].dew_point) + `${" °"}`;

        document.getElementById("humidityDay").innerHTML =
          data.daily[0].humidity + `${" %"}`;

        const d = new Date();
        document.getElementById("oneDay2").innerHTML = d.getDate();

        oneDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[0].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[0].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[0].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[0].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[0].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[0].humidity + `${" %"}`;
        });

        const d1 = new Date();
        document.getElementById("twoDay2").innerHTML = d1.getDate() + 1;

        twoDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[1].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[1].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[1].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[1].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[1].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[1].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[1].humidity + `${" %"}`;
        });

        const d2 = new Date();
        document.getElementById("threeDay2").innerHTML = d2.getDate() + 2;

        threeDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[2].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[2].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[2].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[2].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[2].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[2].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[2].humidity + `${" %"}`;
        });

        const d3 = new Date();
        document.getElementById("fourDay2").innerHTML = d3.getDate() + 3;

        fourDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[3].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[3].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[3].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[3].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[3].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[3].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[3].humidity + `${" %"}`;
        });

        const d4 = new Date();
        document.getElementById("fivDay2").innerHTML = d4.getDate() + 4;

        fivDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[4].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[4].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[4].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[4].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[4].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[4].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[4].humidity + `${" %"}`;
        });

        const d5 = new Date();
        document.getElementById("sixDay2").innerHTML = d5.getDate() + 5;

        sixDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[5].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[5].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[5].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[5].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[5].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[5].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[5].humidity + `${" %"}`;
        });

        const d6 = new Date();
        document.getElementById("sevenDay2").innerHTML = d6.getDate() + 6;

        sevenDay2.addEventListener("click", () => {
          document.getElementById("numberLogo").innerHTML =
            Math.round(data.daily[6].temp.eve) + `${"℃"}`;
          document.getElementById("songStationsDey").innerHTML = formattedTime;
          document.getElementById("songStationsTime").innerHTML =
            Math.round(data.daily[6].feels_like.morn) + `${"℃"}`;
          document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
          document.getElementById("sunsetTime").innerHTML =
            Math.round(data.daily[6].feels_like.night) + `${"℃"}`;
          document.getElementById("weatherDay").innerHTML =
            data.daily[6].weather[0].main;
          document.getElementById("visibilityDay").innerHTML =
            Math.round(data.daily[6].dew_point) + `${" °"}`;
          document.getElementById("windDay").innerHTML =
            Math.round(data.daily[6].wind_speed) + `${" km"}`;
          document.getElementById("humidityDay").innerHTML =
            data.daily[6].humidity + `${" %"}`;
        });
      });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
};

oneButton.addEventListener("click", () => {
  let city = document.getElementById("oneInput").value;
  let lat = "";
  let lon = "";
  if (city.length > 0) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=558b78dbc879196f5685eb665e2816ec`
    )
      .then((response) => response.json())
      .then((data) => {
        lat = data.coord.lat;
        lon = data.coord.lon;
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,hourly,minutely&APPID=50e04cf67719af5691c59a407bb9b0e8`
        )
          .then((response) => response.json())
          .then((data) => {
            let day = new Date();

            document.getElementById("dayCity").innerHTML = day;

            document.getElementById("dayLogo").innerHTML = data.timezone;

            document.getElementById("numberLogo").innerHTML =
              Math.round(data.daily[0].temp.eve) + `${"℃"}`;

            celsiusNavigation1.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[0].temp.eve) + `${"℃"}`;
              let unix_timestamp = data.daily[0].sunrise;
              let date = new Date(unix_timestamp * 1000);
              let hours = date.getHours();
              let minutes = "0" + date.getMinutes();
              let seconds = "0" + date.getSeconds();
              let formattedTime =
                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;

              let unix_timestampNight = data.daily[0].sunset;
              let dateNight = new Date(unix_timestampNight * 1000);
              let hoursNight = dateNight.getHours();
              let minutesNight = "0" + dateNight.getMinutes();
              let secondsNight = "0" + dateNight.getSeconds();
              let formattedTimeNight =
                hoursNight +
                ":" +
                minutesNight.substr(-2) +
                ":" +
                secondsNight.substr(-2);

              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[0].feels_like.night) + `${"℃"}`;
            });

            celsiusNavigation2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round((data.daily[0].temp.eve * 9) / 5) + 32 + `${"℉"}`;
              let unix_timestamp = data.daily[0].sunrise;
              let date = new Date(unix_timestamp * 1000);
              let hours = date.getHours();
              let minutes = "0" + date.getMinutes();
              let seconds = "0" + date.getSeconds();
              let formattedTime =
                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round((data.daily[0].feels_like.morn * 9) / 5) +
                32 +
                `${"℉"}`;

              let unix_timestampNight = data.daily[0].sunset;
              let dateNight = new Date(unix_timestampNight * 1000);
              let hoursNight = dateNight.getHours();
              let minutesNight = "0" + dateNight.getMinutes();
              let secondsNight = "0" + dateNight.getSeconds();
              let formattedTimeNight =
                hoursNight +
                ":" +
                minutesNight.substr(-2) +
                ":" +
                secondsNight.substr(-2);

              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round((data.daily[0].feels_like.night * 9) / 5) +
                32 +
                `${"℉"}`;
            });

            let unix_timestamp = data.daily[0].sunrise;
            let date = new Date(unix_timestamp * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let seconds = "0" + date.getSeconds();
            let formattedTime =
              hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

            document.getElementById("songStationsDey").innerHTML =
              formattedTime;
            document.getElementById("songStationsTime").innerHTML =
              Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;

            let unix_timestampNight = data.daily[0].sunset;
            let dateNight = new Date(unix_timestampNight * 1000);
            let hoursNight = dateNight.getHours();
            let minutesNight = "0" + dateNight.getMinutes();
            let secondsNight = "0" + dateNight.getSeconds();
            let formattedTimeNight =
              hoursNight +
              ":" +
              minutesNight.substr(-2) +
              ":" +
              secondsNight.substr(-2);

            document.getElementById("sunsetDey").innerHTML = formattedTimeNight;
            document.getElementById("sunsetTime").innerHTML =
              Math.round(data.daily[0].feels_like.night) + `${"℃"}`;

            document.getElementById("weatherDay").innerHTML =
              data.daily[0].weather[0].main;

            document.getElementById("windDay").innerHTML =
              Math.round(data.daily[0].wind_speed) + `${" km"}`;

            document.getElementById("visibilityDay").innerHTML =
              Math.round(data.daily[0].dew_point) + `${" °"}`;

            document.getElementById("humidityDay").innerHTML =
              data.daily[0].humidity + `${" %"}`;

            const d = new Date();
            document.getElementById("oneDay2").innerHTML = d.getDate();

            oneDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[0].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[0].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[0].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[0].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[0].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[0].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[0].humidity + `${" %"}`;
            });

            const d1 = new Date();
            document.getElementById("twoDay2").innerHTML = d1.getDate() + 1;

            twoDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[1].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[1].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[1].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[1].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[1].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[1].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[1].humidity + `${" %"}`;
            });

            const d2 = new Date();
            document.getElementById("threeDay2").innerHTML = d2.getDate() + 2;

            threeDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[2].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[2].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[2].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[2].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[2].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[2].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[2].humidity + `${" %"}`;
            });

            const d3 = new Date();
            document.getElementById("fourDay2").innerHTML = d3.getDate() + 3;

            fourDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[3].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[3].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[3].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[3].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[3].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[3].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[3].humidity + `${" %"}`;
            });

            const d4 = new Date();
            document.getElementById("fivDay2").innerHTML = d4.getDate() + 4;

            fivDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[4].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[4].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[4].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[4].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[4].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[4].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[4].humidity + `${" %"}`;
            });

            const d5 = new Date();
            document.getElementById("sixDay2").innerHTML = d5.getDate() + 5;

            sixDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[5].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[5].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[5].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[5].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[5].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[5].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[5].humidity + `${" %"}`;
            });

            const d6 = new Date();
            document.getElementById("sevenDay2").innerHTML = d6.getDate() + 6;

            sevenDay2.addEventListener("click", () => {
              document.getElementById("numberLogo").innerHTML =
                Math.round(data.daily[6].temp.eve) + `${"℃"}`;
              document.getElementById("songStationsDey").innerHTML =
                formattedTime;
              document.getElementById("songStationsTime").innerHTML =
                Math.round(data.daily[6].feels_like.morn) + `${"℃"}`;
              document.getElementById("sunsetDey").innerHTML =
                formattedTimeNight;
              document.getElementById("sunsetTime").innerHTML =
                Math.round(data.daily[6].feels_like.night) + `${"℃"}`;
              document.getElementById("weatherDay").innerHTML =
                data.daily[6].weather[0].main;
              document.getElementById("visibilityDay").innerHTML =
                Math.round(data.daily[6].dew_point) + `${" °"}`;
              document.getElementById("windDay").innerHTML =
                Math.round(data.daily[6].wind_speed) + `${" km"}`;
              document.getElementById("humidityDay").innerHTML =
                data.daily[6].humidity + `${" %"}`;
            });
          });
      });
  }
});
