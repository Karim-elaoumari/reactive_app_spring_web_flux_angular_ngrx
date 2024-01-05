package com.reactive.reactive.entities;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table("product")
public class Product {
    @Id
    @NotNull(message = "Id is required")
    private Long id;
    @NotBlank(message = "Name is required")
    private String name;
    @NotNull(message = "Price is required")
    private double price;
    @NotBlank(message = "Category is required")
    private String category;

}
