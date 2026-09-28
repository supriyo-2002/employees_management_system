-- Insert departments
INSERT INTO departments (department_name)
VALUES
    ('Engineering'),
    ('Human Resources'),
    ('Finance'),
    ('Sales'),
    ('Marketing');



select * from departments;

-- Insert designations
INSERT INTO designations (designation_name)
VALUES
    ('CEO'),
    ('Engineering Manager'),
    ('Senior Developer'),
    ('Developer'),
    ('HR Manager'),
    ('HR Executive'),
    ('Finance Manager'),
    ('Accountant'),
    ('Sales Manager'),
    ('Sales Executive'),
    ('Marketing Manager'),
    ('Marketing Executive'),
    ('Intern');


-- Insert employment types
INSERT INTO employment_types (employment_type_name)
VALUES
    ('Full-Time'),
    ('Part-Time'),
    ('Contract'),
    ('Internship');


-- Insert employment statuses
INSERT INTO employment_statuses (employment_status_name)
VALUES
    ('Active'),
    ('Inactive'),
    ('On Leave'),
    ('Resigned');

-- Insert employees
INSERT INTO employees (
    employee_id,
    first_name,
    last_name,
    email,
    phone,
    date_of_birth,
    department_id,
    designation_id,
    employment_type_id,
    employment_status_id,
    joining_date,
    manager_employee_id,
    annual_ctc
)
VALUES
    ('EMP-001', 'Rahul', 'Sharma', 'rahul@company.com', '9876543210', '1985-04-10', 1, 1, 1, 1, '2015-01-10', NULL, 2500000),
    ('EMP-002', 'Amit', 'Verma', 'amit@company.com', '9876543211', '1988-07-15', 1, 2, 1, 1, '2017-03-20', NULL, 1800000),
    ('EMP-003', 'Priya', 'Das', 'priya@company.com', '9876543212', '1992-02-12', 1, 4, 1, 1, '2020-06-15', NULL, 900000),
    ('EMP-004', 'Arjun', 'Roy', 'arjun@company.com', '9876543213', '2000-11-05', 1, 13, 4, 1, '2025-07-01', NULL, 300000),
    ('EMP-005', 'Sneha', 'Sen', 'sneha@company.com', '9876543214', '1990-08-22', 2, 5, 1, 1, '2018-02-10', NULL, 1200000),
    ('EMP-006', 'Rohit', 'Das', 'rohit@company.com', '9876543215', '1995-01-18', 2, 6, 1, 1, '2021-04-12', NULL, 700000),
    ('EMP-007', 'Ananya', 'Roy', 'ananya@company.com', '9876543216', '1987-09-30', 3, 7, 1, 1, '2016-08-01', NULL, 1600000),
    ('EMP-008', 'Vikash', 'Gupta', 'vikash@company.com', '9876543217', '1993-03-25', 3, 8, 1, 1, '2022-01-15', NULL, 650000),
    ('EMP-009', 'Karan', 'Mehta', 'karan@company.com', '9876543218', '1989-12-11', 4, 9, 1, 1, '2018-11-20', NULL, 1500000),
    ('EMP-010', 'Neha', 'Paul', 'neha@company.com', '9876543219', '1994-05-17', 4, 10, 1, 1, '2021-09-10', NULL, 750000),
    ('EMP-011', 'Sourav', 'Ghosh', 'sourav@company.com', '9876543220', '1991-06-20', 5, 11, 1, 1, '2019-05-15', NULL, 1400000),
    ('EMP-012', 'Riya', 'Bose', 'riya@company.com', '9876543221', '1996-10-08', 5, 12, 1, 1, '2022-07-18', NULL, 700000),
    ('EMP-013', 'Aditya', 'Sen', 'aditya@company.com', '9876543222', '1992-01-14', 1, 3, 1, 1, '2019-10-01', NULL, 1300000),
    ('EMP-014', 'Pooja', 'Dutta', 'pooja@company.com', '9876543223', '1998-03-09', 2, 6, 1, 1, '2023-01-10', NULL, 600000),
    ('EMP-015', 'Manish', 'Jain', 'manish@company.com', '9876543224', '1997-07-21', 3, 8, 1, 1, '2023-06-01', NULL, 550000),
    ('EMP-016', 'Tina', 'Das', 'tina@company.com', '9876543225', '1995-11-12', 4, 10, 1, 1, '2022-09-15', NULL, 720000),
    ('EMP-017', 'Abhishek', 'Roy', 'abhishek@company.com', '9876543226', '1999-02-28', 5, 12, 1, 1, '2024-01-10', NULL, 500000),
    ('EMP-018', 'Maya', 'Sen', 'maya@company.com', '9876543227', '2001-05-05', 1, 13, 4, 1, '2025-08-01', NULL, 300000),
    ('EMP-019', 'Sanjay', 'Das', 'sanjay@company.com', '9876543228', '1990-09-19', 1, 4, 1, 1, '2020-02-15', NULL, 950000),
    ('EMP-020', 'Ishita', 'Roy', 'ishita@company.com', '9876543229', '1998-12-03', 2, 6, 1, 1, '2023-03-20', NULL, 620000);


-- Set manager relationships
UPDATE employees
SET manager_employee_id = 1
WHERE employee_id = 'EMP-002';

UPDATE employees
SET manager_employee_id = 2
WHERE employee_id IN ('EMP-003', 'EMP-004', 'EMP-013', 'EMP-018', 'EMP-019');

UPDATE employees
SET manager_employee_id = 5
WHERE employee_id IN ('EMP-006', 'EMP-014', 'EMP-020');

UPDATE employees
SET manager_employee_id = 7
WHERE employee_id = 'EMP-008';

UPDATE employees
SET manager_employee_id = 9
WHERE employee_id IN ('EMP-010', 'EMP-016');

UPDATE employees
SET manager_employee_id = 11
WHERE employee_id IN ('EMP-012', 'EMP-017');



-- Insert skills
INSERT INTO skills (skill_name)
VALUES
    ('SQL'),
    ('Python'),
    ('Java'),
    ('React'),
    ('Node.js'),
    ('Power BI'),
    ('Excel'),
    ('Communication'),
    ('Project Management'),
    ('Data Analysis'),
    ('AWS'),
    ('Docker');

-- Insert employee skills
INSERT INTO employee_skills (employee_record_id, skill_id)
VALUES
    (1, 1),
    (1, 6),
    (1, 9),

    (2, 1),
    (2, 2),
    (2, 12),

    (3, 1),
    (3, 2),
    (3, 10),

    (4, 2),
    (4, 8),

    (5, 8),
    (5, 9),

    (6, 1),
    (6, 7),

    (7, 1),
    (7, 10),

    (8, 1),
    (8, 7),

    (9, 8),
    (9, 9),

    (10, 8),
    (10, 10),

    (11, 6),
    (11, 9),

    (12, 6),
    (12, 8),

    (13, 1),
    (13, 2),

    (14, 1),
    (14, 7),

    (15, 1),
    (15, 10),

    (16, 8),
    (16, 10),

    (17, 6),
    (17, 8),

    (18, 2),
    (18, 8),

    (19, 1),
    (19, 2),
    (19, 10),

    (20, 1),
    (20, 8);