================================================
File: /README.md
================================================
# css effects generator tools

## The backstory
We're trying to figure out how to approach a system for generating css effects. This is mark 2, the first was trying to do too many things at once. This time we're going to try to create self contained tools/scripts that are focused on a particular task.

## The new approach, what tools I think we need
* [x] A tool for pulling out a list of all the css variables in a given css file or string
* [ ] a tool that can take a list of css variables and generate a ui component for editing and setting them with javascript
  * [ ] a preset system so that you can save and load values for the variables
* [ ] a tool that can take html, css and js and generate an html page of them all together perhaps embedded in a iframe or as a scoped custom element 
  * [ ] html, css and js can be in json, seperate files, or strings, or edited in real time in the browser
* [ ] a tool that can look at some css (in a file, json, or string) and provide a list of attributes inside that could be parameterized into css variables that would be good for procedural generation
  * [ ] we could also figure out a way to write this as a reusable LLM prompt  
* [ ] a tool for generating sensible color schemes from a given color

## Requirements
- code must be written in vanilla javascript in ES6 format using ESM imports
- typescript libraries are allowed but i don't want to ever write it
- code must follow the (JSDoc Style Guide)[jsDocStyleGuide.md]
- folders and files must follow the (Pattern)[folderPattern.md]


================================================
File: /uiPatterns.json
================================================
[
  {
      "name": "Omolon",
      "colors": ["#091E3A", "#2F80ED", "#2D9EE0"]
  },
  {
      "name": "Farhan",
      "colors": ["#9400D3", "#4B0082"]
  }, 
  {
      "name": "Purple",
      "colors": ["#c84e89", "#F15F79"]
  },
  {
      "name": "Ibtesam",
      "colors": ["#00F5A0", "#00D9F5"]
  },
  {
      "name": "Radioactive Heat",
      "colors": ["#F7941E", "#72C6EF", "#00A651"]
  }, 
  {
      "name": "The Sky And The Sea",
      "colors": ["#F7941E", "#004E8F"]
  },
  {
      "name": "From Ice To Fire",
      "colors": ["#72C6EF", "#004E8F"]
  },

  {
      "name": "Blue & Orange",
      "colors": ["#FD8112", "#0085CA"]
  },
  {
      "name": "Purple Dream",
      "colors": ["#bf5ae0","#a811da"]
  },
  {
      "name": "Blu",
      "colors": ["#00416A", "#E4E5E6"]
  },
  {
      "name": "Summer Breeze",
      "colors": ["#fbed96", "#abecd6"]
  },
  {
      "name": "Ver",
      "colors": ["#FFE000", "#799F0C"]
  },
  {
      "name": "Ver Black",
      "colors": ["#F7F8F8", "#ACBB78"]
  },
  {
      "name": "Combi",
      "colors": ["#00416A", "#799F0C", "#FFE000"]
  },
  {
      "name": "Anwar",
      "colors": ["#334d50", "#cbcaa5"]
  },
  {
      "name": "Bluelagoo",
      "colors": ["#0052D4", "#4364F7", "#6FB1FC"]
  },
  {
      "name": "Lunada",
      "colors": ["#5433FF", "#20BDFF", "#A5FECB"]
  },
  {
      "name": "Reaqua",
      "colors": ["#799F0C", "#ACBB78"]
  },
  {
      "name": "Mango",
      "colors": ["#ffe259", "#ffa751"]
  },
  {
      "name": "Bupe",
      "colors": ["#00416A", "#E4E5E6"]
  },
  {
      "name": "Rea",
      "colors": ["#FFE000", "#799F0C"]
  },
  {
      "name": "Windy",
      "colors": ["#acb6e5", "#86fde8"]
  },
  {
      "name": "Royal Blue",
      "colors": ["#536976", "#292E49"]
  },
  {
      "name": "Royal Blue + Petrol",
      "colors": ["#BBD2C5", "#536976", "#292E49"]
  },
  {
      "name": "Copper",
      "colors": ["#B79891", "#94716B"]
  },
  {
      "name": "Anamnisar",
      "colors": ["#9796f0", "#fbc7d4"]
  },
  {
      "name": "Petrol",
      "colors": ["#BBD2C5", "#536976"]
  },
  {
      "name": "Sky",
      "colors": ["#076585", "#fff"]
  },
  {
      "name": "Sel",
      "colors": ["#00467F", "#A5CC82"]
  }, 
  {
      "name": "Afternoon",
      "colors": ["#000C40", "#607D8B"]
  },
  {
      "name": "Skyline",
      "colors": ["#1488CC", "#2B32B2"]
  },
  {
      "name": "DIMIGO",
      "colors": ["#ec008c", "#fc6767"]
  },
  {
      "name": "Purple Love",
      "colors": ["#cc2b5e", "#753a88"]
  },
  {
      "name": "Sexy Blue",
      "colors": ["#2193b0", "#6dd5ed"]
  },
  {
      "name": "Blooker20",
      "colors": ["#e65c00", "#F9D423"]
  },
  {
      "name": "Sea Blue",
      "colors": ["#2b5876", "#4e4376"]
  },
  {
      "name": "Nimvelo",
      "colors": ["#314755", "#26a0da"]
  },
  {
      "name": "Hazel",
      "colors": ["#77A1D3", "#79CBCA", "#E684AE"]
  },
  {
      "name": "Noon to Dusk",
      "colors": ["#ff6e7f", "#bfe9ff"]
  },
  {
      "name": "YouTube",
      "colors": ["#e52d27", "#b31217"]
  },
  {
      "name": "Cool Brown",
      "colors": ["#603813", "#b29f94"]
  },
  {
      "name": "Harmonic Energy",
      "colors": ["#16A085", "#F4D03F"]
  },
  {
      "name": "Playing with Reds",
      "colors": ["#D31027", "#EA384D"]
  },
  {
      "name": "Sunny Days",
      "colors": ["#EDE574", "#E1F5C4"]
  },
  {
      "name": "Green Beach",
      "colors": ["#02AAB0", "#00CDAC"]
  },
  {
      "name": "Intuitive Purple",
      "colors": ["#DA22FF", "#9733EE"]
  },
  {
      "name": "Emerald Water",
      "colors": ["#348F50", "#56B4D3"]
  },
  {
      "name": "Lemon Twist",
      "colors": ["#3CA55C", "#B5AC49"]
  },
  {
      "name": "Monte Carlo",
      "colors": ["#CC95C0", "#DBD4B4", "#7AA1D2"]
  },
  {
      "name": "Horizon",
      "colors": ["#003973", "#E5E5BE"]
  },
  {
      "name": "Rose Water",
      "colors": ["#E55D87", "#5FC3E4"]
  },
  {
      "name": "Frozen",
      "colors": ["#403B4A", "#E7E9BB"]
  },
  {
      "name": "Mango Pulp",
      "colors": ["#F09819", "#EDDE5D"]
  },
  {
      "name": "Bloody Mary",
      "colors": ["#FF512F", "#DD2476"]
  },
  {
      "name": "Aubergine",
      "colors": ["#AA076B", "#61045F"]
  },
  {
      "name": "Aqua Marine",
      "colors": ["#1A2980", "#26D0CE"]
  },
  {
      "name": "Sunrise",
      "colors": ["#FF512F", "#F09819"]
  },
  {
      "name": "Purple Paradise",
      "colors": ["#1D2B64", "#F8CDDA"]
  },
  {
      "name": "Stripe",
      "colors": ["#1FA2FF", "#12D8FA", "#A6FFCB"]
  },
  {
      "name": "Sea Weed",
      "colors": ["#4CB8C4", "#3CD3AD"]
  },
  {
      "name": "Pinky",
      "colors": ["#DD5E89", "#F7BB97"]
  },
  {
      "name": "Cherry",
      "colors": ["#EB3349", "#F45C43"]
  },
  {
      "name": "Mojito",
      "colors": ["#1D976C", "#93F9B9"]
  },
  {
      "name": "Juicy Orange",
      "colors": ["#FF8008", "#FFC837"]
  },
  {
      "name": "Mirage",
      "colors": ["#16222A", "#3A6073"]
  },
  {
      "name": "Steel Gray",
      "colors": ["#1F1C2C", "#928DAB"]
  },
  {
      "name": "Kashmir",
      "colors": ["#614385", "#516395"]
  },
  {
      "name": "Electric Violet",
      "colors": ["#4776E6", "#8E54E9"]
  },
  {
      "name": "Venice Blue",
      "colors": ["#085078", "#85D8CE"]
  },
  {
      "name": "Bora Bora",
      "colors": ["#2BC0E4", "#EAECC6"]
  },
  {
      "name": "Moss",
      "colors": ["#134E5E", "#71B280"]
  },
  {
      "name": "Shroom Haze",
      "colors": ["#5C258D", "#4389A2"]
  },
  {
      "name": "Mystic",
      "colors": ["#757F9A", "#D7DDE8"]
  },
  {
      "name": "Midnight City",
      "colors": ["#232526", "#414345"]
  },
  {
      "name": "Sea Blizz",
      "colors": ["#1CD8D2", "#93EDC7"]
  },
  {
      "name": "Opa",
      "colors": ["#3D7EAA", "#FFE47A"]
  },
  {
      "name": "Titanium",
      "colors": ["#283048", "#859398"]
  },
  {
      "name": "Mantle",
      "colors": ["#24C6DC", "#514A9D"]
  },
  {
      "name": "Dracula",
      "colors": ["#DC2424", "#4A569D"]
  },
  {
      "name": "Peach",
      "colors": ["#ED4264", "#FFEDBC"]
  },
  {
      "name": "Moonrise",
      "colors": ["#DAE2F8", "#D6A4A4"]
  },
  {
      "name": "Clouds",
      "colors": ["#ECE9E6", "#FFFFFF"]
  },
  {
      "name": "Stellar",
      "colors": ["#7474BF", "#348AC7"]
  },
  {
      "name": "Bourbon",
      "colors": ["#EC6F66", "#F3A183"]
  },
  {
      "name": "Calm Darya",
      "colors": ["#5f2c82", "#49a09d"]
  },
  {
      "name": "Influenza",
      "colors": ["#C04848", "#480048"]
  },
  {
      "name": "Shrimpy",
      "colors": ["#e43a15", "#e65245"]
  },
  {
      "name": "Army",
      "colors": ["#414d0b", "#727a17"]
  },
  {
      "name": "Miaka",
      "colors": ["#FC354C", "#0ABFBC"]
  },
  {
      "name": "Pinot Noir",
      "colors": ["#4b6cb7", "#182848"]
  },
  {
      "name": "Day Tripper",
      "colors": ["#f857a6", "#ff5858"]
  },
  {
      "name": "Namn",
      "colors": ["#a73737", "#7a2828"]
  },
  {
      "name": "Blurry Beach",
      "colors": ["#d53369", "#cbad6d"]
  },
  {
      "name": "Vasily",
      "colors": ["#e9d362", "#333333"]
  },
  {
      "name": "A Lost Memory",
      "colors": ["#DE6262", "#FFB88C"]
  },
  {
      "name": "Petrichor",
      "colors": ["#666600", "#999966"]
  },
  {
      "name": "Jonquil",
      "colors": ["#FFEEEE", "#DDEFBB"]
  },
  {
      "name": "Sirius Tamed",
      "colors": ["#EFEFBB", "#D4D3DD"]
  },
  {
      "name": "Kyoto",
      "colors": ["#c21500", "#ffc500"]
  },
  {
      "name": "Misty Meadow",
      "colors": ["#215f00", "#e4e4d9"]
  },
  {
      "name": "Aqualicious",
      "colors": ["#50C9C3", "#96DEDA"]
  },
  {
      "name": "Moor",
      "colors": ["#616161", "#9bc5c3"]
  },
  {
      "name": "Almost",
      "colors": ["#ddd6f3", "#faaca8"]
  },
  {
      "name": "Forever Lost",
      "colors": ["#5D4157", "#A8CABA"]
  },
  {
      "name": "Winter",
      "colors": ["#E6DADA", "#274046"]
  },
  {
      "name": "Nelson",
      "colors": ["#f2709c", "#ff9472"]
  },
  {
      "name": "Autumn",
      "colors": ["#DAD299", "#B0DAB9"]
  },
  {
      "name": "Candy",
      "colors": ["#D3959B", "#BFE6BA"]
  },
  {
      "name": "Reef",
      "colors": ["#00d2ff", "#3a7bd5"]
  },
  {
      "name": "The Strain",
      "colors": ["#870000", "#190A05"]
  },
  {
      "name": "Dirty Fog",
      "colors": ["#B993D6", "#8CA6DB"]
  },
  {
      "name": "Earthly",
      "colors": ["#649173", "#DBD5A4"]
  },
  {
      "name": "Virgin",
      "colors": ["#C9FFBF", "#FFAFBD"]
  },
  {
      "name": "Ash",
      "colors": ["#606c88", "#3f4c6b"]
  },
  {
      "name": "Cherryblossoms",
      "colors": ["#FBD3E9", "#BB377D"]
  },
  {
      "name": "Parklife",
      "colors": ["#ADD100", "#7B920A"]
  },
  {
      "name": "Dance To Forget",
      "colors": ["#FF4E50", "#F9D423"]
  },
  {
      "name": "Starfall",
      "colors": ["#F0C27B", "#4B1248"]
  },
  {
      "name": "Red Mist",
      "colors": ["#000000", "#e74c3c"]
  },
  {
      "name": "Teal Love",
      "colors": ["#AAFFA9", "#11FFBD"]
  },
  {
      "name": "Neon Life",
      "colors": ["#B3FFAB", "#12FFF7"]
  },
  {
      "name": "Man of Steel",
      "colors": ["#780206", "#061161"]
  },
  {
      "name": "Amethyst",
      "colors": ["#9D50BB", "#6E48AA"]
  },
  {
      "name": "Cheer Up Emo Kid",
      "colors": ["#556270", "#FF6B6B"]
  },
  {
      "name": "Shore",
      "colors": ["#70e1f5", "#ffd194"]
  },
  {
      "name": "Facebook Messenger",
      "colors": ["#00c6ff", "#0072ff"]
  },
  {
      "name": "SoundCloud",
      "colors": ["#fe8c00", "#f83600"]
  },
  {
      "name": "Behongo",
      "colors": ["#52c234", "#061700"]
  },
  {
      "name": "ServQuick",
      "colors": ["#485563", "#29323c"]
  },
  {
      "name": "Friday",
      "colors": ["#83a4d4", "#b6fbff"]
  },
  {
      "name": "Martini",
      "colors": ["#FDFC47", "#24FE41"]
  },
  {
      "name": "Metallic Toad",
      "colors": ["#abbaab", "#ffffff"]
  },
  {
      "name": "Between The Clouds",
      "colors": ["#73C8A9", "#373B44"]
  },
  {
      "name": "Crazy Orange I",
      "colors": ["#D38312", "#A83279"]
  },
  {
      "name": "Hersheys",
      "colors": ["#1e130c", "#9a8478"]
  },
  {
      "name": "Talking To Mice Elf",
      "colors": ["#948E99", "#2E1437"]
  },
  {
      "name": "Purple Bliss",
      "colors": ["#360033", "#0b8793"]
  },
  {
      "name": "Predawn",
      "colors": ["#FFA17F", "#00223E"]
  },
  {
      "name": "Endless River",
      "colors": ["#43cea2", "#185a9d"]
  },
  {
      "name": "Pastel Orange at the Sun",
      "colors": ["#ffb347", "#ffcc33"]
  },
  {
      "name": "Twitch",
      "colors": ["#6441A5", "#2a0845"]
  },
  {
      "name": "Atlas",
      "colors": ["#FEAC5E", "#C779D0", "#4BC0C8"]
  },
  {
      "name": "Instagram",
      "colors": ["#833ab4", "#fd1d1d", "#fcb045"]
  },
  {
      "name": "Flickr",
      "colors": ["#ff0084", "#33001b"]
  },
  {
      "name": "Vine",
      "colors": ["#00bf8f", "#001510"]
  },
  {
      "name": "Turquoise flow",
      "colors": ["#136a8a", "#267871"]
  },
  {
      "name": "Portrait",
      "colors": ["#8e9eab", "#eef2f3"]
  },
  {
      "name": "Virgin America",
      "colors": ["#7b4397", "#dc2430"]
  },
  {
      "name": "Koko Caramel",
      "colors": ["#D1913C", "#FFD194"]
  },
  {
      "name": "Fresh Turboscent",
      "colors": ["#F1F2B5", "#135058"]
  },
  {
      "name": "Green to dark",
      "colors": ["#6A9113", "#141517"]
  },
  {
      "name": "Ukraine",
      "colors": ["#004FF9", "#FFF94C"]
  },
  {
      "name": "Curiosity blue",
      "colors": ["#525252", "#3d72b4"]
  },
  {
      "name": "Dark Knight",
      "colors": ["#BA8B02", "#181818"]
  },
  {
      "name": "Piglet",
      "colors": ["#ee9ca7", "#ffdde1"]
  },
  {
      "name": "Lizard",
      "colors": ["#304352", "#d7d2cc"]
  },
  {
      "name": "Sage Persuasion",
      "colors": ["#CCCCB2", "#757519"]
  },
  {
      "name": "Between Night and Day",
      "colors": ["#2c3e50", "#3498db"]
  },
  {
      "name": "Timber",
      "colors": ["#fc00ff", "#00dbde"]
  },
  {
      "name": "Passion",
      "colors": ["#e53935", "#e35d5b"]
  },
  {
      "name": "Clear Sky",
      "colors": ["#005C97", "#363795"]
  },
  {
      "name": "Master Card",
      "colors": ["#f46b45", "#eea849"]
  },
  {
      "name": "Back To Earth",
      "colors": ["#00C9FF", "#92FE9D"]
  },
  {
      "name": "Deep Purple",
      "colors": ["#673AB7", "#512DA8"]
  },
  {
      "name": "Little Leaf",
      "colors": ["#76b852", "#8DC26F"]
  },
  {
      "name": "Netflix",
      "colors": ["#8E0E00", "#1F1C18"]
  },
  {
      "name": "Light Orange",
      "colors": ["#FFB75E", "#ED8F03"]
  },
  {
      "name": "Green and Blue",
      "colors": ["#c2e59c", "#64b3f4"]
  },
  {
      "name": "Poncho",
      "colors": ["#403A3E", "#BE5869"]
  },
  {
      "name": "Back to the Future",
      "colors": ["#C02425", "#F0CB35"]
  },
  {
      "name": "Blush",
      "colors": ["#B24592", "#F15F79"]
  },
  {
      "name": "Inbox",
      "colors": ["#457fca", "#5691c8"]
  },
  {
      "name": "Purplin",
      "colors": ["#6a3093", "#a044ff"]
  },
  {
      "name": "Pale Wood",
      "colors": ["#eacda3", "#d6ae7b"]
  },
  {
      "name": "Haikus",
      "colors": ["#fd746c", "#ff9068"]
  },
  {
      "name": "Pizelex",
      "colors": ["#114357", "#F29492"]
  },
  {
      "name": "Joomla",
      "colors": ["#1e3c72", "#2a5298"]
  },
  {
      "name": "Christmas",
      "colors": ["#2F7336", "#AA3A38"]
  },
  {
      "name": "Minnesota Vikings",
      "colors": ["#5614B0", "#DBD65C"]
  },
  {
      "name": "Miami Dolphins",
      "colors": ["#4DA0B0", "#D39D38"]
  },
  {
      "name": "Forest",
      "colors": ["#5A3F37", "#2C7744"]
  },
  {
      "name": "Nighthawk",
      "colors": ["#2980b9", "#2c3e50"]
  },
  {
      "name": "Superman",
      "colors": ["#0099F7", "#F11712"]
  },
  {
      "name": "Suzy",
      "colors": ["#834d9b", "#d04ed6"]
  },
  {
      "name": "Dark Skies",
      "colors": ["#4B79A1", "#283E51"]
  },
  {
      "name": "Deep Space",
      "colors": ["#000000", "#434343"]
  },
  {
      "name": "Decent",
      "colors": ["#4CA1AF", "#C4E0E5"]
  },
  {
      "name": "Colors Of Sky",
      "colors": ["#E0EAFC", "#CFDEF3"]
  },
  {
      "name": "Purple White",
      "colors": ["#BA5370", "#F4E2D8"]
  },
  {
      "name": "Ali",
      "colors": ["#ff4b1f", "#1fddff"]
  },
  {
      "name": "Alihossein",
      "colors": ["#f7ff00", "#db36a4"]
  },
  {
      "name": "Shahabi",
      "colors": ["#a80077", "#66ff00"]
  },
  {
      "name": "Red Ocean",
      "colors": ["#1D4350", "#A43931"]
  },
  {
      "name": "Tranquil",
      "colors": ["#EECDA3", "#EF629F"]
  },
  {
      "name": "Transfile",
      "colors": ["#16BFFD", "#CB3066"]
  },

  {
      "name": "Sylvia",
      "colors": ["#ff4b1f", "#ff9068"]
  },
  {
      "name": "Sweet Morning",
      "colors": ["#FF5F6D", "#FFC371"]
  },
  {
      "name": "Politics",
      "colors": ["#2196f3", "#f44336"]
  },
  {
      "name": "Bright Vault",
      "colors": ["#00d2ff", "#928DAB"]
  },
  {
      "name": "Solid Vault",
      "colors": ["#3a7bd5", "#3a6073"]
  },
  {
      "name": "Sunset",
      "colors": ["#0B486B", "#F56217"]
  },
  {
      "name": "Grapefruit Sunset",
      "colors": ["#e96443", "#904e95"]
  },
  {
      "name": "Deep Sea Space",
      "colors": ["#2C3E50", "#4CA1AF"]
  },
  {
      "name": "Dusk",
      "colors": ["#2C3E50", "#FD746C"]
  },
  {
      "name": "Minimal Red",
      "colors": ["#F00000", "#DC281E"]
  },
  {
      "name": "Royal",
      "colors": ["#141E30", "#243B55"]
  },
  {
      "name": "Mauve",
      "colors": ["#42275a", "#734b6d"]
  },
  {
      "name": "Frost",
      "colors": ["#000428", "#004e92"]
  },
  {
      "name": "Lush",
      "colors": ["#56ab2f", "#a8e063"]
  },
  {
      "name": "Firewatch",
      "colors": ["#cb2d3e", "#ef473a"]
  },
  {
      "name": "Sherbert",
      "colors": ["#f79d00", "#64f38c"]
  },
  {
      "name": "Blood Red",
      "colors": ["#f85032", "#e73827"]
  },
  {
      "name": "Sun on the Horizon",
      "colors": ["#fceabb", "#f8b500"]
  },
  {
      "name": "IIIT Delhi",
      "colors": ["#808080", "#3fada8"]
  },
  {
      "name": "Jupiter",
      "colors": ["#ffd89b", "#19547b"]
  },
  {
      "name": "50 Shades of Grey",
      "colors": ["#bdc3c7", "#2c3e50"]
  },
  {
      "name": "Dania",
      "colors": ["#BE93C5", "#7BC6CC"]
  },
  {
      "name": "Limeade",
      "colors": ["#A1FFCE", "#FAFFD1"]
  },
  {
      "name": "Disco",
      "colors": ["#4ECDC4", "#556270"]
  },
  {
      "name": "Love Couple",
      "colors": ["#3a6186", "#89253e"]
  },
  {
      "name": "Azure Pop",
      "colors": ["#ef32d9", "#89fffd"]
  },
  {
      "name": "Nepal",
      "colors": ["#de6161", "#2657eb"]
  },
  {
      "name": "Cosmic Fusion",
      "colors": ["#ff00cc", "#333399"]
  },
  {
      "name": "Snapchat",
      "colors": ["#fffc00", "#ffffff"]
  },
  {
      "name": "Ed's Sunset Gradient",
      "colors": ["#ff7e5f", "#feb47b"]
  },
  {
      "name": "Brady Brady Fun Fun",
      "colors": ["#00c3ff", "#ffff1c"]
  },
  {
      "name": "Black Rosé",
      "colors": ["#f4c4f3", "#fc67fa"]
  },
  {
      "name": "80's Purple",
      "colors": ["#41295a", "#2F0743"]
  },
  {
      "name": "Radar",
      "colors": ["#A770EF", "#CF8BF3", "#FDB99B"]
  },
  {
      "name": "Ibiza Sunset",
      "colors": ["#ee0979", "#ff6a00"]
  },
  {
      "name": "Dawn",
      "colors": ["#F3904F", "#3B4371"]
  },
  {
      "name": "Mild",
      "colors": ["#67B26F", "#4ca2cd"]
  },
  {

      "name": "Vice City",
      "colors": ["#3494E6", "#EC6EAD"]
  },
  {
      "name": "Jaipur",
      "colors": ["#DBE6F6", "#C5796D"]

  },
  {
      "name": "Jodhpur",
      "colors": ["#9CECFB", "#65C7F7", "#0052D4"]

  },
  {
      "name": "Cocoaa Ice",
      "colors": ["#c0c0aa", "#1cefff"]
  },
  {
      "name": "EasyMed",
      "colors": ["#DCE35B", "#45B649"]
  },
  {
      "name": "Rose Colored Lenses",
      "colors": ["#E8CBC0", "#636FA4"]
  },
  {
      "name": "What lies Beyond",
      "colors": ["#F0F2F0", "#000C40"]
  },
  {
      "name": "Roseanna",
      "colors": ["#FFAFBD", "#ffc3a0"]
  },
  {
      "name": "Honey Dew",
      "colors": ["#43C6AC", "#F8FFAE"]
  },
  {
      "name": "Under the Lake",
      "colors": ["#093028", "#237A57"]
  },
  {
      "name": "The Blue Lagoon",
      "colors": ["#43C6AC", "#191654"]
  },
  {
      "name": "Can You Feel The Love Tonight",
      "colors": ["#4568DC", "#B06AB3"]
  },
  {
      "name": "Very Blue",
      "colors": ["#0575E6", "#021B79"]
  },
  {
      "name": "Love and Liberty",
      "colors": ["#200122", "#6f0000"]
  },
  {
      "name": "Orca",
      "colors": ["#44A08D", "#093637"]
  },
  {
      "name": "Venice",
      "colors": ["#6190E8", "#A7BFE8"]
  },
  {
      "name": "Pacific Dream",
      "colors": ["#34e89e", "#0f3443"]
  },
  {
      "name": "Learning and Leading",
      "colors": ["#F7971E", "#FFD200"]
  },
  {
      "name": "Celestial",
      "colors": ["#C33764", "#1D2671"]
  },
  {
      "name": "Purplepine",
      "colors": ["#20002c", "#cbb4d4"]
  },
  {
      "name": "Sha la la",
      "colors": ["#D66D75", "#E29587"]
  },
  {
      "name": "Mini",
      "colors": ["#30E8BF", "#FF8235"]
  },
  {
      "name": "Maldives",
      "colors": ["#B2FEFA", "#0ED2F7"]
  },
  {
      "name": "Cinnamint",
      "colors": ["#4AC29A", "#BDFFF3"]
  },
  {
      "name": "Html",
      "colors": ["#E44D26", "#F16529"]
  },
  {
      "name": "Coal",
      "colors": ["#EB5757", "#000000"]
  },
  {
      "name": "Sunkist",
      "colors": ["#F2994A", "#F2C94C"]
  },
  {
      "name": "Blue Skies",
      "colors": ["#56CCF2", "#2F80ED"]
  },
  {
      "name": "Chitty Chitty Bang Bang",
      "colors": ["#007991", "#78ffd6"]
  },
  {
      "name": "Visions of Grandeur",
      "colors": ["#000046", "#1CB5E0"]
  },
  {
      "name": "Crystal Clear",
      "colors": ["#159957", "#155799"]
  },
  {
      "name": "Mello",
      "colors": ["#c0392b", "#8e44ad"]
  },
  {
      "name": "Compare Now",
      "colors": ["#EF3B36", "#FFFFFF"]
  },
  {
      "name": "Meridian",
      "colors": ["#283c86", "#45a247"]
  },
  {
      "name": "Relay",
      "colors": ["#3A1C71", "#D76D77", "#FFAF7B"]
  },
  {
      "name": "Alive",
      "colors": ["#CB356B", "#BD3F32"]
  },
  {
      "name": "Scooter",
      "colors": ["#36D1DC", "#5B86E5"]
  },
  {
      "name": "Terminal",
      "colors": ["#000000", "#0f9b0f"]
  },
  {
      "name": "Telegram",
      "colors": ["#1c92d2", "#f2fcfe"]
  },
  {
      "name": "Crimson Tide",
      "colors": ["#642B73", "#C6426E"]
  },
  {
      "name": "Socialive",
      "colors": ["#06beb6", "#48b1bf"]
  },
  {
      "name": "Subu",
      "colors": ["#0cebeb", "#20e3b2", "#29ffc6"]
  },
  {
      "name": "Broken Hearts",
      "colors": ["#d9a7c7", "#fffcdc"]
  },
  {
      "name": "Kimoby Is The New Blue",
      "colors": ["#396afc", "#2948ff"]
  },
  {
      "name": "Dull",
      "colors": ["#C9D6FF", "#E2E2E2"]
  },
  {
      "name": "Purpink",
      "colors": ["#7F00FF", "#E100FF"]
  },
  {
      "name": "Orange Coral",
      "colors": ["#ff9966", "#ff5e62"]
  },
  {
      "name": "Summer",
      "colors": ["#22c1c3", "#fdbb2d"]
  },
  {
      "name": "King Yna",
      "colors": ["#1a2a6c", "#b21f1f", "#fdbb2d"]
  },
  {
      "name": "Velvet Sun",
      "colors": ["#e1eec3", "#f05053"]
  },
  {
      "name": "Zinc",
      "colors": ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"]
  },
  {
      "name": "Hydrogen",
      "colors": ["#667db6", "#0082c8", "#0082c8", "#667db6"]
  },
  {
      "name": "Argon",
      "colors": ["#03001e", "#7303c0", "#ec38bc", "#fdeff9"]
  },
  {
      "name": "Lithium",
      "colors": ["#6D6027", "#D3CBB8"]
  },
  {
      "name": "Digital Water",
      "colors": ["#74ebd5","#ACB6E5"]
  },
  {
      "name": "Orange Fun",
      "colors": ["#fc4a1a", "#f7b733"]
  },
  {
      "name": "Rainbow Blue",
      "colors": ["#00F260", "#0575E6"]
  },
  {
      "name": "Pink Flavour",
      "colors": ["#800080", "#ffc0cb"]
  },
  {
      "name": "Sulphur",
      "colors": ["#CAC531", "#F3F9A7"]
  },
  {
      "name": "Selenium",
      "colors": ["#3C3B3F", "#605C3C"]
  },
  {
      "name": "Delicate",
      "colors": ["#D3CCE3", "#E9E4F0"]
  },
  {

      "name": "Ohhappiness",
      "colors": ["#00b09b", "#96c93d"]
  },
  {
      "name": "Lawrencium",
      "colors": ["#0f0c29", "#302b63", "#24243e"]
  },
  {
      "name": "Relaxing red",
      "colors": ["#fffbd5", "#b20a2c"]
  },
  {
      "name": "Taran Tado",
      "colors": ["#23074d", "#cc5333"]
  },
  {
      "name": "Bighead",
      "colors": ["#c94b4b", "#4b134f"]
  },
  {
      "name": "Sublime Vivid",
      "colors": ["#FC466B", "#3F5EFB"]
  },
  {
      "name": "Sublime Light",
      "colors": ["#FC5C7D", "#6A82FB"]
  },
  {
      "name": "Pun Yeta",
      "colors": ["#108dc7", "#ef8e38"]
  },
  {
      "name": "Quepal",
      "colors": ["#11998e", "#38ef7d"]
  },
  {
      "name": "Sand to Blue",
      "colors": ["#3E5151", "#DECBA4"]
  },
  {
      "name": "Wedding Day Blues",
      "colors": ["#40E0D0", "#FF8C00", "#FF0080"]
  },
  {
      "name": "Shifter",
      "colors": ["#bc4e9c", "#f80759"]
  },
  {
      "name": "Red Sunset",
      "colors": ["#355C7D", "#6C5B7B", "#C06C84"]
  },
  {
      "name": "Moon Purple",
      "colors": ["#4e54c8", "#8f94fb"]
  },
  {
      "name": "Pure Lust",
      "colors": ["#333333", "#dd1818"]
  },
  {
      "name": "Slight Ocean View",
      "colors": ["#a8c0ff", "#3f2b96"]
  },
  {
      "name": "eXpresso",
      "colors": ["#ad5389", "#3c1053"]
  },
  {
      "name": "Shifty",
      "colors": ["#636363", "#a2ab58"]
  },
  {
      "name": "Vanusa",
      "colors": ["#DA4453", "#89216B"]
  },
  {
      "name": "Evening Night",
      "colors": ["#005AA7", "#FFFDE4"]
  },
  {
      "name": "Magic",
      "colors": ["#59C173", "#a17fe0", "#5D26C1"]
  },
  {
      "name": "Margo",
      "colors": ["#FFEFBA", "#FFFFFF"]
  },
  {
      "name": "Blue Raspberry",
      "colors": ["#00B4DB", "#0083B0"]
  },
  {
      "name": "Citrus Peel",
      "colors": ["#FDC830", "#F37335"]
  },
  {
      "name": "Sin City Red",
      "colors": ["#ED213A", "#93291E"]
  },    
  {
      "name": "Rastafari",
      "colors": ["#1E9600", "#FFF200", "#FF0000"]
  },
  {
      "name": "Summer Dog",
      "colors": ["#a8ff78", "#78ffd6"]
  },
  {
      "name": "Wiretap",
      "colors": ["#8A2387", "#E94057", "#F27121"]
  },
  {
      "name": "Burning Orange",
      "colors": ["#FF416C", "#FF4B2B"]
  },
  {
      "name": "Ultra Voilet",
      "colors": ["#654ea3", "#eaafc8"]
  },
  {
    "name": "By Design",
    "colors": ["#009FFF", "#ec2F4B"]
  },
  {
      "name": "Kyoo Tah",
      "colors": ["#544a7d", "#ffd452"]
  },
  {
      "name": "Kye Meh",
      "colors": ["#8360c3", "#2ebf91"]
  },
  {
      "name": "Kyoo Pal",
      "colors": ["#dd3e54", "#6be585"]
  },
  {
      "name": "Metapolis",
      "colors": ["#659999", "#f4791f"]
  },
  {
      "name": "Flare",
      "colors": ["#f12711", "#f5af19"]
  },
  {
      "name": "Witching Hour",
      "colors": ["#c31432", "#240b36"]
  },
  {
      "name": "Azur Lane",
      "colors": ["#7F7FD5", "#86A8E7", "#91EAE4"]
  },
  {
      "name": "Neuromancer",
      "colors": ["#f953c6", "#b91d73"]
  },
  {
      "name": "Harvey",
      "colors": ["#1f4037", "#99f2c8"]
  },
  {
      "name": "Amin",
      "colors": ["#8E2DE2", "#4A00E0"]
  },
  {
      "name": "Memariani",
      "colors": ["#aa4b6b", "#6b6b83" , "#3b8d99"]
  },
  {
      "name": "Yoda",
      "colors": ["#FF0099", "#493240"]
  },
  {
      "name": "Cool Sky",
      "colors": ["#2980B9", "#6DD5FA", "#FFFFFF"]
  },
  {
      "name": "Dark Ocean",
      "colors": ["#373B44", "#4286f4"]
  },
  {
      "name": "Evening Sunshine",
      "colors": ["#b92b27", "#1565C0"]
  },
  {
      "name": "JShine",
      "colors": ["#12c2e9", "#c471ed", "#f64f59"]
  },
  {
      "name": "Moonlit Asteroid",
      "colors": ["#0F2027", "#203A43", "#2C5364"]
  },
  {
      "name": "MegaTron",
      "colors": ["#C6FFDD", "#FBD786", "#f7797d"]
  },
  {
      "name": "Cool Blues",
      "colors": ["#2193b0", "#6dd5ed"]
  },
  { 
      "name": "Piggy Pink",
      "colors": ["#ee9ca7", "#ffdde1"]
  },
  {
      "name": "Grade Grey",
      "colors": ["#bdc3c7","#2c3e50"]
  },
  {
    "name": "Telko",
    "colors": ["#F36222", "#5CB644", "#007FC3"]
  },
  {
      "name": "Zenta",
      "colors": ["#2A2D3E","#FECB6E"]
  },
  {
      "name": "Electric Peacock",
      "colors": ["#8a2be2","#0000cd","#228b22","#ccff00"]
  },
  {
      "name": "Under Blue Green",
      "colors": ["#051937","#004d7a","#008793","#00bf72","#a8eb12"]
  },
  {
      "name": "Lensod",
      "colors": ["#6025F5","#FF5555"]
  },
  {
      "name": "Newspaper",
      "colors": ["#8a2be2","#ffa500","#f8f8ff"]
  },
  {
    "name": "Dark Blue Gradient",
    "colors": ["#2774ae", "#002E5D", "#002E5D"]
  },
  {
      "name": "Dark Blu Two",
      "colors": ["#004680","#4484BA"]
  },
  {
      "name": "Lemon Lime",
      "colors":["#7ec6bc","#ebe717"]
  },
  {
      "name": "Beleko",
      "colors": ["#ff1e56", "#f9c942", "#1e90ff"]
  },
  {
      "name": "Mango Papaya",
      "colors": ["#de8a41","#2ada53"]
  },
  {
      "name": "Unicorn Rainbow",
      "colors": ["#f7f0ac","#acf7f0","#f0acf7"]
  },
  {
    "name": "Flame",
    "colors": ["#ff0000", "#fdcf58"]
  },
  {
      "name": "Blue Red",
      "colors": ["#36B1C7", "#960B33"]
  },
  {
      "name" : "Twitter",
      "colors" : ["#1DA1F2", "#009ffc"]
  },
  {
      "name": "Blooze",
      "colors": ["#6da6be", "#4b859e", "#6da6be"]
  },
  {
      "name": "Blue Slate",
      "colors": ["#B5B9FF", "#2B2C49"]
  },
  {
      "name": "Space Light Green",
      "colors": ["#9FA0A8", "#5C7852"]
  },
  {
      "name": "Flower",
      "colors": ["#DCFFBD", "#CC86D1"]
  },
  {
      "name": "Elate The Euge",
      "colors": ["#8BDEDA", "43ADD0", "998EE0", "E17DC2", "EF9393"]
  },
  {
      "name": "Peach Sea",
      "colors": ["#E6AE8C", "#A8CECF"]
  },
  {
      "name": "Abbas",
      "colors": ["#00fff0","#0083fe"]
  },
  {
      "name": "Winter Woods",
      "colors": ["#333333", "#a2ab58", "#A43931"]
  },
  {
      "name": "Ameena",
      "colors": ["#0c0c6d", "#de512b", "#98d0c1", "#5bb226", "#023c0d"]
  },
  {
      "name": "Emerald Sea",
      "colors": ["#05386b","#5cdb95"]
  },
  {
      "name": "Bleem",
      "colors": ["#4284DB", "#29EAC4"]
  },
  {
      "name": "Coffee Gold",
      "colors": ["#554023", "#c99846"]
  },
  {
      "name": "Compass",
      "colors": ["#516b8b", "#056b3b"]
  },
  {
      "name": "Andreuzza's",
      "colors": ["#D70652", "#FF025E"]
  },
  {
      "name": "Moonwalker",
      "colors": ["#152331", "#000000"]
  },
  {
      "name": "Whinehouse",
      "colors": ["#f7f7f7", "#b9a0a0", "#794747", "#4e2020", "#111111"]
  },
  {
      "name": "Hyper Blue",
      "colors": ["#59CDE9", "#0A2A88"]
  },
  {
      "name": "Racker",
      "colors": ["#EB0000","#95008A","#3300FC"]
  },
  {
      "name": "After the Rain",
      "colors": ["#ff75c3", "#ffa647", "#ffe83f", "#9fff5b", "#70e2ff", "#cd93ff"]
  },
  {
      "name": "Neon Green",
      "colors": ["#81ff8a", "#64965e"]
  },
  {
      "name": "Dusty Grass",
      "colors": ["#d4fc79", "#96e6a1"]
  },
  {
      "name": "Visual Blue",
      "colors": ["#003d4d", "#00c996"]
  }
]

