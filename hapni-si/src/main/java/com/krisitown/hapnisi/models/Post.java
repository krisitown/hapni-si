package com.krisitown.hapnisi.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String image;

    private String location;
    private boolean active;

    @ManyToOne
    private User owner;
}
