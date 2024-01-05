package com.reactive.reactive.services;

import com.reactive.reactive.entities.Product;
import reactor.core.publisher.Flux;

public interface ProductService {
    Flux<Product> findAll();
}