================================================
File: /jsDocStyleGuide.md
================================================
# JSDoc Style Guide for Project

The codebase follows these JSDoc documentation patterns:

1. File Level Documentation
- Start each file with @file tag describing the file's purpose
- Include @module to define the module name
- List all dependencies with @requires tags
- Example:
        /**
         * @file Handles click event listening and text editing functionality
         * @module TextEditor
         * @requires DOMService
         */

2. Constants and Configuration
- Use @constant for all constant values
- Include type information in curly braces
- Add descriptive comments for each constant's purpose
- For complex objects, define custom @typedef definitions with detailed @property descriptions

3. Classes
- Mark with @class tag
- Include @constructor for constructor methods
- Include a concise class description
- Document all methods with:
  - Access level (@private or @public) 
  - @param for each parameter with type in curly braces
  - @returns when method returns a value
  - Brief description of method's purpose

4. Methods/Functions
- Each method has a single-line description
- Complex parameters use object destructuring documentation
- Private methods marked with @private
- Static methods marked with @static
- Return values always documented when present
- Use @callback for function type definitions passed as parameters

5. Type Definitions
- Complex types defined using @typedef
- Each property documented with @property
- Nested objects fully documented with types
- Function types documented with parameter and return types

6. Future Improvements
- Mark planned enhancements with @todo
- Include specific details about what needs to be done
- Example:
        /**
         * @todo Implement caching for repeated operations
         * @todo Add error handling for network failures
         */

