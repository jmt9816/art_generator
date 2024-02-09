const exclusionRules = [
  {
    Species: ["Dark Human"],
    Expression: ["Light Angel", "Light Angry", "Light Black", "Light Devil", "Light Happy",
      "Light Stoned", "Light Surprised", "Light White", "Orc Angel", "Orc Angry", "Orc Black",
      "Orc Devil", "Orc Happy", "Orc Stoned", "Orc Surprised", "Orc White", "Simian Angel",
      "Simian Angry", "Simian Black", "Simian Devil", "Simian Happy", "Simian Stoned", "Simian Surprised",
      "Simian White", "Undead Angel", "Undead Angry", "Undead Black", "Undead Devil", "Undead Happy",
      "Undead Stoned", "Undead Surprised", "Undead White"],
  },
  {
    Species: ["Light Human"],
    Expression: ["Dark Angel", "Dark Angry", "Dark Black", "Dark Devil", "Dark Happy", "Dark Stoned",
      "Dark Surprised", "Dark White", "Orc Angel", "Orc Angry", "Orc Black", "Orc Devil", "Orc Happy",
      "Orc Stoned", "Orc Surprised", "Orc White", "Simian Angel", "Simian Angry", "Simian Black",
      "Simian Devil", "Simian Happy", "Simian Stoned", "Simian Surprised", "Simian White", "Undead Angel",
      "Undead Angry", "Undead Black", "Undead Devil", "Undead Happy", "Undead Stoned", "Undead Surprised", "Undead White"],
  },
  {
    Species: ["Orc"],
    Expression: ["Dark Angel", "Dark Angry", "Dark Black", "Dark Devil", "Dark Happy", "Dark Stoned",
      "Dark Surprised", "Dark White", "Light Angel", "Light Angry", "Light Black", "Light Devil", "Light Happy",
      "Light Stoned", "Light Surprised", "Light White", "Simian Angel", "Simian Angry", "Simian Black",
      "Simian Devil", "Simian Happy", "Simian Stoned", "Simian Surprised", "Simian White", "Undead Angel",
      "Undead Angry", "Undead Black", "Undead Devil", "Undead Happy", "Undead Stoned", "Undead Surprised", "Undead White"],
  },
  {
    Species: ["Simian"],
    Expression: ["Dark Angel", "Dark Angry", "Dark Black", "Dark Devil", "Dark Happy", "Dark Stoned",
      "Dark Surprised", "Dark White", "Light Angel", "Light Angry", "Light Black", "Light Devil", "Light Happy",
      "Light Stoned", "Light Surprised", "Light White", "Orc Angel", "Orc Angry", "Orc Black", "Orc Devil",
      "Orc Happy", "Orc Stoned", "Orc Surprised", "Orc White", "Undead Angel", "Undead Angry", "Undead Black",
      "Undead Devil", "Undead Happy", "Undead Stoned", "Undead Surprised", "Undead White"],
  },
  {
    Species: ["Undead"],
    Expression: ["Dark Angel", "Dark Angry", "Dark Black", "Dark Devil", "Dark Happy", "Dark Stoned",
      "Dark Surprised", "Dark White", "Light Angel", "Light Angry", "Light Black", "Light Devil", "Light Happy",
      "Light Stoned", "Light Surprised", "Light White", "Orc Angel", "Orc Angry", "Orc Black", "Orc Devil",
      "Orc Happy", "Orc Stoned", "Orc Surprised", "Orc White", "Simian Angel", "Simian Angry", "Simian Black",
      "Simian Devil", "Simian Happy", "Simian Stoned", "Simian Surprised", "Simian White"],
  },
  {
    Clothing: ["Heart"],
    "Body Accent": ["Beer Rings", "Wine Stains"],
  },
  {
    Background: ["ReBoot Theme Park"],
    Clothing: ["Denim Jacket"],
  },
  {
    Background: ["ReBoot Theme Park"],
    Clothing: ["Highborn Knight Armor"],
  },
  {
    Background: ["Etheral Forest"],
    Clothing: ["Florida Man"],
  },
  {
    Background: ["Etheral Forest"],
    Clothing: ["Toly Onesie"],
  },
  {
    Background: ["Etheral Forest"],
    Clothing: ["Forest Camo ACU"],
  },
  {
    Background: ["Necrothorns Abyss"],
    Head: ["Valkyrie"],
  },
  {
    Sky: ["Blue"],
    Clothing: ["Highborn Knight Armor"],
  },
  {
    Sky: ["Gloomy"],
    Clothing: ["Spartan ODU"],
  },
  {
    Sky: ["Gloomy"],
    Clothing: ["Playmaker Onsie"],
  },
  {
    Sky: ["Gloomy"],
    Head: ["Oni Mask"],
  },
  {
    Sky: ["Gloomy"],
    Head: ["Kangol"],
  },
  {
    Sky: ["Gloomy"],
    Species: ["Undead Elf"],
  },
  {
    Sky: ["Sandstorm"],
    Clothing: ["Desert Camo ACU"],
  },
  {
    Sky: ["Sandstorm"],
    Clothing: ["Clayno Onsie"],
  },
  {
    Sky: ["Sandstorm"],
    Head: ["Golden Mane"],
  },
  {
    Sky: ["Sandstorm"],
    Head: ["Sombrero"],
  },
  {
    Sky: ["Sandstorm"],
    Head: ["Blonde"],
  },
  {
    Sky: ["Sandstorm"],
    Head: ["Chartist"],
  },
  {
    Sky: ["Sandstorm"],
    Head: ["Cowboy Hat"],
  },
  {
    Sky: ["Sandstorm"],
    Species: ["Simian"],
  },
  {
    Sky: ["Purple Haze"],
    Clothing: ["Fosace Robe"],
  },
  {
    Sky: ["Solana"],
    Clothing: ["Fosace Robe"],
  },
  {
    Clothing: ["Fosace Robe"],
    Head: ["Golden Mane"],
  },
  {
    Head: ["Gangster Hat"],
    Species: ["Undead Elf"],
  },
  {
    Head: ["Chartist"],
    Species: ["Simian"],
  },
  {
    Head: ["Chartist"],
    Species: ["Orc"],
  },
  {
    Head: ["Chartist"],
    Species: ["Undead Elf"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Dark Stoner"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Dark Black"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Light Stoner"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Light Black"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Simian Black"],
  },
  {
    Head: ["Ski Mask"],
    Expression: ["Undead Black"],
  },
{
  Clothing: ["Clayno Onsie"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["Necromancer"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["Playmaker Onsie"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["ReBoot Hoodie"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["Rogue Archer"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["SMB Onsie"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
{
  Clothing: ["Toly Onesie"],
  Head: ["Barbarian Helmet", "BK Hat", "Black Bandana", "Blonde", "Brunet", "Buccaneer Cap", "Bucket Hat", 
  "Chartist", "Clean Fade", "Cowboy Hat", "Dreadlocks", "First Knight Helm", "Forest Camo Helmet", "Gangster Hat",
  "Golden Mane", "Gun Top", "Hadoken", "Hipster Blue", "Hipster Red", "Kangol", "Legion Helmet", "Mage Hat", "Man Bun",
  "Newsboy", "No Hat", "Oni Mask", "ReBoot Trucker", "Sailor Hat", "Ski Mask", "Solana Cap", "Sombrero",
  "Tactical Helmet", "The King", "Undercut", "Valkyrie", "Vipers", "White Bandana", "ZAMN",],
},
];

module.exports = exclusionRules;
