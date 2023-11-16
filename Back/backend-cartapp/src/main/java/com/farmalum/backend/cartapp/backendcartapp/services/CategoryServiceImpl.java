package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Categories;
import com.farmalum.backend.cartapp.backendcartapp.repositories.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository CategoryRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Categories> findAll() {
        return (List<Categories>) CategoryRepository.findAll();
    }

    @Override
    public Categories findById(int id) {
        return CategoryRepository.findById(id);
    }

    @Override
    public boolean validateExistence(String name) {

        var unaCategoria=CategoryRepository.validateExistence(name);

        if (unaCategoria != null) {
            return true;
        }
        return false;
    }
}
