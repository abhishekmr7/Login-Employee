package com.maheswara.employeeRegistrationForm.Service;

import com.maheswara.employeeRegistrationForm.Model.LoginAudit;
import com.maheswara.employeeRegistrationForm.Repository.LoginAuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuditService {

    @Autowired private LoginAuditRepository repo;

    public void logEvent(String username, String event) {
        LoginAudit audit = new LoginAudit();
        audit.setUsername(username);
        audit.setEventType(event);
        repo.save(audit);
    }
}
