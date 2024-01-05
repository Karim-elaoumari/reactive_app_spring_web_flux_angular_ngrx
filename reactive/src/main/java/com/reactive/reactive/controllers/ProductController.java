package com.reactive.reactive.controllers;

import com.reactive.reactive.entities.Product;
import com.reactive.reactive.repositories.ProductRepository;
import com.reactive.reactive.services.ProductService;
import io.netty.channel.EventLoop;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "http://localhost:4200",
        allowedHeaders = "*",allowCredentials = "true",maxAge = 3600,methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT}
)
@RequiredArgsConstructor
public class ProductController {
    private final ProductRepository productRepository;
    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> getAllProducts() {
        return productRepository.findAll()
                .flatMap(product -> Mono.just(product)
                        .filter(p -> p.getPrice() < getRealPrice(p.getPrice())));
    }
    public Double getRealPrice(Double price){
        for (int i = 0; i < 100000000; i++) {
            price = price +1;
        }
        return price;
    }
    @GetMapping(value = "/flatMap",produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> getProductsIds() {
        return productRepository.findAll().flatMap(product -> productRepository.findByName(product.getName()));
    }
    @GetMapping(value = "/merge",produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> getAllProductsStream(){
        return productRepository.findAll().mergeWith(productRepository.findAll().delayElements(Duration.ofSeconds(1)));
    }
    @GetMapping(value = "/all",produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> getAll() {
        return productRepository.findAll().filter(product -> product.getPrice() < getRealPrice(product.getPrice()));
    }
    @GetMapping(value = "/{id}")
    public Mono<Product> findById(@PathVariable Long id) {
        return productRepository.findById(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Product> save(@Valid @RequestBody Product product) {
        return productRepository.save(product);
    }

    @DeleteMapping(value = "/{id}")
    public Mono<Void> delete(@PathVariable Long id) {
        return productRepository.deleteById(id);
    }

}
