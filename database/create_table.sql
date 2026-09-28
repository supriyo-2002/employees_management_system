-- Create departments table
CREATE TABLE departments (
    department_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

-- Create designations table
CREATE TABLE designations (
    designation_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    designation_name VARCHAR(100) NOT NULL UNIQUE
);

-- Create employment types table
CREATE TABLE employment_types (
    employment_type_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employment_type_name VARCHAR(50) NOT NULL UNIQUE
);

-- Create employment statuses table
CREATE TABLE employment_statuses (
    employment_status_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employment_status_name VARCHAR(50) NOT NULL UNIQUE
);

-- Create employees table
CREATE TABLE employees (
    employee_record_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    employee_id VARCHAR(20) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20),
    date_of_birth DATE,
    department_id BIGINT REFERENCES departments(department_id),
    designation_id BIGINT REFERENCES designations(designation_id),
    employment_type_id BIGINT REFERENCES employment_types(employment_type_id),
    employment_status_id BIGINT REFERENCES employment_statuses(employment_status_id),
    joining_date DATE,
    manager_employee_id BIGINT REFERENCES employees(employee_record_id),
    annual_ctc NUMERIC(12,2)
);

-- Create skills table
CREATE TABLE skills (
    skill_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    skill_name VARCHAR(100) NOT NULL UNIQUE
);

-- Create employee skills table
CREATE TABLE employee_skills (
    employee_record_id BIGINT REFERENCES employees(employee_record_id),
    skill_id BIGINT REFERENCES skills(skill_id),
    PRIMARY KEY (employee_record_id, skill_id)
);