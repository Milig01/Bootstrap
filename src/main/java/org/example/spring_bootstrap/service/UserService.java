package org.example.spring_bootstrap.service;

import org.example.spring_bootstrap.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    User save(User user);
    List<User> findAll();
    void delete(User user);
    User findByEmail(String email);
    User update(User user);
}