7. Format
- Consistent indentation in multi-line comments
- Empty line between major comment sections
- Types always in curly braces
- Clear separation between description and tags

Example:
        /**
         * @typedef {Object} Config
         * @property {Object} attributes - Custom data attributes
         * @property {string} attributes.highlight - Data attribute name
         */

================================================
File: /package.json
================================================
{
  "dependencies": {
    "@prisma/client": "^6.1.0",
    "css-tree": "^3.1.0",
    "express": "^4.21.2",
    "sqlite3": "^5.1.7",
    "vanilla-picker": "^2.12.3"
  },
  "devDependencies": {
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "prisma": "^6.1.0"
  }
}


================================================
File: /src/prisma/schema.prisma
================================================
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Preset {
    id        Int      @id @default(autoincrement())
    name      String   @unique
    variables Json
    created   DateTime @default(now())
    updated   DateTime @updatedAt
}


================================================
File: /src/components/PresetManager/PresetManager.js
================================================
/**
 * @file Handles preset management for CSS variable configurations
 * @module PresetManager
 * @requires VariableManager
 */

export class PresetManager {
    /**
     * @constructor
     * @param {VariableEditor} editor - Reference to main editor instance
     */
    constructor(editor) {
        this.editor = editor;
        this.currentPreset = null;
        
        // Create UI elements
        this.element = document.createElement('div');
        this.element.className = 'preset-manager';
        
        // Save controls
        this.saveContainer = document.createElement('div');
        this.nameInput = document.createElement('input');
        this.nameInput.placeholder = 'Preset name';
        this.saveButton = document.createElement('button');
        this.saveButton.textContent = 'Save Preset';
        this.saveButton.addEventListener('click', () => this.handleSave());
        
        // Load controls
        this.loadContainer = document.createElement('div');
        this.presetSelect = document.createElement('select');
        this.loadButton = document.createElement('button');
        this.loadButton.textContent = 'Load Preset';
        this.loadButton.addEventListener('click', () => this.handleLoad());
        
        // Assemble UI
        this.saveContainer.appendChild(this.nameInput);
        this.saveContainer.appendChild(this.saveButton);
        this.loadContainer.appendChild(this.presetSelect);
        this.loadContainer.appendChild(this.loadButton);
        this.element.appendChild(this.saveContainer);
        this.element.appendChild(this.loadContainer);
    }

