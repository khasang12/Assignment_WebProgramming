# BKZone - The paradise for laptops
Welcome to our BKZone project.

## ✋Introduction 

Nowadays, E-commerce should be no strange term for younger generation, especially shopaholics. In this assignment, we will take a deep look into how a intermediately-ranked e-commerce website works and attempt to implement a clone website with the knowledge acquired from Web Programming Course (CO3049) at HCMUT.

### Technology Stack
* Front-end: ReactJS, Bootstrap 5, SCSS preprocessor, and many complementary libaries provided by npm.
* Back-end: Vanilla PHP.
* Database: MySQL with MySQLi ODM.
* Security: Session, JWT,..
* Architecture Pattern: Model-View-Controller (MVC).

## 🎯Features Built
### Guests Level
1. Item Retrieval: Guests can search and filter items to their needs.
2. News and Policy: Furthermore, they can view the latest news and Statement of Policy for the company.

### User Level
1. Store and Purchase: User can add items to the waiting list and purchase the items with three different methods: CoD (cash on delivery), Banking and QR Code. User Session will be kept, so that the waiting list would not be refreshing after each login session.
2. Comment and Rating: User can give comments for each item. The overall score for the item will then be recalculated to match the update.
3. Payment History and Personal Information: User can track the status of orders and change personal information.

### Admin Level
1. Authorization: When the guest signed in as Admin, he would be able to redirect to Admin Dashboard. Otherwise, no further admin actions are allowed.
2. Item Management: View, Add, Edit, Delete an item.
3. Member Management: View, Ban (not yet impl), Delete an user.
4. Comment Management: View, Reply (not yet impl), Delete a comment.
5. News Management: View, Add, Edit, Delete News (data is stored as HTML file).
6. Resource Management: View, Edit a resource (data is stored as base64 media string).

# 💻 Installation

## Prerequisite

To run the project on your own, please make sure that you have already installed NodeJS and Apache Web Server (XAMPP is preferable) in your computer.

## Cloning repository
First, you will need to performing cloning on this Github Repository:
```bash
  https://github.com/khasang12-khmt/Assignment_WebProgramming.git
```


## Install Dependencies
Next, you would need to install all of dependencies for our project. So now, let's go to "client" folder and install all of them.
```bash
  cd client
  npm i
```

For server folder, turn on XAMPP Control Panel and start Apache (port 8080) + MySQL modules.

You have installed all of dependencies now, so let's get started!

## 🛠 Running BKPass


```bash
  cd client
  npm start
```


The ReactJS application will run on http://localhost:3000 and the PHP backend application will run on http://localhost:8080


Done! Let's discover our BKPass xD. Good luck and have fun <3
