package com.farmalum.backend.cartapp.backendcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Categories;
import com.farmalum.backend.cartapp.backendcartapp.services.CategoryService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriesController {
    
    @Autowired
    private CategoryService service;

    @GetMapping("/categories")
    public List<Categories> list(){
        return service.findAll();
    }

    @GetMapping("/categories/{id}")
    public Categories listById(@PathVariable int id){
        return service.findById(id);
    }
}
