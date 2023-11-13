package com.farmalum.backend.cartapp.backendcartapp.services;
import java.util.Optional;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

public interface AuthService {
   
    Optional<User> authenticate(String usernameOrCorreo, String password);
}