package com.farmalum.backend.cartapp.backendcartapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.farmalum.backend.cartapp.backendcartapp.services.UserService;
import com.farmalum.backend.cartapp.backendcartapp.config.exception;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.DataLogin;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService service;



    @GetMapping
    public List<User> list(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<User> userOptionl=service.findById(id);

        if(userOptionl.isPresent()){
            return ResponseEntity.ok(userOptionl.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/isAdmin/{username}")
    public ResponseEntity<?> show(@PathVariable String username){
        Optional<User> userOptionl=service.findByUsername(username);
        boolean isAdmin = service.isAdmin(username);

        if(userOptionl.isPresent() && isAdmin){
            return ResponseEntity.ok(true);
        }
        else if(userOptionl.isPresent() && !isAdmin){
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id){
        Optional<User> o = service.findById(id);
        if(o.isPresent()){
            User userDb = o.orElseThrow();
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(userDb));
        }
        
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id){

        Optional<User> o = service.findById(id);

        if (o.isPresent()){
            service.removeById(id);
            return ResponseEntity.ok("User Removed successfully");
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody DataLogin datos){

        var user = service.login(datos.getUsername(), datos.getPassword());

        if(user.isPresent()){
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
        
    }

    @ControllerAdvice
    public class GlobalExceptionHandler {

        @ExceptionHandler(exception.class)
        public ResponseEntity<String> handleResourceNotFoundException(exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
