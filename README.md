This is a personal project series based on the lessons by @anonystick ([https://github.com/anonystick](https://github.com/anonystick)).
## 1. [Authentication and API Key Management (HS256)](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256/tree/master)

## 2. [ErrorHandler API](https://github.com/phamhung075/3-nodejs_mongodb_wc_showCase_ErrorHandler_API)

## 3. [ApiResponse Use Class](https://github.com/phamhung075/4-nodejs_mongodb_wc_showCase_ApiResponseUseClass/tree/master?tab=readme-ov-file)
## 4. SignUp and Login Public Access

### Introduction

`5-nodejs_mongodb_wc_showCase_SignUpLogin` is a Node.js application that demonstrates user signup and login functionality using MongoDB. This project focuses on public access management with efficient and secure authentication processes.

### Installation

- Clone the repository:
    
    `git clone https://github.com/phamhung075/5-nodejs_mongodb_wc_showCase_SignUpLogin.git`
    
- Change to the directory:
    
    `cd 5-nodejs_mongodb_wc_showCase_SignUpLogin`
    
- Install dependencies:

    `npm install`
    
### Features

- Access Service (`./services/access.service.js`): Manages user authentication including signup and login processes.
- Shop Service (`./services/shop.service.js`): Handles shop-related data transactions in the MongoDB database.
- KeyToken Service (`./services/keyToken.service.js`): Manages token creation and validation.
- Models:
    - **KeyToken Model** (`./models/keyToken.model.js`): Schema for key tokens.
    - **Shop Model** (`./models/shop.model.js`): Schema for shop data.
- Controllers:
    - **Access Controller** (`./controllers/access.controller.js`): Manages routes for user access and authentication.

### Usage

- Demonstrates user signup and login processes in a Node.js and MongoDB setup.
- Includes public access management for user authentication.
- MongoDB Connection: `mongodb://localhost:27017`

### Postman Example for SignUp

### Create API key

Please uncomment lines 8 to 11 in the `apiKey.service.js` file. Then, make a request to [http://localhost:3052/v1/api/shop/signup](http://localhost:3052/v1/api/shop/signup) to create an API key, which will be displayed in the Node.js server console.

```
    // //create Api for test
    // const newKey = await apiKeyModel.create({key: crypto.randomBytes(64).toString('hex'), permissions: ['0000']});
    // console.log(newKey);
    // //end Api for test
```

### signup

```
@url_dev=http://localhost:3052/v1/api/

### signup
POST {{url_dev}}/shop/signup
Content-Type: application/json
x-api-key: bebded361da96590be34a4b7f9aa3f9db3fc637d27c95428c13d4c0ad2145cdbdb2b2974df95715efaf5335c3c7f6368e86e5f29bb846e54b3250b48fc1d7fe7

{
    "name": "cartepopup",
    "email": "cartepopup4@gmail.com",
    "password": "abc123"
}
```

### login with new account

``` 
@url_dev=http://localhost:3052/v1/api/

### signup
POST {{url_dev}}/shop/login
Content-Type: application/json
x-api-key: fea4d5a8490256e493aaf5ce69b97a0c03549d0ada298ad4dff74068d4f5ee523d09ca0666087353d3df6b926f8b5860d131c1e8a783899b2fffd5143ae42fee

{
    "email": "cartepopup11@gmail.com",
    "password": "123"
}
```
For more detailed examples, refer to see [README.png](./help05.png).
