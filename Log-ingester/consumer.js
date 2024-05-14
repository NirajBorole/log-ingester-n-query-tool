const {kafka} = require('./producer')

const consumer = kafka.consumer({ groupId: 'test-group' })

async function init() {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

init();