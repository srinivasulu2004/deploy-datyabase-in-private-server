package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.repo.PersonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonController {
  private final PersonRepository repo;

  public PersonController(PersonRepository repo) {
    this.repo = repo;
  }

  @GetMapping
  public List<Person> getAll() {
    return repo.findAll();
  }

  @PostMapping
  public Person create(@RequestBody Person p) {
    return repo.save(p);
  }
}

