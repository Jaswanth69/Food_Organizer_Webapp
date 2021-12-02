# Food_Organizer_Webapp

Thought 
===================

The hunger Sustainable Development Goal calls for ending hunger in the world by 2030.

India is one of the worst performers on the global hunger index,ranking 94 out of 104 countries in 2020.

The existing methods mostly concentrate on how to manage the food waste rather than preventing the food waste.

We are making an web-app which helps the households to keep tracking of their supermarket purchases and expiry dates which avoids excess buying and wastage and gives a notification a day before the expiry date of a product in the inventory. same as the case with the shopkeeper he can also have customers so that he can directly add them and update their inventory directly.

Over view:-
================================

  Here we tried to develop an web application which would be used by a customer and seller(shop keeper) to keep track of their items. So as to reduce the wastage of food and to save their money.
  Using this web application a person can keep track of their inventory so that he can get an overview of what to buy in the next month so as to reduce the wastage indirectly implies in money saving by reminding him about his inventory items. So that he will use them before the expiry date.
  
people who can use
================================
People :- people who can use it to buy grocery monthly for reminders.
Shop Keepers

 Web app pages
 ===============================
 Landing page :- Briefly describes the aim and have an option to login(if already an user) Signup(If he/she is a new user)
 Login page :- For logging in the user based on authentication to use our service
 Sign up page:- To create a new user by taking the name email password Gender
 Forgot password :- If the user forgots his/her password an otp will be sent ot the mail 
 Home Page:- Here one can see the list of items divided based on their cateogaries such as fruits,Vegetables, Milk Products etc
    As the list of different types of fruits is high we kept a sepeate based once he cklicks more e gets redirects to it and can select from them
 Profile Page:- Here the user will change his profile if there is any discrepancy he/she may loss or gain weight etc
     Here we also try to give suggestions to eat based on his BMI
 Update Profile page:- One can update his/her profile in this web page.
 Calorie Page:- Once the user enters his/her height and weight bmi will be calculated and the number of calories required per day will also be shown to the user.
 Inventory Page:- He/she can see the entire list of items that are currently with him along with their expiry date and location(placement) and can delte items from it once        used.
 Notifications 🔔 :- It contains all the notifications and also the time left in days for each of the items in the inventory, So that the user can plan the use of them            accordingly. 
 
 
 
 Working Procedure
 ===============================
 At start he will be seeing the landing page which shows the brief description of our project and for what pupose it is designed for and how it can be used.
 if he/she is a new user
  He need to sign up by entering the required details asked in the signup page.
    username, email,phone,gender,password,confirm password.
 He has to login to the web app by entering his email and password
  Corresponding user authentication will be done if he/she is not a valid user(shows message as invalid user). else goes to the home page.
  Forgot password:- If the user forgets the password he/she can create a new password , he/she will get to give email to get otp.
      By clicking get otp he/she will get an otp to the email then by submitting the otp and verifying it he/she will be redirected to page to enter new password.
 Once he logges in he will be getting into the home page.
   he can visit the pages of his wish using navigation bar(for easy navigation around the pages)
 In the home page he/she can see a different set of food items divided based on catorgaries(ex fruits, vegetables). He will be given a option to choose from the items and add       it to the inventory. 
 In the inventory page he/she can see the whole list of items that are currently in their home unused along with their expiry dates. He/she can also select a location in whih       they have kept as it helps in easy location of the item.
 In the profile page he/she can see the details about him and can change accordingly by clicking update profile button.
 In the calorie page if he/she enters height and weight etc and get the bmi so that he can manage his bmi
 In the notification page he will be shown with all the notifications for the items in his inventory and the number of days left for the item to get expired.and it is alsosend     to the mail of the user accordingly to remind him.
 
 Usage withrespect to shopkeeper (to be implemented)
 idea is to have the customers with him and he can directly add items to their inventory based on their purchases.
 
 Developments Used
 ===============================
 MERN Stack development
 
 
 Our Team
 ============================
 G Pavan Sahith, M Yethin Chandra Sai, K Pavan Kalyan, V Jaswanth
 cs19b017,cs19b026,cs19b022,cs19b042.
 
 How to run our project
=============================
clone our project from the git repository
npm i (to install the dependencies)
npm start

Apps working Link
=============================
https://foodorganizerweb.herokuapp.com/

Future Implementations
============================
To implement the shopkeepers useage of this application.
Shopkeeper to have access to the inventory part of the users based on the users wish so that he can directly add to the inventory of the user based on the items requested by the user. 
