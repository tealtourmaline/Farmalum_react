package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Categories;

public interface CategoryService {
    List<Categories> findAll();
    Categories findById(int id);
    boolean validateExistence(String name);
}
