package com.krisitown.hapnisi.controllers;

import com.krisitown.hapnisi.dtos.PostCreateDto;
import com.krisitown.hapnisi.models.Post;
import com.krisitown.hapnisi.models.User;
import com.krisitown.hapnisi.repositories.PostRepository;
import com.krisitown.hapnisi.repositories.UsersRepository;
import javassist.NotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostsController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping
    public List<Post> index(){
        return postRepository.findAll().stream().map(x -> {
            x.getOwner().setPassword(null);
            x.getOwner().setToken(null);
            return x;
        }).collect(Collectors.toList());
    }

    @PostMapping("/new")
    public Post create(@RequestBody PostCreateDto postCreateDto, @RequestHeader("userToken") String token){
        User user = usersRepository.findFirstByToken(token);
        Post post = new Post();
        BeanUtils.copyProperties(postCreateDto, post);
        post.setOwner(user);
        postRepository.save(post);
        post.getOwner().setPassword(null);
        post.getOwner().setToken(null);
        return post;
    }

    @GetMapping("/get/{id}")
    public Post get(@PathVariable Long id) throws NotFoundException {
        Post post = postRepository.findById(id).get();
        if(post == null){
            throw new NotFoundException("Post not found!");
        }
        post.getOwner().setPassword(null);
        post.getOwner().setToken(null);
        return post;
    }
}
