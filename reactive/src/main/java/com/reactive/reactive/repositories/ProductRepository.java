package com.reactive.reactive.repositories;

import com.reactive.reactive.entities.Product;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface ProductRepository extends R2dbcRepository<Product,Long>{
    Flux<Product> findByName(String name);

}
