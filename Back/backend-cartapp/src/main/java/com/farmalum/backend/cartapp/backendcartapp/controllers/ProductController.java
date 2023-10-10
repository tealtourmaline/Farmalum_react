package com.farmalum.backend.cartapp.backendcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;
import com.farmalum.backend.cartapp.backendcartapp.services.ProductService;

@RestController
//@RequestMapping("/api") //por si se requiere otra ruta
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> list(){
        return service.findAll();
    }
}
