package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;
import java.util.Optional;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

public interface UserService {
    
    List<User> findAll();

    Optional<User>findById(Long id);

    Optional<User>findByUsername(String username);

    User save(User user);

    void removeById(Long id);

    boolean isAdmin(String username);
    
    Optional<User>login(String username, String password);

}
