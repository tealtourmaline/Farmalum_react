package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;
import com.farmalum.backend.cartapp.backendcartapp.repositories.UserRepository;
import com.farmalum.backend.cartapp.backendcartapp.config.SecurityConfig;
import com.farmalum.backend.cartapp.backendcartapp.config.SecurityConfig.PasswordEncoder;


@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;    
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public Optional<User> authenticate(String usernameOrCorreo, String password) {
        Optional<User> user = userRepository.findByUsernameOrCorreo(usernameOrCorreo, usernameOrCorreo);

        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }

        return Optional.empty();
    }
}
