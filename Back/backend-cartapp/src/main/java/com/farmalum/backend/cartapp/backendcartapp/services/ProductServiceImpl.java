package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;
import com.farmalum.backend.cartapp.backendcartapp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

    //inyecta dependencias
    @Autowired
    private ProductRepository repository;

    @Override
    @Transactional(readOnly = true) //Para consultas
    public List<Product> findAll() {
        return (List<Product>) repository.findAll();
    }
    
}
