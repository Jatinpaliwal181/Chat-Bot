var botui = new BotUI('rock-paper-scissors');

//global game variables
var gameState = {
  'wins': 0,
  'losses': 0,
  'games': 0,
  'result': 0
},
    resultMessages = ["no stalls", "1 stall", "no stalls"],
    playMessages = [' Car', ' Mobile', ' Machines'],
    maxGames = 5

// work-around as markdown is not always correctly parsed
function icon(iconName) {
  return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>'
}

// entrypoint for the conversation
function hello () {
  botui.message.bot({
    delay: 500,
    content: "Would you like to see stalls?"
  }).then(function () {
    return botui.action.button({
      delay: 1000,
      action: [{
        icon: 'home',
        text: 'yes',
        value: 'yes'
      }, {
        icon: 'times',
        text: 'No thanks',
        value: 'no'
      }]
    })
  }).then(function (res) {
    if (res.value === 'yes') {
      shifumi()
    } else {
      botui.message.add({
        delay: 500,
        type: 'html',
        content: icon('frown-o') + ' Another time perhaps'
      })
    }
  })
};

// main game loop
function shifumi () {
  botui.action.button({
    delay: 1000,
    addMessage: false,
    action: [{
      
      text: 'Car',
      value: '0'
    }, {
      
      text: 'Mobile',
      value: '1'
    }, {
      
      text: 'Machine',
      value: '2'
    }]
  }).then(function (res) {
    var playerMove =   parseInt(res.value)
    var result = res.value
    gameState.result = result
    
    botui.message.add({
      delay: 1000,
      loading: true,
      human: true,
      type: 'html',
      content: playMessages[playerMove]
    });
    return botui.message.bot({
      delay: 1000,
      loading: true,
      type: 'html',
      content: playMessages[playerMove]
    })
  }).then(function () {
    // fetch info from the global state
    var result = gameState.result
    return botui.message.bot({
      delay: 500,
      type: 'html',
      content: resultMessages[result]
    })
  }).then(function () {
    return botui.action.text({
      delay: 1000,
      action: {
        placeholder: 'Buy some milk'
      }
    })
  }).then(goodbye)
      
}

function goodbye () {
  return botui.message.bot({
    delay: 500,
    content: "You've played enough already. Get back to work!"
  })
}

hello()
//shifumi()
