# <a href="#"><img src="UI/img/logo1.png" title="FVCproductions" alt="FVCproductions" width="20%"></a>
Teamwork is an ​ internal social network for organizations’ employees. The goal of this
application is to facilitate more interaction between colleagues and facilitate team bonding.

[![Build Status](https://travis-ci.org/BlaiseJavan/Teamwork.svg?branch=develop)](https://travis-ci.org/BlaiseJavan/Teamwork) [![Coverage Status](https://coveralls.io/repos/github/BlaiseJavan/Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/BlaiseJavan/Teamwork?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/2151303871c6fd306efd/maintainability)](https://codeclimate.com/github/BlaiseJavan/Teamwork/maintainability)

# Documentation content

### UI 

    HTML
    CSS
    Javascript

### UI link
[Gh-pages](https://blaisejavan.github.io/Teamwork/UI/)


### Pivot tracker link
[Stories](https://www.pivotaltracker.com/n/projects/2398201)


## API

#### Language

```
Javascript
```

#### Server Environment

```
 NodeJS (Run-time environment for running JS codes)
 ```

#### Framework

```
 Express
 ```

#### Testing Framework

```
 Mocha, Chai 
 ```

#### Style Guide

```
Airbnb
```

#### Continuous Integration

```
Travis CI
```

#### Maintainability

```
Code Climate
```

#### Deployment

```
Heroku
```

### Endpoints

| Enpoint | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/auth/signup | POST | Signup |
| /api/v1/auth/signin | POST | login |
| /api/v1/articles | POST | create new article |
| /api/v1/articles | GET | view all article |
| /api/v1/articles/:id | PATCH | update article |
| /api/v1/articles/:id | GET | view a specific article |
| /api/v1/articles/:id | DELETE | Delete an article |
| /api/v1/articles/:tag/category | GET | view by category  |
| /api/v1/articles/:id/flag | GET | flag an article |
| /api/v1/articles/:id/comments | POST | create a comment |


### Responses

#### On success

>{ "status": 200, "data": { ... } }
​
#### On error

>{ "status": 400, "message": "error-message" }
​

### API link

[Heroku](https://teamwork-adc.herokuapp.com/)


## Getting started

These instructions will get you a copy of the project up and running on your local machine or server for development and testing purposes. Here are deployment notes on how to deploy the project on a live system.


### Prerequisites

To install the software on your local machine or server, you need first to clone the repository or download the zip file and once this is set up you are going to need to install NodeJS.


### Installing

The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

#### Run the server

```
> npm start
```

#### Run the test

```
> npm test
```

## Copyright

&copy; BLAISE Irakoze
