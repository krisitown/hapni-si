package com.krisitown.hapnisi.controllers;

import com.krisitown.hapnisi.dtos.LoginDto;
import com.krisitown.hapnisi.models.User;
import com.krisitown.hapnisi.repositories.UsersRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;
import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/new")
    public String createNewUser(@RequestBody User user){
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);
        user.setToken(RandomStringUtils.randomAlphanumeric(10));
        usersRepository.save(user);
        return user.getToken();
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginDto loginDto) throws AuthenticationException {
        User user = usersRepository.findFirstByEmail(loginDto.getEmail());
        if(user == null){
            throw new AuthenticationException("Wrong email/password combination!");
        }
        if(BCrypt.checkpw(loginDto.getPassword(), user.getPassword())){
            return user.getToken();
        } else {
            throw new AuthenticationException("Wrong email/password combination!");
        }
    }

    @GetMapping("/get/{id}")
    public User getUser(@PathVariable Long id){
        User user = usersRepository.findById(id).get();
        user.setToken(null);
        user.setPassword(null);
        return user;
    }
}
