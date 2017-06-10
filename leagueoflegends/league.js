let api_key;
// let config;
let summonerNameRegex;


function preload() {
  // config = loadStrings('../leagueoflegends/config.txt');
  // $.get(
  //   'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/wonderginger?api_key=RGAPI-edc09dbb-b009-41ec-bb5c-e8af5f65cad8'
  // );
}

function setup() {
  // api_key = config[0].match(/^api key=(.*)/)[1];
  summonerNameRegex = /^[0-9\\p{L} _\\.]+$/;

  var response;
  var object2 = {
    url: "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/wonderginger?api_key=RGAPI-edc09dbb-b009-41ec-bb5c-e8af5f65cad8",
    dataType: "string",
    success: function(data) {
      console.log(data);
      response = data;
      return response;
    }
  };
  $.ajax({
    url: "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/wonderginger?api_key=RGAPI-edc09dbb-b009-41ec-bb5c-e8af5f65cad8",
    dataType: "jsonp",
    success: function(data) {
      console.log(data);
      response
      response = data;
      return response;
    }
  });
}

function summonerLookUp() {
  var SUMMONER_NAME = "";
  SUMMONER_NAME = $("#userName").val();

  var API_KEY = "";
  API_KEY = $("#theKey").val();

  if (SUMMONER_NAME !== "") {

    $.ajax({
      url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' +
        SUMMONER_NAME + '?api_key=' + API_KEY,
      type: 'GET',
      dataType: 'jsonp',
      data: {

      },
      success: function(json) {
        var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

        SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

        summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
        summonerID = json[SUMMONER_NAME_NOSPACES].id;

        document.getElementById("sLevel").innerHTML = summonerLevel;
        document.getElementById("sID").innerHTML = summonerID;

      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("error getting Summoner data!");
      }
    });
  } else {}
}
