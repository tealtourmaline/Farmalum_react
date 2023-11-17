package com.farmalum.backend.cartapp.backendcartapp.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.farmalum.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{

    Optional<List<Product>> findByNameContainingIgnoreCase(String nombre);
    
    @Query(value = "select p.id, p.price, p.name, p.stock, p.category_id, p.photo from products p join categories c on p.category_id = c.id where c.name =:category_name order by p.id ", nativeQuery = true)
    List<Product> findByCategoryName(@Param("category_name") String category_name);

    @Query(value = "select * from products p where p.stock > 0 order by p.id desc limit 10", nativeQuery = true)
    Optional<List<Product>> lastAddedProducts();
}
