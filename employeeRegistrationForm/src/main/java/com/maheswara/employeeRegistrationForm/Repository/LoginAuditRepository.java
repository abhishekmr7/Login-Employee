package com.maheswara.employeeRegistrationForm.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.maheswara.employeeRegistrationForm.Model.LoginAudit;

public interface LoginAuditRepository extends JpaRepository<LoginAudit, Long> { }
