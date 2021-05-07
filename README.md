
Name of the project:

# Interactive Form

This project is inserted on the 3rd Unit of the Full Stack TechDegree of TreeHouse.

On this project, I was asked to write the code on JavaScript regarding a form validation. The project files provided were: a folder named 'images', that contained the svgs for the page, a folder named css with two files of CSS: normalize and style, a folder named 'js' that contain the script.js, and an Html page.

The main objective of this project is to create the code that prevents the user submit the form without filling in all the necessary inputs correctly.

The project is divided in:

1. The "Name" field: in this part, the Name file should have a focus state by default;

2. The 'Job Role' section: the 'Other' option should show an input box when selected, and hide it when not selected; I use an eventListener with the parameter 'change' to achieve the result

3. The "T-Shirt Info" section: the user can only choose the colours from the selected shirt design. Not all colours are available for all designs. I use a loop inside an event listener to achieve the result;

4. The "Register for Activities" section: In this section, the user should be able to select activities without overlap with each other schedule and add the cost at the end.

5. The "Payment Info" section: in this section, the credit card option should be by default and the bitcoin/PayPal choice are hiding, only available when selected. 

6. The "Form Validation" section: in this section, I create functions for all the input fields with regex validation. Additional functions were created to help the validation.

7. Accessibility: The use of focus in the input help the user to see what is selected. The form validation also have a custom form validation check;

8. 1. the fields of 'Name', 'Email' and 'Card Number' have a method addEventListener() with the input type that provides extra help when filling the data. If the input is empty and if the content isn't valid a hint will appear
   2. the 'Email', 'Zip code', and 'CVV' field have a method addEventListener() with the input keyup that helps with a real-time error. If the input is not correct hints will appear with the correct format of the inputs.
