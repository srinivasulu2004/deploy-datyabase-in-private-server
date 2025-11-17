package com.example.demo.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class PersonKafkaConsumer {

  @KafkaListener(topics = "dbserver1.public.person", groupId = "demo-group", containerFactory = "kafkaListenerContainerFactory")
  public void consume(String message) {
    System.out.println("Received Debezium event on topic dbserver1.public.person: " + message);
    // In a real app parse JSON and react accordingly
  }
}