    /**
     * @todo Implement server endpoint integration
     * Saves current state as a preset
     */
    async handleSave() {
        const name = this.nameInput.value;
        if (!name) return;
        
        const variables = this.editor.manager.variables;
        const presetData = {
            name,
            variables: Object.fromEntries(variables)
        };
        
        // TODO: Send to server endpoint
        console.log('Preset to save:', presetData);
    }

    /**
     * @todo Implement server endpoint integration
     * Loads selected preset
     */
    async handleLoad() {
        const selectedPreset = this.presetSelect.value;
        if (!selectedPreset) return;
        
        // TODO: Load from server endpoint
        console.log('Loading preset:', selectedPreset);
    }

    /**
     * @todo Implement server endpoint integration
     * Updates preset list in UI
     */
    async updatePresetList() {
        // TODO: Fetch from server endpoint
        console.log('Updating preset list');
    }
}

================================================
File: /src/components/PresetManager/PresetManager.css
================================================
.preset-manager {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    display: grid;
    gap: 1rem;
}

.preset-manager input,
.preset-manager select,
.preset-manager button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.preset-manager button {
    background: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

.preset-manager button:hover {
    background: #45a049;
}


================================================
File: /src/components/PresetManager/PresetManager.md
================================================
# Preset Manager

UI component for saving and loading CSS variable configurations.

## Usage

    import { PresetManager } from './PresetManager.js';
    import { VariableEditor } from '../VariableEditor/VariableEditor.js';
    
    const editor = new VariableEditor(container, manager);
    const presetManager = new PresetManager(editor);
    
    // Add to DOM
    container.appendChild(presetManager.element);

## Features
- Save current variable state as named preset
- Load existing presets
- Ready for server integration
- Real-time UI updates

## API

### constructor(editor)
- `editor` {VariableEditor} - Reference to main editor instance

### handleSave()
- Saves current variable state as preset

### handleLoad()
- Loads selected preset

### updatePresetList()
- Updates UI with available presets


================================================
File: /src/components/VariableEditor/VariableEditor.js
================================================
/**
 * @file Main UI component for CSS variable editing
 * @module VariableEditor
 * @requires VariableManager
 * @requires TypeDetector
 * @requires ColorInput
 * @requires RangeInput
 * @requires DimensionInput
 * @requires BaseInput
 */

import { ColorInput } from '/src/components/inputs/ColorInput/ColorInput.js';
import { RangeInput } from '/src/components/inputs/RangeInput/RangeInput.js';
import { DimensionInput } from '/src/components/inputs/DimensionInput/DimensionInput.js';
import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';
import { PresetManager } from '/src/components/PresetManager/PresetManager.js';



export class VariableEditor {
  /**
   * @constructor
   * @param {HTMLElement} container - DOM element to mount editor
   * @param {VariableManager} variableManager - Instance of variable manager
   */
  constructor(container, variableManager) {
    this.container = container;
    this.manager = variableManager;
    this.inputs = new Map();
    this.previewStyle = document.createElement("style");
    document.head.appendChild(this.previewStyle);

    // Bind the method to maintain correct 'this' context
    this.handleVariableChange = this.handleVariableChange.bind(this);

    this.presetManager = new PresetManager(this);
    this.container.appendChild(this.presetManager.element);
   
  }

  /**
   * Renders the variable editor UI
   */
  render() {
    this.container.innerHTML = "";
    const list = document.createElement("div");
    list.className = "variable-list";

    for (const [name, data] of this.manager.variables) {
      const row = this.createVariableRow(name, data);
      list.appendChild(row);
    }

    this.container.appendChild(list);
  }

  /**
   * Creates input row for a variable
   * @param {string} name - Variable name
   * @param {Object} data - Variable data including type and value
   * @returns {HTMLElement} Row element containing variable input
   */
  createVariableRow(name, data) {
    const row = document.createElement("div");
    row.className = "variable-row";

    // Label
    const label = document.createElement("label");
    label.textContent = name;

    // Create appropriate input based on type
    const input = this.createInputForType(name, data);

    row.appendChild(label);
    row.appendChild(input.element);

    return row;
  }

  /**
   * Updates preview styles
   */
  updatePreview() {
    const css = Array.from(this.inputs.entries())
      .map(([name, input]) => `${name}: ${input.getValue()};`)
      .join("\n");

    this.previewStyle.textContent = `:root {\n${css}\n}`;
  }

  /**
   * Creates appropriate input component based on variable type
   * @param {string} name - Variable name
   * @param {Object} data - Variable data including type and value
   * @returns {BaseInput} Input component instance
   */
  createInputForType(name, data) {
    let input;
    
    switch (data.type) {
      case 'color':
        input = new ColorInput(name, data.value, this.handleVariableChange);
        break;
      case 'dimension':
        input = new DimensionInput(name, data.value, this.handleVariableChange);
        break;
      case 'number':
        input = new RangeInput(name, data.value, this.handleVariableChange);
        input.setRange(0, 1, 0.1);
        break;
      default:
        input = new BaseInput(name, data.value, this.handleVariableChange);
    }
    
    this.inputs.set(name, input);
    return input;
  }
  /**
   * Handles variable value changes
   * @param {string} variable - Variable name
   * @param {string} value - New value
   */
  handleVariableChange(variable, value) {
    const input = this.inputs.get(variable);
    if (input) {
        input.value = value;  // Update the input's value directly
        this.updatePreview(); // Update the preview with new values
    }
  }
}


================================================
File: /src/components/VariableEditor/VariableEditor.md
================================================
# Variable Editor

Main UI component for editing CSS variables with preset management.

## Usage

    import { VariableEditor } from './VariableEditor.js';
    import { VariableManager } from '/src/components/variableManager/variableManager.js';
    
    // Create and initialize variable manager
    const manager = new VariableManager();
    manager.loadFromCss(cssText);
    
    // Create editor instance
    const editor = new VariableEditor(
        document.getElementById('editor'),
        manager
    );
    
    // Render the editor UI
    editor.render();

## Features
- Automatic input type detection and rendering
- Live preview updates
- Input validation and error handling
- Reset functionality for individual variables
- Responsive grid layout
- Monospace variable name display
- Integrated preset management
- Save/load variable configurations
- Real-time preview updates

## Components
- PresetManager - Handles saving and loading variable configurations

## API

### constructor(container, variableManager)
- `container` {HTMLElement} - DOM element to mount editor
- `variableManager` {VariableManager} - Initialized variable manager instance

### render()
Renders the complete editor interface

### updatePreview()
Updates the live preview styles

### createVariableRow(name, data)
- `name` {string} - Variable name
- `data` {Object} - Variable data including type and value
- Returns: {HTMLElement} - Row element containing variable input

## Events
The editor emits change events when variables are updated:
- `variable-change`: Fired when any variable value changes
- `editor-reset`: Fired when editor is reset to initial state


================================================
File: /src/components/VariableEditor/VariableEditor.css
================================================
.variable-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.variable-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
}

