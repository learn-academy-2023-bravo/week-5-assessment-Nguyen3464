# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super implies there is a parent class defined.  The child class calling super will inherit all of the properties that the parent has.  This means the child has access to the methods built in the parent, the instance variables defined in the parent, and if the parrent has attr_accessors values the child inherits thoes as well.  So the child class will have its own unique properties when defined and the properties of the parent super class. 

Researched answer: When calling a super class the syntac is Child_Class < Super_Class.  Many classes can child classes to the super class.  The child can also have its own that inherits from parent which. This means the the Super's child, and the Child's child will inherit base properties from the super.  This chain of inheritance can go on so long as it follow this heiearchy.  All the children will have initialize keyword which invokes the super.  The instance variables that the child inherits needs to be stated in the parameter, and with the keyword super().  name is the inheritance instance variable, breed is the unique instance variable to the child
class Child < Super
    def initialize(name, breed)
        super(name)
        @breed = breed
    end
end

2. What is a gem? 

Your answer: In ruby dependencies are used as currated packets of code that help set up the enviorment for developing.  These dependencies will need a package manager the same way that yarn (yet another resource negotiatior) or or node.js npm (node package manager).  Ruby gems are opensource like the ruby programming language.

Researched answer: Another way to define dependencies is to call libraries. Ruby's packageing system was designed for creating, sharing, and installing of these dependencies or libaries.  RubyGems.org develop and host these resources,  another resource to retrive gems is GitHub. 

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational Databases are a way to store, access, retrieve, and analyze information.  They are defined as relational databases because the information in the data structure have  defined relationship.

Researched answer: The structure of Relational Databases is very similar to an excel spread sheet, with tables consisting of columns and rows.  The databases can contain multiple tables that all have in common data. The joining of information accross these tables is done through associations of primary and forigen keys. This Data structure pairs well with Object Orientated Programming. Centralised database, Distributed database, Personal database, End-user database, Commercial database, NoSQL database, Operational database, Relational database, Cloud database, Object-oriented database, Graph database.

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers that the model instances are assigned.  This cannot be duplicated and allows us to access and retrieve information from the database accurately.

Researched answer: This key is not change but accessed.  When assigning associations between tables the child table can inherit the parent tables primary key.  Multiple children tables or instances can share the same inheritance from the parent table, giving them a comonality when searching datapoints. The Primary Key prevent bad data from being entered into tables of interest, and maintains relational integrity between any number of tables.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Hyper Text Transfer Protocol verbs are the fundamental actions that can be preformed to interact with the internet.  From a local computer, a request is made to the server database.  The serven then returns a response.  Different actions can be made when interacting with the internet.  The actions consists display, creating, editing, and removing content.  The commands are get, post, put, patch, and delete.
get request --> displays content
post request --> create content
put request --> edits content
patch request --> edits content
detete request --> remove content

Researched answer: The GET method requests should only retrieve data. The HEAD method asks for a response identical to a GET request, but without the response body. The POST method add entries to the server. The PUT method replaces the current representations data request payload. The payload is the return from the server request. It is represented in the HTML, UI, and API data. The DELETE method deletes the data entries.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: In Machine Learning, the process of evaluating and testing trained machine learning model with data not providend initialy during the traininf process is called model validation.  This step is critial to verify the development of their machine learning models. This post training evaluation is to see how well the trained model behaves and preforms handling new unseen data.

2. RESTful routes: RESTful routes is a convention that follows standards of HTTP verbs, and URL practives when requesting and recieving data. The term REST stands for Representational State Transfer, this is the structure style for designing applications with networks. In RESTful routing the actions and resources are represented a URL and HTTP verb. This defines the action being preformed.

3. ERB: ERB stands for Embedded Ruby. It allows for Ruby code to function within HTML files to generate dynamic web pages. This is used for applicaions that are built with Ruby on Rails.  It allows for the seperation of presentation logic, business logic and maintain clean concise code.

4. Params: In Ruby on Rails applications, "params" refers to an object that holds the parameters sent to the Controller action as a request from the user. The "params" object allows the controller to access and manipulate the data submitted by the user. It is structure like a hash that contains key-value pairs. The keys are usually derived from the names of the form fields or URL query. The values are data submitted by the user. 

5. API: API stands for Application Programming Interface. It rules that allows different software applications to interact,share data, and functionality. An API defines the methods, structure, data formats that are used to request and receive information. They also perform actions from one application to another and acts as an interface between components. APIs can also allow for intergration of multiple software system. An example are gameing communities that build mods to enhance the experiance of existing games.
