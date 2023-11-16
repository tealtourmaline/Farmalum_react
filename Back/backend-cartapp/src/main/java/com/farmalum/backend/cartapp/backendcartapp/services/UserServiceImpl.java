package com.farmalum.backend.cartapp.backendcartapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.farmalum.backend.cartapp.backendcartapp.config.exception;
import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;
import com.farmalum.backend.cartapp.backendcartapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;
    
    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {

        var users = repository.findAll();

        for (User u : users) {
            if((u.getUsername().equals(user.getUsername()) ) || (u.getEmail().equals(user.getEmail()) )) {
                throw new exception("Ya existe un usuario con el mismo nombre o email");
            }
        }
        
       return repository.save(user);
    }

    @Override
    @Transactional
    public void removeById(Long id) {
        repository.eliminar(id);;
    }

    @Override
    public boolean isAdmin(String username) {

        return repository.isAdmin(username);
    }

    @Override
    public Optional<User> findByUsername(String username) {

        var unUsuario = repository.findByUsername(username);

        if (!unUsuario.isPresent()){
            throw new exception("Usuario no encontrado con el nombre de usuario: " + username);
        }

        return unUsuario;
    }

    @Override
    public Optional<User> login(String username, String password) {
        
        Optional<User> unUsuario = repository.findByUsername(username);
        User usuarioExistente = unUsuario.get();;

        if(!unUsuario.isPresent() || !usuarioExistente.isActive()){
            throw new exception("Usuario no encontrado con el nombre de usuario: " + username);
        }

        if (usuarioExistente.getPassword().equals(password)){
            return unUsuario;
        }

        throw new exception("Contraseña incorrecta");
    }


}
   

