package org.example.spring_bootstrap.repository;

import org.example.spring_bootstrap.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {}
