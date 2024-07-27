package org.example.spring_bootstrap.controller;

import lombok.RequiredArgsConstructor;
import org.example.spring_bootstrap.model.User;
import org.example.spring_bootstrap.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/admin")
@RestController
@RequiredArgsConstructor
public class AdminController {
    private final UserService userService;

    @GetMapping("/getAdmin")
    public User getAdmin(@AuthenticationPrincipal User user) {
        return userService.findByEmail(user.getEmail());
    }

    @GetMapping("/getAll")
    public List<User> getAll() {
        return userService.findAll();
    }

    @PostMapping(value = "/addUser")
    public User addUser(@ModelAttribute("user") User user) {
        return userService.save(user);
    }

    @PostMapping("/updateUser")
    public User updateUser(@ModelAttribute("user") User user) {
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            user.setPassword(userService.findByEmail(user.getEmail()).getPassword());
            return userService.update(user);
        }
        return userService.save(user);
    }

    @PostMapping("/deleteUser")
    public User deleteUser(@ModelAttribute("user") User user) {
        User userToDelete = userService.findByEmail(user.getEmail());
        userService.delete(userToDelete);
        return user;
    }
}
