//  MODULES
const path = require('path');
const sidekicks = require('../data/sidekicks');


//  FUNCTIONS
function User(response) {
    let sc = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']
    this.name = response.name;
    this.photo = response.photo;
    this.scores = [];
    
    sc.map( x => {
        this.scores.push(response[x])
    })
}

function findSidekick(user, sidekicksList) {
    let sidekick;
    let bestScore = 100;
    
    sidekicksList.map( sidekickOpt => {
        let score = 0;
        for(let i = 0; i < sidekickOpt.scores.length; i++) {
            score = score + Math.abs(sidekickOpt.scores[i] - user.scores[i]);
        }
        if (score < bestScore) {
            bestScore = score;
            sidekick = sidekickOpt;
        }
    })

    return sidekick;
}


// ROUTING
const routes = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(sidekicks);
    })

    app.post('/api/friends', (req, res) => {
        let user = new User(req.body);
        sidekick = findSidekick(user, sidekicks)
    
        res.json(sidekick);
    })
};


module.exports = routes;