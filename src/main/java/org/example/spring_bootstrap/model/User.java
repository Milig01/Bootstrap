package org.example.spring_bootstrap.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;

@Entity
@Data
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    private int age;
    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Role> roles;
    @Transient
    private String[] roleNames;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return getRoles();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    public String getRolesToString() {
        return getRoles().stream().map(Role::getRole).map(a -> a.substring(5)).reduce((a, b) -> a + " " + b).orElse("");
    }
}
