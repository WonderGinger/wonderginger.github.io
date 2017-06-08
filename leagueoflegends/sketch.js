let api_key;
let config;
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
    dataType: "jsonp",
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
      response = data;
      return response;
    }
  });
}
