const express = require('express')

tokenData = [
    {
        "description": "A simple testing image to load on opensea", 
        "external_url": "https://openseacreatures.io/1", 
        "image": "ipfs://ipfs/QmZ9S3xbnhHWjYx3adrjVxjFH1CpvTDqp4cMLMuaKf4PV2", 
        "name": "My Image",
        "attributes": [
          {
            "trait_type": "Base", 
            "value": "starfish"
          }, 
          {
            "trait_type": "Eyes", 
            "value": "joy"
          }, 
          {
            "trait_type": "Mouth", 
            "value": "surprised"
          }, 
          {
            "trait_type": "Level", 
            "value": 2
          }, 
          {
            "trait_type": "Stamina", 
            "value": 2.3
          }, 
          {
            "trait_type": "Personality", 
            "value": "Sad"
          }, 
          {
            "display_type": "boost_number", 
            "trait_type": "Aqua Power", 
            "value": 40
          }, 
          {
            "display_type": "boost_percentage", 
            "trait_type": "Stamina Increase", 
            "value": 10
          }, 
          {
            "display_type": "number", 
            "trait_type": "Generation", 
            "value": 2
          }
        ],
    },
      {
        "attributes": [
          {
            "trait_type": "Base", 
            "value": "crab"
          }, 
          {
            "trait_type": "Eyes", 
            "value": "wink"
          }, 
          {
            "trait_type": "Mouth", 
            "value": "pleased"
          }, 
          {
            "trait_type": "Level", 
            "value": 3
          }, 
          {
            "trait_type": "Stamina", 
            "value": 11.7
          }, 
          {
            "trait_type": "Personality", 
            "value": "Sleepy"
          }, 
          {
            "display_type": "boost_number", 
            "trait_type": "Aqua Power", 
            "value": 30
          }, 
          {
            "display_type": "boost_percentage", 
            "trait_type": "Stamina Increase", 
            "value": 15
          }, 
          {
            "display_type": "number", 
            "trait_type": "Generation", 
            "value": 1
          }
        ], 
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/2", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/2.png", 
        "name": "Boris McCoy"
      },
      {
        "attributes": [
          {
            "trait_type": "Base", 
            "value": "narwhal"
          }, 
          {
            "trait_type": "Eyes", 
            "value": "sleepy"
          }, 
          {
            "trait_type": "Mouth", 
            "value": "cute"
          }, 
          {
            "trait_type": "Level", 
            "value": 4
          }, 
          {
            "trait_type": "Stamina", 
            "value": 90.2
          }, 
          {
            "trait_type": "Personality", 
            "value": "Boring"
          }, 
          {
            "display_type": "boost_number", 
            "trait_type": "Aqua Power", 
            "value": 10
          }, 
          {
            "display_type": "boost_percentage", 
            "trait_type": "Stamina Increase", 
            "value": 5
          }, 
          {
            "display_type": "number", 
            "trait_type": "Generation", 
            "value": 1
          }
        ], 
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/3", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/3.png", 
        "name": "Dave Starbelly"
      },
      {
        "attributes": [
          {
            "trait_type": "Base", 
            "value": "tealfish"
          }, 
          {
            "trait_type": "Eyes", 
            "value": "content"
          }, 
          {
            "trait_type": "Mouth", 
            "value": "happy"
          }, 
          {
            "trait_type": "Level", 
            "value": 8
          }, 
          {
            "trait_type": "Stamina", 
            "value": 1.2
          }, 
          {
            "trait_type": "Personality", 
            "value": "Happy"
          }, 
          {
            "display_type": "boost_number", 
            "trait_type": "Aqua Power", 
            "value": 40
          }, 
          {
            "display_type": "boost_percentage", 
            "trait_type": "Stamina Increase", 
            "value": 10
          }, 
          {
            "display_type": "number", 
            "trait_type": "Generation", 
            "value": 1
          }
        ], 
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/4", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/4.png", 
        "name": "Randy Fisherton"
      },
    {
    "attributes": [
      {
        "trait_type": "Base", 
        "value": "starfish"
      }, 
      {
        "trait_type": "Eyes", 
        "value": "sleepy"
      }, 
      {
        "trait_type": "Mouth", 
        "value": "surprised"
      }, 
      {
        "trait_type": "Level", 
        "value": 4
      }, 
      {
        "trait_type": "Stamina", 
        "value": 90.2
      }, 
      {
        "trait_type": "Personality", 
        "value": "Sad"
      }, 
      {
        "display_type": "boost_number", 
        "trait_type": "Aqua Power", 
        "value": 40
      }, 
      {
        "display_type": "boost_percentage", 
        "trait_type": "Stamina Increase", 
        "value": 10
      }, 
      {
        "display_type": "number", 
        "trait_type": "Generation", 
        "value": 2
      }
    ], 
    "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
    "external_url": "https://openseacreatures.io/13", 
    "image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/13.png", 
    "name": "Sprinkles Fisherton"
  }]

const app = express()
app.get('/', function(req, res) {
    res.send('Der Wanderer Metadata API ...')
})

app.get('/DerWanderer/api/asset/:id', function (req, res) {
	if (tokenData.length > req.params.id && req.params.id > 0){
		res.setHeader('content-type', 'application/json')
        res.send(tokenData[req.params.id - 1])
    }
    else res.send('The token with id ' + req.params.id + ' does not exist ..')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

