package com.krisitown.hapnisi.repositories;

import com.krisitown.hapnisi.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<User, Long> {
    User findFirstByEmail(String email);
    User findFirstByToken(String token);
}
