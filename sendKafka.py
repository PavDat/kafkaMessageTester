from confluent_kafka import Producer

bootstrap_servers = 'localhost:9092' 

topic = 'testingTopic'  

conf = {
    'bootstrap.servers': bootstrap_servers,
}
producer = Producer(conf)
message_value = 'Hello, Kafka! 123'
producer.produce(topic, value=message_value)
producer.flush()
print(f"Message sent to {topic}: {message_value}")
