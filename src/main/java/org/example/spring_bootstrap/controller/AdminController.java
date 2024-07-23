package org.example.spring_bootstrap.controller;

import lombok.RequiredArgsConstructor;
import org.example.spring_bootstrap.model.User;
import org.example.spring_bootstrap.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/admin")
@Controller
@RequiredArgsConstructor
public class AdminController {
    private final UserService userService;

    @GetMapping
    public String adminPage(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("users", userService.findAll());
        model.addAttribute("admin", userService.findByEmail(user.getEmail()));
        return "admin_page";
    }

    @PostMapping("/addUser")
    public String addUser(@ModelAttribute("user") User user) {
        userService.save(user);
        return "redirect:/admin";
    }

    @PostMapping("/updateUser")
    public String updateUser(@ModelAttribute("user") User user) {
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            user.setPassword(userService.findById(user.getId()).getPassword());
            userService.update(user);
        } else {
            userService.save(user);
        }
        return "redirect:/admin";
    }

    @PostMapping("/deleteUser")
    public String deleteUser(@ModelAttribute("user") User user) {
        User userToDelete = userService.findByEmail(user.getEmail());
        userService.delete(userToDelete);
        return "redirect:/admin";
    }
}
