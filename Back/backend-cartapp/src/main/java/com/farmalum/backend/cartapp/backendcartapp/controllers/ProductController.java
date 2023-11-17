package com.farmalum.backend.cartapp.backendcartapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmalum.backend.cartapp.backendcartapp.config.exception;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;
import com.farmalum.backend.cartapp.backendcartapp.services.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
//@RequestMapping("/api") //por si se requiere otra ruta
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> list(){
        return service.findAll();
    }

    @GetMapping("/products/category/{category_name}")
    public List<Product> listByCategory(@PathVariable String category_name){
        return service.findByCategoryName(category_name);
    }

    @GetMapping("/products/search/{name}")
    public Optional<List<Product>> searchByName(@PathVariable String name){
        return service.searchByName(name);
    }

    @GetMapping("/products/last")
    public Optional<List<Product>> lastAddedProducts(){
        return service.lastAddedProducts();
    }

    @ControllerAdvice
    public class GlobalExceptionHandler {

        @ExceptionHandler(exception.class)
        public ResponseEntity<String> handleResourceNotFoundException(exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    
}

