package com.krisitown.hapnisi.dtos;

import com.krisitown.hapnisi.models.GeoPoint;
import lombok.Data;

@Data
public class PostCreateDto {
    private String title;
    private String description;
    private String image;
    private String location;
    private boolean active;
}
