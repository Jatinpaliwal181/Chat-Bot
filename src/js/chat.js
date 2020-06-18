var botui = new BotUI('chat-bot-ui');

var prodlist = {
    'Product 1': 0,
    'Product 2': 1,
    'Product 3': 2,
    'Custom Product': 3
  }, prodname = 'asd'

function icon(iconName) {
    return '<i class="botui-icon botui-message-content-icon fa fa-' + iconName + '"></i>'
  }
  
function hello () {
  botui.message.bot({
    delay: 500,
    content: "welcome to example stall"
   }).then(
        botui.message.bot({
            delay: 1000,
            content: "We deal in following products"
        })
    ).then(function () {
        return botui.action.button({
            delay: 1000,
            action: [{
                text: 'product 1',
                value: '0'
            }, {
                text: 'product 2',
                value: '1'
            }, {
                text: 'product 3',
                value: '2'
            }, {
                text: 'Custom Product',
                value: '3'
            }]
        })
    }).then(function(res){
        if (res.value === '0'){
            prod1()
        } else if (res.value === '1') {
            prod2()
        } else if (res.value === '2'){
            prod3()
        } else {
            customprod()   
        }
    })
}; 

function prod1(){
    botui.action.button({
        delay: 1000,
        action: [{
            text: 'Type 1',
            value: '0'
        }, {
            text: 'Type 2',
            value: '1'
        }, {
            text: 'Type 3',
            value: '2'
        }]
    }).then(function(res){
        if (res.value === '0'){
            botui.message.bot({
                delay: 1000,
                content: '1'
            })
        } else if (res.value === '1') {
            botui.message.bot({
                delay: 1000,
                content: '2'
            })
        } else {
            botui.message.bot({
                delay: 1000,
                content: '3'
            })
        }
    })
};

function prod2(){
    botui.action.button({
        delay: 1000,
        action: [{
            text: 'Type 1',
            value: '0'
        }, {
            text: 'Type 2',
            value: '1'
        }, {
            text: 'Type 3',
            value: '2'
        }]
    }).then(function(res){
        if (res.value === '0'){
            botui.message.bot({
                delay: 1000,
                content: '1'
            })
        } else if (res.value === '1') {
            botui.message.bot({
                delay: 1000,
                content: '2'
            })
        } else {
            botui.message.bot({
                delay: 1000,
                content: '3'
            })
        }
    })
};

function prod3(){
    botui.action.button({
        delay: 1000,
        action: [{
            text: 'Type 1',
            value: '0'
        }, {
            text: 'Type 2',
            value: '1'
        }, {
            text: 'Type 3',
            value: '2'
        }]
    }).then(function(res){
        if (res.value === '0'){
            botui.message.bot({
                delay: 1000,
                content: '1'
            })
        } else if (res.value === '1') {
            botui.message.bot({
                delay: 1000,
                content: '2'
            })
        } else {
            botui.message.bot({
                delay: 1000,
                content: '3'
            })
        }
    })
};

function customprod() {
    return botui.action.text({
        delay: 1000,
        action: {
            placeholder: 'Find Product',
            value: prodname
        }
    }).then(function(res) {
        prodname = res.value;
        return botui.message.bot({
            delay: 1000,
            loading: true,
            content: 'custom' + prodname
        });
    });
};

hello()