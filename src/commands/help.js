
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Salesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Salesbot will help you increase your sales potential',
    color: '#2FA44F',
    text: '`/salesbot report` returns the latest sales news',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Salesbot',
    color: '#E3E4E6',
    text: '`/salesbot help` list commands \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
