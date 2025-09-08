# Mary Bole's Joint (MBJ)
This solution is an E-commerce website to enable the buying and selling of products from the store.



# MBJ
*v1.0.0*

A web application with a microservice based backend web server that harmonizes admin, customers and delivery portals in the buying and selling of products from the MBJ store.

## Functionalities
* To enable admin add, edit and delete products
* To enable customers order for products
* To enable customers pay for products
* To enable customers get notified about order placement
* To enable admin get notified about order placement
* To enable admin receive orders
* To enable admin send out products for delivery



# Repo struture
The repository contains the following major folders:
* docs - This contains documents required for the development of the application, including the Plan_Schema drawing.io file 
* source - This is root folder of the application source code. This contains the backend folder and frontend folder.
* .github - This is the folder for the CI/CD workflow.



# Getting started
This application is built with the .NET 8 stack, leveraging C#, HTML, CSS, JavaScript and Bootstrap. It is built as an API based application in order to enable scalability, robustness and complete loose coupling.

## Backend
The backend of the application follows a microservice architecture, with each servcie utlizing the layered N-Tier architecture within itself. The five core services, which are built as API projects are:
* User service
* Product service
* Cart service
* Payment service
* Delivery service

It also contains services that are used by all other core servcies, known as hubs. These are built as Class Library projects*****, they are:
* Communication hub
* Data repository hub

Furthermore, the application follows the Test Driven Development (TDD) methodology. Tests for functions are first created, before the functions are then created. The tests are found in the **Test project**.

To get started with the project, use the **git clone** command to clone the repo.

## Test
In the App.Tests project, unit tests are found and can be run using the **dotnet test** command.

## Build and run
When all tests are run and passed, use the **dotnet run** command to start the application. Alternatively, in Visual Studio, you can go to **Debug > Start Without Debugging** or **Press CTRL + F5**.

When the application is ruuning, you can enter a number as input in the textbox and see the words output.

## Frontend
***...



# Host
The application is hosted on an Azure WebApp using CI/CD from GitHub***** . When a change is pushed to the ***** branch, the GitHub Action template is started, tests are run and the change is automatically pushed to the WebApp. The link to the hosted web page is: **[***](***)**.



# Further contribution
***...

To contribute to the repo:
* Fork the repo.
* Make changes.
* Push changes to your fork.
* Open a pull request.

