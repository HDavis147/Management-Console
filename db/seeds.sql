INSERT INTO departments (name)
VALUES ("Sales"),
       ("Customer Support");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Rep", "48000", 1),
       ("Support Tech", "36000", 2),
       ("Support Lead", "62000", 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Johnson", 1, NULL),
       ("Beavis", "Prosel", 2, 3),
       ("Jim", "Moro", 3, NULL);