# Iron Healt



## Description

It is an application to improve communication between doctors and clinics. The main idea is based on developing a tool that can interpret what the patient tells the doctor.



## User Stories



-  **404:**

-  **Signup:** I can sign up as a doctor in the platform and write about the patients

-  **Login:** I can login to the platform as a doctor, create and see my patients history

-  **Logout:** I can logout from the platform 

-  **Add patient** Add a new patient and create his history

-  **List patients** See a list of all my patients

-  **Search patient** Search patientes by name or birthdate

-  **Medical histories** CRUD medical histories



## Backlog


- Upload profile picture
- Use medical API


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

- `/patients`
  - RestaurantListPageComponent

  - public

  - shows all restaurants, links to details

  - search restaurants by name

- `/patients/create` 
  - RestaurantCreatePageComponent

  - user only

  - creates a new restaurant

  - navigates to restaurant's detail page after creation

- `/patients/:id` 
  - RestaurantDetailPageComponent 

  - public

  - details of one restaurant

  - button to add to favorite

  - show star if in favorites already

- `/profile/me` 
  - ProfilePageComponent

  - user only

  - my details

  - my favorite restaurants

  - restaurants created by me

- `/history`
   - ListPageComponent

   - private

   - shows all history,  to details

   - search history

- `/history/create`
   - MedicalHistoryCreatePageComponent

   - user only

- `/history/:id`
   - PatientDetailPageComponent

   - private

   - details of medical history

   - user only

   - my details

  - NotFoundPageComponent




## Components
- User component
  - Name
  - Password
- Patient component
  - _id
  - Name
  - Adress 
  - Email
  - Phone
- Medical History
  - Patient _id
  - Symptom 
  - Disease
  - Prescription  
## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() / synchronous
- Patient Service
  - Patient.list()
  - Patient.search(terms)
  - Patient.create(data)
  - Patient.detail(id)
  - Patient.removeFavorite(id)   
- History Service
  - History.list()
  - History.search(terms)
  - History.create(data)
  - History.detail(id)
# Server
## Models
- User model

```
username - String // required
password - String // required
```
- Patient model

```
_id
Username - String // required
Name - String // required
Email - String // required
Phone - Number // required
Address - String
```
- Medical History model

```
Patient _id
Symptom - String // required
Disease - String
Prescription - String
```
## API Endpoints (backend routes)
- GET /auth/me
  - 404 
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

https://github.com/hilaring/ironhack-project-3-server

### Slides
https://slides.com/hilaring/project-3