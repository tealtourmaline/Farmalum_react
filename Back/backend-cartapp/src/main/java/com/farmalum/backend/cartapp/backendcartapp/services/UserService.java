package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;
import java.util.Optional;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

public interface UserService {
    
    List<User> findAll();

    Optional<User>findById(Long id);

    User save(User user);

    void remove(Long id);
    
}
