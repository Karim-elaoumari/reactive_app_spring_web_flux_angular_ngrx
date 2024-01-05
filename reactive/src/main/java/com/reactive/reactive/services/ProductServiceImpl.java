package com.reactive.reactive.services;

import com.reactive.reactive.entities.Product;
import com.reactive.reactive.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private  final ProductRepository productRepository;
    @Override
    public Flux<Product> findAll() {
//        get all add to every product 10% discount  without blocking
     return null;
    }
}
