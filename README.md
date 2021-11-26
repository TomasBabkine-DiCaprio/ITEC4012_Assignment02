# Tomas Babkine-Di Caprio - ITEC4012 - Assignment 02
For this assignment, students had to clone an existing website using React. I decided to clone Instagram.

I cloned the homepage (/) and the user profile page (/profile).

Use npm start to run the project and click on Michelangelo's profile picture or name to navigate to his profile page. This is the same as using the real Instagram web app. To navigate back to the homepage, click on the Instagram logo.

To simulate the real social network, I populated my Instagram with dummy data. I.e. famous painters of the past centuries. This data is stored under the "databases" folder as JSON files and imported in the components where necessary.

## Components
Here is how I broke up my clone into components, as well as the reason why:


**1. home-page**
This is a container component that is used by the app.js file. This component is solely used for the purpose simplifying the display of the home page. It renders all the required components for the home page.


**2. profile-page**
This is a container component that is used by the app.js file. This component is solely used for the purpose simplifying the display of Michelangelo's profile page. It renders all the required components for the profile page.


**3. Hyperlink**
On Instagram, these links serve many purposes. They are the buttons for posting comments as well as following new users. I decided to create a simple component out of them. They take a text value, as well as a type as props. The type defines the styling of the hyperlink. 


**4. Navbar**
The navbar is found on every page and stays the same throughout the app.


**5. Post**
Posts are one of the most important components of Instagram. These clearly need to be a component as they are reused a lot throughout the app. These take many props such as: the image, the user who posted, number of likes, etc. 


**6. Posts-container**
This component houses all the individual posts and displays them with appropriate styling. To do this, it maps through an array containing all the fake posts created for this assignment and their required information. Thus, if someone wanted to add a new post to my assignment, they would just have to edit the "posts.json" file in the databases folder. The homepage would then update itself and display the added post.


**7. Story**
This component is purely visual and serves no purpose in this assignment. It is there to simulate the individual stories posted by users on Instagram. It displays the profile picture of the fake user who posted a fake story. 


**8. Stories-container**
This component maps through the users.json file in the database and displays all the stories with appropriate styling. For simplicity, it is assumed that every user stored in the database has posted a story, which is rendered by this component.

**9. User-profile**
This component displays all the information concerning the user (for the purpose of this assignment, Michelangelo). This component is used both on the homepage as well as the profile page. Since, it needs very different styling on both pages, this component takes a page prop which is used to conditionally render the right HTML.

**10. User-posts**
This is a component that maps through the account-owner-posts.json file and renders fake posts created by the user (Michelangelo).

**11. User-recommendations**
This component is rendered on the homepage. It contains all of the user recommendations for Michelangelo. 

**12. Profile-picture**
By far, the most common component on the Instagram UI, is the symbolic round user profile picture. This component is used for displaying stories and is found every where a user is mentioned. I decided to make a component for this very specific element as it appears very often on the UI and the styling (namely, the border-radius: 50%;) is fairly similar. For customization, this component takes a "type" prop which defines specific styling, such as the image size as well as its source.
