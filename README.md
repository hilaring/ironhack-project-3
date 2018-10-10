# ironhack-project-3
# Medical History


## Description



An app to have a control of patients and their medical history

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite Patient
-  **Login:** As a user I can login to the platform so that I can see my favorite Patient
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Patient** As a user I can add a Patient and extra houers worked
-  **List Patient** As a user I want to see the list of all days worked
-  **Edit  Patient** As a user can edit the extra hours worked
-  **Delate a  Patient**User can delete extra hours 

## Backlog

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of events created by the user
- list events the user is attending

Api text :
- Api data base

Homepage:
- 
Doctor profile with all his patients list 
  
# Client

## Routes

- `/`
  - HomePageComponent
  - public
  - just promotional copy
- `/auth/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to homepage after signup
- `/auth/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to homepage after login
- `/Patient` 
  - ListPageComponent
  - private
  - shows all Patients,  to details
  - search Patient by date
- `/Patient/create` 
  - PatientCreatePageComponent
  - user only
  - creates a new Patient
  - navigates to Patient detail page after creation
- `/Patient/:id` 
  - PatientDetailPageComponent 
  - private
  - details of one day work
  - ProfilePageComponent
  - user only
  - my details
- `**`
  - NotFoundPageComponent


## Components
-User component
-Name
-Password

- Patient component
-Name
-Adress 
-Email
-Phone

-Medical History
-Symptom 
-Disease (Enfermedad )
-Prescription  


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Patient Service
  - Patient.list()
  - Patient.search(terms)
  - Patient.create(data)
  - Patient.detail(id)
  -Patient.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
password - String // required

```

Patient model

```
Username - String // required
Name-String
Email - String
Phone-Number
Address - String
```

-Medical History model
```
-Symptom -Sring
-Disease (Enfermedad ) -String
-Prescription  -String

```
## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- POST /user/me/favorite
  - body:
    - PatienttId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- DELETE /user/me/favorite/:PatientId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
- GET /Patient?terms=foo
  - use search criteria if terms provided
  - array of Patient
- POST /Patient
  - body:
    - name
    - phone
    -Email
    - address
  - validation
    - fields not empty
  - create Patient
  - Patient object
- GET /Patient/:id

  

## Links

### Trello/Kanban
https://trello.com/b/xnjeS6l2/project-3-ironhack

### Git

https://github.com/hilaring/ironhack-project-3


[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
