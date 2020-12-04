# Project Name - Flower Shop / Subscription Service

For project #3, I again decided to reuse the code I've written for project 1 & 2. 
Project #3 focusses on the subscription page '/subscription.html'.
Therefore, please ignore the other pages. 

The form is designed for users to be able to submit a request for a flower delivery service. 

The first part is about the user's details (name, email, address).
This is split into 2 boxes, which align horizontally on a larger screen and vertically on smaller screens.

The next 2 boxes are field sets, describing which kind of flowers the user would like to have (checkbox, multiple selections possible) and which frequency (radio buttons, only 1 value)

The 2 remaining fields behave the same as the first 2 boxes and align based on the available space. 

I included different types (text, email, date, option etc), used validations and finally styled the CTA in a beautiful lightCoral ;) 


## The problem

Only after creating the form, I learned that due to UX it is not recommended to align the label and form field in a row, because this way your eyes have to zig-zag down the page. I have not changed this for now, but will consider this in the future.

I have not managed yet to implement the checkboxes in a way that at least 1 checked box is required.

Since I don't feel too comfortable using flexbox but wanted to try anyways, I'm not entirely sure if there are some redundand display properties in the css file.

## View it live