.variable-row label {
    font-family: monospace;
    color: #444;
}


================================================
File: /src/components/typeDetector/typeDetector.md
================================================
# Type Detector

Detects and categorizes CSS value types using css-tree lexer.

## Usage

        import { TypeDetector } from './typeDetector.js';
        
        // Detect color values
        const colorType = TypeDetector.detect('#ff0000');  // returns 'color'
        
        // Detect dimension values
        const sizeType = TypeDetector.detect('16px');      // returns 'dimension'
        
        // Detect number values
        const numType = TypeDetector.detect('0.5');        // returns 'number'

## Supported Types
- color: Any valid CSS color value
- dimension: Values with units (px, rem, em, etc)
- number: Plain numeric values
- text: Default for unrecognized values

## API

### TypeDetector.detect(value)
- `value` {string} - CSS value to analyze
- Returns: {string} - Detected type name


================================================
File: /src/components/typeDetector/typeDetector.js
================================================
import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

export class TypeDetector {
    static detect(value) {
        try {
            // First try parsing as a complete value
            const ast = csstree.parse(value, { 
                context: 'value',
                onParseError: () => {} // Suppress parse errors
            });

            // Handle numeric values with decimal points
            if (value.match(/^\d*\.?\d+$/)) {
                return 'number';
            }

            // Handle dimensions (numbers with units)
            if (value.match(/^\d*\.?\d+(px|em|rem|%|vh|vw|s|ms)$/)) {
                return 'dimension';
            }

            // Handle colors
            if (value.match(/^#[0-9a-f]{3,8}$/i) || 
                value.match(/^(rgb|rgba|hsl|hsla)\(/i)) {
                return 'color';
            }

            return 'text';
        } catch (e) {
            // Fallback parsing for partial input
            return this.detectPartialValue(value);
        }
    }

    static detectPartialValue(value) {
        // Handle partial numeric input
        if (value.match(/^\d*\.?\d*$/)) {
            return 'number';
        }
        return 'text';
    }
}

================================================
File: /src/components/variableManager/variableManager.md
================================================
# Variable Manager

Manages CSS variables with type detection and validation.

## Usage

        import { VariableManager } from './variableManager.js';
        
        const manager = new VariableManager();
        
        const css = `
        :root {
            --primary-color: #ff0000;
            --spacing: 1rem;
        }`;
        
        const variables = manager.loadFromCss(css);
        // Result: Map {
        //   '--primary-color' => {value: '#ff0000', type: 'color'},
        //   '--spacing' => {value: '1rem', type: 'dimension'}
        // }

## API

### constructor()
Creates new VariableManager instance with empty variables Map

### loadFromCss(cssText)
- `cssText` {string} - CSS content to parse
- Returns: {Map} - Variables with their values and detected types
- Uses static methods from VariableParser and TypeDetector internally

================================================
File: /src/components/variableManager/variableManager.js
================================================
import { TypeDetector } from '/src/components/typeDetector/typeDetector.js';
import { VariableParser } from '/src/components/variableParser/variableParser.js';

export class VariableManager {
    constructor() {
        this.variables = new Map();
    }

    loadFromCss(cssText) {
        const extracted = VariableParser.extract(cssText);
        
        for (const [name, value] of Object.entries(extracted)) {
            // Strip any whitespace from the value
            const cleanValue = value.trim();
            
            // Detect the type using our improved TypeDetector
            const type = TypeDetector.detect(cleanValue);
            
            // Store both the original value and detected type
            this.variables.set(name, {
                value: cleanValue,
                type,
                original: value // Keep original for reference
            });
        }
        
        return this.variables;
    }

    // Add helper methods for working with variables
    getVariable(name) {
        return this.variables.get(name);
    }

    getAllOfType(type) {
        return Array.from(this.variables.entries())
            .filter(([_, data]) => data.type === type);
    }
}

================================================
File: /src/components/variableParser/variableParser.md
================================================
# Variable Parser

Extracts CSS custom properties from CSS text using css-tree AST parsing.

## Usage

        import { VariableParser } from './variableParser.js';
        
        const css = `
        :root {
            --primary-color: #ff0000;
            --spacing: 1rem;
        }`;
        
        const variables = VariableParser.extract(css);
        // Result: { 
        //   '--primary-color': '#ff0000',
        //   '--spacing': '1rem'
        // }

## API

### VariableParser.extract(cssText)
- `cssText` {string} - Raw CSS content to parse
- Returns: {Object} - Map of variable names to their values


================================================
File: /src/components/variableParser/variableParser.js
================================================
import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';

export class VariableParser {
    static extract(cssText) {
        const ast = csstree.parse(cssText);
        const variables = {};
        
        csstree.walk(ast, {
            visit: 'Declaration',
            enter(node) {
                if (node.property.startsWith('--')) {
                    variables[node.property] = csstree.generate(node.value);
                }
            }
        });
        
        return variables;
    }
}

================================================
File: /src/components/cssVarExtractor/cssVarExtractor.js
================================================
/**
 * @file CSS Variable extractor that parses CSS and extracts custom properties
 * @module cssVarExtractor
 * @requires css-tree
 */
import * as csstree from '/node_modules/css-tree/dist/csstree.esm.js';
//'css-tree';

export class CssVarExtractor {
    /**
     * Extract CSS custom properties from CSS text
     * @param {string} cssText - Raw CSS content to parse
     * @returns {Object} Object containing variable names and values
     */
    static extract(cssText) {
        const ast = csstree.parse(cssText);
        const variables = {};

        csstree.walk(ast, {
            visit: 'Declaration',
            enter(node) {
                if (node.property.startsWith('--')) {
                    variables[node.property] = csstree.generate(node.value);
                }
            }
        });

        return variables;
    }
}


================================================
File: /src/components/cssVarExtractor/README.md
================================================
# CSS Variable Extractor

Extracts CSS custom properties (variables) from CSS text.

## Usage

        import { CssVarExtractor } from './cssVarExtractor.js';
        
        const css = `
        :root {
            --primary-color: #ff0000;
        }`;
        
        const variables = CssVarExtractor.extract(css);
        // Result: { '--primary-color': '#ff0000' }

## API

### CssVarExtractor.extract(cssText)
- `cssText` {string} - Raw CSS content to parse  
- Returns: {Object} - Map of variable names to their values


================================================
File: /src/components/inputs/DimensionInput/DimensionInput.md
================================================
# Dimension Input

Input component for CSS dimension values with unit selection.

## Usage

    import { DimensionInput } from './DimensionInput.js';
    
    const input = new DimensionInput('--spacing', '16px', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Access parsed values
    console.log(input.numericValue); // 16
    console.log(input.unit);         // 'px'

## Supported Units
- px
- rem
- em
- vh
- vw
- %

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial dimension value
- `onChange` {function} - Change handler callback

### parseValue(value)
- `value` {string} - Dimension value to parse
- Returns: {Array} - [numericValue, unit]


================================================
File: /src/components/inputs/DimensionInput/DimensionInput.js
================================================
/**
 * @file Dimension input component for CSS size variables
 * @module DimensionInput
 * @requires BaseInput
 */

import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';

/**
 * Input component for handling CSS dimension values (px, rem, etc)
 * @class
 * @extends BaseInput
 */
export class DimensionInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial dimension value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        this.units = ['px', 'rem', 'em', 'vh', 'vw', '%'];
        [this.numericValue, this.unit] = this.parseValue(value);
        
        // Create container element
        this.element = document.createElement('div');
        this.element.className = 'dimension-input';
        
        // Create number input
        this.numberInput = document.createElement('input');
        this.numberInput.type = 'number';
        this.numberInput.value = this.numericValue;
        this.numberInput.addEventListener('input', (e) => {
            const currentUnit = this.unitSelect.value; // Preserve current unit
            this.handleChange(`${e.target.value}${currentUnit}`);
        });
        
        // Create unit select
        this.unitSelect = document.createElement('select');
        this.units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            this.unitSelect.appendChild(option);
        });
        this.unitSelect.value = this.unit;
        this.unitSelect.addEventListener('change', (e) => {
            const currentNumber = this.numberInput.value; // Preserve current number
            this.handleChange(`${currentNumber}${e.target.value}`);
        });
        
