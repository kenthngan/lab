
# Simple API

You have already been introduced to NodeJS which allows for JavaScript to be run efficiently on a web server. In the exercises you interacted with the server through the Terminal window. In this worksheet you will be applying your existing skills to build an API that adheres to REST principles. By the end of the worksheet you will be in a position to start designing and building your own as part of your module assignment.

Before you start this or any other worksheet you should make sure you have the latest commits from the upstream repository on **GitHub**.
```
git pull upstream master
```
## 1 Principles of REST

REST is an *architectural style* that defines a series of *principles* that define how to interact with online resources.

1. resources define the _nouns_ in the API and each should be defined with a _unique URL_.
2. resources should be organised into _collections_.
3. interactions are the _verbs_ and should use standard _HTTP methods_ in agreed ways.
4. communication should be _stateless_ (each request should be self-contained and not rely on any server-state).

The `todo/` directory contains a simple API that demonstrates these key concepts. The first step is to run it and interact with it to understand these REST principles and how they are implemented.

Before starting this worksheet you should update the node installation to the latest version. Instructions can be found in the previous worksheet (04 Introduction to NodeJS).

1. use the **terminal** to navigate to the `todo` directory and install the module dependencies using `npm install`. This will install the [restify](http://restify.com/), [xmlbuilder](https://github.com/oozcitak/xmlbuilder-js) and [csprng](https://www.npmjs.com/package/csprng) modules. Take a few moments to read through their documentation.
2. open `index.js` then click on the **Run** button in the cloud 9 toolbar to run the nodejs script and run it in a preview tab.
3. launch **Chrome** and install the **Postman** REST plugin.
4. use *Postman* to access the API root URL, the format will be similar to `https://project-username.c9.io` where *project* is your Cloud 9 project and *username* is your Cloud 9 username. You should be able to copy and paste this from the Cloud 9 preview tab.
5. now try the `https://project-username.c9.io/lists` URL. Why does it return the same result (study `index.js` carefully).
6. each request returns a [response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes) that indicates its success or failure. Look up the response code to find out more.
7. the response also includes a **body** which contains any data returned from the API. Notice that the data is returned in **JSON** format. The data returned is known as its **representation**.

## 2 Collections and Resources

You need to fully understand the concepts of *Collections*, *Resources* and their *Representations*. We will learn about these by interacting with the lists API.

The `https://project-username.c9.io/lists` url represents a _collection_ of lists. We can add, view, update and delete individual lists. These actions correspond to standard database [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete). lets investigate how this works. As you complete each activity, read the source code to make sure you understand how it works.

1. perform a `GET /lists` operation. This is what you did in step 5 in the previous activity. Notice that this returns an error (we haven't added any items yet!)
2. perform a `POST /lists` request. the POST method indicates we want to _add a resource to a collection_. In the request body you need to include some json data in the request body (choose the **raw** tab and paste in the json data below). Notice the response includes a list **id**. You will get an **Unauthorized** error. Study `lists.js` to find out where this error is being generated.
```
{
    "name": "shopping",
    "list": [
        "Cheese",
        "Bread",
        "Butter"
    ]
}
```
3. The API makes use of [Basic Access Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side) and so you will need to add an *Authorization* header to your request.
  - click on the **Basic Auth** tab at the top of Postman and enter the valid _Username_ and _Password_, you can find these buried in the code... then click on the **Refresh Headers** button.
  - this combines both into a single string, base64 encodes it and uses it the create your _Authorization_ header.
  - you can now make the request, it will return a [201 response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes) and some data in the response body formatted as json.
  - since a RESTful API is _stateless_ you will need to pass the _Authorization header_ for every request that needs authentication.
4. repeat the POST request to add a second resource `['red', 'orange', 'green', 'blue', 'purple']`.
```
{
    "name": "shopping",
    "list": [
        "red",
        "orange",
        "green",
        "blue",
        "purple"
    ]
}
```
4. repeat the `GET /lists` request. This should now return the lists collection. The list contains the list names and links to access the individual lists. The use of **hypertext** to connect related resources is an important principle of REST architecture just like you can connect normal web pages using hyperlinks.
5. each list resource has its own unique URL. Perform a `GET /lists/xxx` request, where xxx is one of your list ids. The API should return the specified list.

### 2.1 Test Your Knowledge

1. Currently we can add and view resources (create and retrieve in CRUD terms). Use the code stub in `index.js` to implement a mechanism to allow resources to be deleted. Users need to be authorised to do this.
2. Finally implement a mechanism for resources to be updated using the **PUT** method. Again you need to check users are authorised.

## 3 Representations

In the previous exercise the data was returned in JSON format. This is not the list *collection* but a **representation** of the lists. A _representation_ is _a way of displaying a resource or collection_. Currently we are seeing _a JSON representation_ of our list collection. A resource may have many different representations, lets see an example.

1. click on the **Headers** button in _Postman_. In the _Header_ field enter `Accept` and assign it a value of `application/xml`.
2. make a `GET /lists` request. Notice the API returns an XML representation of the collection.
  - You are witnessing an important principle, the resource can be shown through different representations.

### 3.1 Test Your Knowledge

1. modify the API so that the user can choose between JSON and XML when viewing an individual list.
2. when adding a new list modify the API so that the list data can be supplied in XML format. You will need to import and load the [xml2js](https://www.npmjs.com/package/xml2js) module.

## Presentation

https://goo.gl/KWyi4l
