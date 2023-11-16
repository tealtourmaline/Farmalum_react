package com.farmalum.backend.cartapp.backendcartapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


import com.farmalum.backend.cartapp.backendcartapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{

    @Query(value = "select u.admin from users u where u.username =:username  FETCH FIRST 1 ROW ONLY", nativeQuery = true)
    Boolean isAdmin(@Param("username") String name);

    @Query(value = "select * from users u where u.username =:username  FETCH FIRST 1 ROW ONLY", nativeQuery = true)
    Optional<User> findByUsername(@Param("username") String name);

    @Modifying
    @Query(value = "update users set active = false where id =:id_a_borrar" , nativeQuery = true)
    void eliminar(@Param("id_a_borrar")Long id);
    
}
