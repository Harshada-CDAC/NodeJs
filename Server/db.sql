-- Create a new database named 'PersonalTracker'
CREATE DATABASE IF NOT EXISTS PersonalTracker;
USE PersonalTracker;

-- Create a table for users
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    Mobile VARCHAR(15),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for expenses
CREATE TABLE IF NOT EXISTS Expenses (
    ExpenseID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Amount DECIMAL(10, 2) NOT NULL,
    Category VARCHAR(50),
    Description TEXT,
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Create a table for income
CREATE TABLE IF NOT EXISTS Income (
    IncomeID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Amount DECIMAL(10, 2) NOT NULL,
    Source VARCHAR(50),
    Description TEXT,
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);


-- Insert values into the Users table
INSERT INTO Users (Username, Email, Password, Mobile) 
VALUES 
    ('harshada', 'harshada@gmail.com', 'password123', '1234567890'),
    ('vidya', 'vidya@example.com', 'vidya@123', '9876543210'),
    ('pranit', 'pranit@example.com', 'pranit456', '1234567890'),
    ('shohrab', 'shohrab@example.com', 'shohrab@123', '1234567890');

-- Insert values into the Expenses table
INSERT INTO Expenses (UserID, Amount, Category, Description, Date) 
VALUES 
    (1, 50.00, 'Food', 'Lunch with friends', '2024-02-15'),
    (1, 25.00, 'Transport', 'Taxi fare', '2024-02-16'),
    (2, 100.00, 'Shopping', 'New clothes', '2024-02-14');

-- Insert values into the Income table
INSERT INTO Income (UserID, Amount, Source, Description, Date) 
VALUES 
    (1, 500.00, 'Salary', 'Monthly salary', '2024-02-01'),
    (2, 300.00, 'Freelancing', 'Payment for freelance work', '2024-02-10');
