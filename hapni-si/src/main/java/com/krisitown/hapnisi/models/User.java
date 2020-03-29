package com.krisitown.hapnisi.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fullName;
    private String email;
    private String password;
    private String phone;
    private int score;

    @Column(unique = true, nullable = false)
    private String token;

    @OneToMany
    private List<Post> posts;
}
