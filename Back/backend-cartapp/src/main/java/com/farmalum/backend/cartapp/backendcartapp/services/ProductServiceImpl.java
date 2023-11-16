package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmalum.backend.cartapp.backendcartapp.config.exception;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;
import com.farmalum.backend.cartapp.backendcartapp.repositories.ProductRepository;
import com.farmalum.backend.cartapp.backendcartapp.repositories.CategoryRepository;

@Service
public class ProductServiceImpl implements ProductService{

    //inyecta dependencias
    @Autowired
    private ProductRepository ProductRepository;

    @Autowired
    private CategoryRepository CategoryRepository;

    @Override
    @Transactional(readOnly = true) //Para consultas
    public List<Product> findAll() {
        return (List<Product>) ProductRepository.findAll();
    }

    public List<Product> findByCategoryName(String category_name){

        var unaCategoria = CategoryRepository.validateExistence(category_name);

        if (unaCategoria == null || unaCategoria.getName().isBlank()){
            throw new exception("Categoría no encontrada con el nombre " + category_name);
        }
        return ProductRepository.findByCategoryName(category_name);
    }

    @Override
    public Optional<List<Product>> searchByName(String name) {

        var productos = ProductRepository.findByNameContainingIgnoreCase(name);

        if (!productos.isPresent() || productos.isEmpty() ){
            throw new exception("Artículos no encontrados con el criterio de búsqueda");
        }
        return productos;
    }

    @Override
    public Optional<Product> lastAddedProducts() {
        return ProductRepository.lastAddedProducts();
    }
}