        this.element.appendChild(this.numberInput);
        this.element.appendChild(this.unitSelect);
    }
    
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            [this.numericValue, this.unit] = this.parseValue(newValue);
            this.numberInput.value = this.numericValue;
            this.unitSelect.value = this.unit;
            this.onChange(this.variable, this.value);
        }
    }
    
    /**
     * Parses dimension value into number and unit
     * @param {string} value - Value to parse (e.g. "100px")
     * @returns {Array} [number, unit]
     */
    parseValue(value) {
        const match = value.match(/^([\d.]+)(\D+)$/);
        return match ? [parseFloat(match[1]), match[2]] : [0, 'px'];
    }
}

================================================
File: /src/components/inputs/BaseInput/BaseInput.js
================================================
/**
 * @file Base class for all CSS variable input components
 * @module BaseInput
 */

/**
 * Base input component that handles common functionality for all CSS variable inputs
 * @class
 */
export class BaseInput {
    /**
     * Base input component for handling CSS variable changes
     * @class BaseInput
     * @classdesc Provides core input functionality for CSS variable manipulation
     * 
     * @constructor
     * @param {string} variable - CSS variable name (e.g. --primary-color)
     * @param {string} value - Initial value for the input
     * @param {function} onChange - Callback function when value changes
     * @returns {void}
     * 
     * @example
     * const input = new BaseInput('--primary-color', '#ffffff', (newValue) => {
     *   console.log(newValue);
     * });
     */
    constructor(variable, value, onChange) {
        this.variable = variable;
        this.value = value;
        this.initialValue = value;
        this.onChange = onChange;
        this.errors = [];
        
        // Create base element
        this.element = document.createElement('input');
        this.element.type = 'text';
        this.element.value = value;
        this.element.addEventListener('input', (e) => {
            this.handleChange(e.target.value);
        });
    }
    
