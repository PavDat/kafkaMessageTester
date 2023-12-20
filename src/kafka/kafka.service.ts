import { Injectable, OnModuleInit } from '@nestjs/common';
import { KafkaClient, Consumer, ConsumerOptions, Message } from 'kafka-node';

@Injectable()
export class KafkaService implements OnModuleInit {
  private consumer: Consumer;

  constructor() {
    const client = new KafkaClient({ kafkaHost: 'localhost:9092' }); 
    const consumerOptions: ConsumerOptions = {
      autoCommit: true,
    };


    this.consumer = new Consumer(client, [{ topic: 'testingTopic' }], consumerOptions);
  }

  onModuleInit() {
    this.consumer.on('message', (message: Message) => {
      console.log('Received message:', message.value);
      
    });

    this.consumer.on('error', (err: any) => {
      console.error('Error with Kafka consumer:', err);
    });
  }
}
