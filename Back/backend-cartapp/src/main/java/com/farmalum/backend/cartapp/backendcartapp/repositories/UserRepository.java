package com.farmalum.backend.cartapp.backendcartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{
    
}