    /**
     * Validates the current input value
     * @returns {boolean} True if valid, false otherwise
     */
    validate() {
        this.errors = [];
        if (!this.value) {
            this.errors.push('Value cannot be empty');
            return false;
        }
        return true;
    }
    
    /**
     * Resets input to initial value
     */
    reset() {
        this.value = this.initialValue;
        this.onChange(this.variable, this.value);
    }
    
    /**
     * Handles value changes with validation
     * @param {string} newValue - New value to set
     */
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.onChange(this.variable, this.value);
        }
    }
    
    /**
     * Returns current validation errors
     * @returns {Array<string>} List of error messages
     */
    getErrors() {
        return this.errors;
    }
    
    /**
     * Returns current input value
     * @returns {string} Current value
     */
    getValue() {
        return this.value;
    }
}

================================================
File: /src/components/inputs/BaseInput/BaseInput.md
================================================
# Base Input

Core input component that provides shared functionality for all CSS variable inputs.

## Usage

    import { BaseInput } from './BaseInput.js';
    
    const input = new BaseInput('--variable', 'value', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    input.handleChange('newValue');
    
    if (input.validate()) {
        console.log('Value is valid');
    }

## Features
- Value validation system
- Error tracking
- Reset functionality
- Standardized change handling
- Initial value preservation

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial value
- `onChange` {function} - Change handler callback

### validate()
- Returns: {boolean} - Validation result

### reset()
- Resets to initial value

### handleChange(newValue)
- `newValue` {string} - New value to set

### getErrors()
- Returns: {Array<string>} - Current validation errors

### getValue()
- Returns: {string} - Current value


================================================
File: /src/components/inputs/RangeInput/RangeInput.md
================================================
# Range Input

Numeric range input component with min/max constraints for CSS numeric values.

## Usage

    import { RangeInput } from './RangeInput.js';
    
    const input = new RangeInput('--opacity', '0.5', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Configure range constraints
    input.setRange(0, 1, 0.1);

## Features
- Configurable min/max values
- Adjustable step increments
- Automatic numeric parsing
- Value validation within bounds

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial numeric value
- `onChange` {function} - Change handler callback

### setRange(min, max, step)
- `min` {number} - Minimum allowed value
- `max` {number} - Maximum allowed value
- `step` {number} - Step increment value


================================================
File: /src/components/inputs/RangeInput/RangeInput.js
================================================
/**
 * @file Range slider input component for numeric CSS variables
 * @module RangeInput
 * @requires BaseInput
 */

import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';

/**
 * Input component for handling numeric range values
 * @class
 * @extends BaseInput
 */
export class RangeInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial numeric value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        
        // Create container for range and label
        this.element = document.createElement('div');
        this.element.className = 'range-input';
        
        // Parse initial value first
        this.numericValue = this.parseValue(value);
        
        // Configure range input with constraints before setting value
        this.min = 0;
        this.max = 1;
        this.step = 0.1;
        
        // Create and configure range input
        this.rangeInput = document.createElement('input');
        this.rangeInput.type = 'range';
        this.rangeInput.min = this.min;
        this.rangeInput.max = this.max;
        this.rangeInput.step = this.step;
        this.rangeInput.value = this.numericValue; // Set after constraints
        
        this.rangeInput.addEventListener('input', (e) => {
            this.handleChange(e.target.value);
        });
        
        // Create and set value label
        this.valueLabel = document.createElement('span');
        this.valueLabel.className = 'range-value';
        this.valueLabel.textContent = this.numericValue;
        
        // Assemble UI
        this.element.appendChild(this.rangeInput);
        this.element.appendChild(this.valueLabel);
    }
    
    parseValue(value) {
        // Handle values like "0.5" or ".5"
        return parseFloat(value) || 0;
    }    
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.valueLabel.textContent = newValue;
            this.rangeInput.value = newValue;
            this.onChange(this.variable, this.value);
        }
    }
    
    setRange(min, max, step) {
        this.min = min;
        this.max = max;
        this.step = step;
        
        this.rangeInput.min = min;
        this.rangeInput.max = max;
        this.rangeInput.step = step;
    }
}

