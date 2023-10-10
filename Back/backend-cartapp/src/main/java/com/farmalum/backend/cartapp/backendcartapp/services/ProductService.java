package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
