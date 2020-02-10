const express = require('express');
const path = require('path');
const data = require('./testdata.json');

const app = express();

app.set('port', 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api/players', function (req, res) {
  res.json(getAllPlayers(data));
})
app.get('/api/players/top', function (req, res) {
  res.json(getAllPlayers(data).slice(0,5));
})

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

function getAllPlayers(playersFromFile){
  const playersToFront = [];

  for(item of playersFromFile){
    let exper = 0;
    let moneys = 0;

    for(res of JSON.parse(item.resources)){
      if (res.resource == 'ACTIVERATE' || res.resource == 'PASSIVERATE'){
        exper += res.value;
      }
      else if(res.resource == 'MONEY') moneys += res.value;
    }

    plrs.push({
      rating: 0,
      fio: item.fio,
      status: item.level,
      exp: exper,
      money: moneys
    })
  }
  plrs.sort(function(a, b) {
    return a["exp"] - b["exp"] || a["money"] - b["money"];
  });
  plrs.reverse();
  plrs.forEach((el, i, plrs) =>{
    if ( i != 0 && el.exp == playersToFront[i-1].exp && el.money == playersToFront[i-1].money) el.rating = playersToFront[i-1].rating
    else el.rating = i+1
  })
}

