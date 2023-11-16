package com.farmalum.backend.cartapp.backendcartapp.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Categories;

public interface CategoryRepository extends CrudRepository<Categories, Long>{

    @Query(value = "select * from categories c where c.id =:id  FETCH FIRST 1 ROW ONLY", nativeQuery = true)
    Categories findById(@Param("id") int id);

    @Query(value = "select * from categories c where c.name =:name  FETCH FIRST 1 ROW ONLY", nativeQuery = true)
    Categories validateExistence(@Param("name") String name);
}
