package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;
import java.util.Optional;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
    List<Product> findByCategoryName(String category_name);
    Optional<List<Product>> searchByName(String name);
    Optional<Product> lastAddedProducts();
}