================================================
File: /src/components/inputs/ColorInput/ColorInput.js
================================================
/**
 * @file Color picker input component for CSS color variables
 * @module ColorInput
 * @requires BaseInput
 * @requires vanilla-picker
 */


import { BaseInput } from '/src/components/inputs/BaseInput/BaseInput.js';
import Picker from '/node_modules/vanilla-picker/dist/vanilla-picker.mjs';
/**
 * Input component for handling CSS color values
 * @class
 * @extends BaseInput
 */
export class ColorInput extends BaseInput {
    /**
     * @constructor
     * @param {string} variable - CSS variable name
     * @param {string} value - Initial color value
     * @param {function} onChange - Change handler callback
     */
    constructor(variable, value, onChange) {
        super(variable, value, onChange);
        
        // Inject component styles if not already present
        if (!document.querySelector('#color-input-styles')) {
            const styles = document.createElement('style');
            styles.id = 'color-input-styles';
            styles.textContent = `
                .color-input {
                    display: inline-block;
                }
                
                .color-preview {
                    width: 40px;
                    height: 40px;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                .color-preview:hover {
                    border-color: #999;
                }
                
                .color-preview:focus {
                    outline: none;
                    border-color: #666;
                    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Create container element
        this.element = document.createElement('div');
        this.element.className = 'color-input';
        
        // Create color preview button
        this.preview = document.createElement('button');
        this.preview.className = 'color-preview';
        this.preview.style.backgroundColor = this.value;
        
        this.element.appendChild(this.preview);
        
        // Initialize color picker
        this.picker = new Picker({
            parent: this.preview,
            color: this.value,
            popup: 'right',
            onChange: (color) => {
                this.handleChange(color.hex);
            }
        });
    }
    
    /**
     * @override
     * Handles value changes with validation
     * @param {string} newValue - New color value
     */
    handleChange(newValue) {
        if (this.validate()) {
            this.value = newValue;
            this.preview.style.backgroundColor = newValue;
            this.onChange(this.variable, this.value);
        }
    }
}



================================================
File: /src/components/inputs/ColorInput/ColorInput.css
================================================
.color-input {
    display: inline-block;
}

.color-preview {
    width: 40px;
    height: 40px;
    border: 2px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.color-preview:hover {
    border-color: #999;
}

.color-preview:focus {
    outline: none;
    border-color: #666;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
}


================================================
File: /src/components/inputs/ColorInput/ColorInput.md
================================================
# Color Input

Color picker component for CSS color variables using vanilla-picker.

## Usage

    import { ColorInput } from './ColorInput.js';
    
    const input = new ColorInput('--primary-color', '#ff0000', (variable, value) => {
        console.log(`${variable} changed to ${value}`);
    });
    
    // Add to DOM
    container.appendChild(input.element);

## Features
- Color picker popup interface
- Color preview element
- HEX color value handling
- Real-time preview updates
- Supports all CSS color formats

## API

### constructor(variable, value, onChange)
- `variable` {string} - CSS variable name
- `value` {string} - Initial color value
- `onChange` {function} - Change handler callback

### element
- {HTMLElement} - Main component container element

### preview
- {HTMLElement} - Color preview element

### handleChange(newValue)
- `newValue` {string} - New color value to set


================================================
File: /src/components/inputs/demo/combined.html
================================================
<!DOCTYPE html>
<html>
<head>
    <title>CSS Variable Input Components Demo</title>
    <style>
        .component-container {
            margin: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .color-preview {
            width: 50px;
            height: 50px;
            border: 1px solid #000;
            margin: 10px 0;
        }
        .result {
            margin-top: 10px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <h1>CSS Variable Input Components</h1>

    <div class="component-container">
        <h2>Color Input</h2>
        <button id="colorButton">Pick Color</button>
        <div class="color-preview" id="colorPreview"></div>
        <div id="colorResult" class="result"></div>
    </div>

    <div class="component-container">
        <h2>Range Input</h2>
        <input type="range" id="rangeInput">
        <div class="range-controls">
            <label>Min: <input type="number" id="minInput" value="0"></label>
            <label>Max: <input type="number" id="maxInput" value="1"></label>
            <label>Step: <input type="number" id="stepInput" value="0.1"></label>
        </div>
        <div id="rangeResult" class="result"></div>
    </div>

    <div class="component-container">
        <h2>Dimension Input</h2>
        <input type="number" id="dimensionValue">
        <select id="dimensionUnit">
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="em">em</option>
            <option value="vh">vh</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
        </select>
        <div id="dimensionResult" class="result"></div>
    </div>

    <script type="module">
        import { ColorInput } from '../ColorInput/ColorInput.js';
        import { RangeInput } from '../RangeInput/RangeInput.js';
        import { DimensionInput } from '../DimensionInput/DimensionInput.js';

        // Color Input Setup
        const colorInput = new ColorInput('--primary-color', '#ff0000', (variable, value) => {
            document.getElementById('colorResult').textContent = `${variable}: ${value}`;
            document.getElementById('colorPreview').style.backgroundColor = value;
        });
        colorInput.picker.setOptions({ parent: document.getElementById('colorButton') });
        document.getElementById('colorPreview').style.backgroundColor = colorInput.getValue();

        // Range Input Setup
        const rangeInput = new RangeInput('--opacity', '0.5', (variable, value) => {
            document.getElementById('rangeResult').textContent = `${variable}: ${value}`;
        });
        const range = document.getElementById('rangeInput');
        range.value = rangeInput.numericValue;
        range.addEventListener('input', () => rangeInput.handleChange(range.value));

        // Dimension Input Setup
        const dimensionInput = new DimensionInput('--spacing', '16px', (variable, value) => {
            document.getElementById('dimensionResult').textContent = `${variable}: ${value}`;
        });
        const dimValue = document.getElementById('dimensionValue');
        const dimUnit = document.getElementById('dimensionUnit');
        dimValue.value = dimensionInput.numericValue;
        dimUnit.value = dimensionInput.unit;
        
        [dimValue, dimUnit].forEach(el => {
            el.addEventListener('change', () => {
                dimensionInput.handleChange(`${dimValue.value}${dimUnit.value}`);
            });
        });
    </script>
</body>
</html>