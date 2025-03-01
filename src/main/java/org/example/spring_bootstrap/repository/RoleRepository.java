package org.example.spring_bootstrap.repository;

import org.example.spring_bootstrap.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Set;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Set<Role> findRolesByRoleIn(Collection<String> roles);
}
