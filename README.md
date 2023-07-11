# Project Title: React Modal Pair Project

## Tech Stack
This project is built with React CRA and styled-components.


## Deployment
You can view the deployed application at: [React Modal Pair Project](https://react-modal-pair-project.vercel.app/)


## Deployment Image
![Deployment Image](https://github.com/Haru-Im/React_Modal_Pair_Project/assets/121601747/3d072417-03e9-4449-9f49-de317d3ddd7f)

## Contributors
[@Haru-Im](https://github.com/Haru-Im), [@mmms2000](https://github.com/mmms2000)


## Responsibilities
- [@mmms2000](https://github.com/mmms2000): Implemented the Button and Modal components.
- [@Haru-Im](https://github.com/Haru-Im): Implemented the Input and Select components.


## Git Commit Convention
- Commits consist of a type and a body
- The first letter of the type is capitalized
- Describe in an imperative mood (be concise and focus on the key points)

- The body should be as detailed as possible, focusing on what has been changed


## Folder Structure
- **src**
    - **pages** : Folder containing various page components.
        - **modals** : Folder containing components related to the modals page.
            - **button** : Folder containing button-related components.
                - **button-component** : Folder for storing reusable UI components.
                - **button-container** : Folder for storing components that group together several other components.
                - **button-handler** (or hooks) : Folder containing handlers related to buttons.
                - **button-layout** : Folder for storing components that construct the layout or larger structure of a page.
                - **button-style** : Folder for storing styling-related files.
                    - **button.style.js** : Contains styled-components related to the button.
                    - **button.theme.js** : Defines themes that change according to button properties and colors.
                - **button-utils** : Folder for storing utilities related to the button.
                    - **constant.js** : File defining constants related to the button.
                    - **icons.js** : File storing icons related to the button.
            - **input** : Has the same internal structure as the button folder.
            - **modal** : Has the same internal structure as the button folder.
            - **select** : Has the same internal structure as the button folder.
    - **redux** : Folder for managing global state with Redux.
    - **App.js** : The entry point of the application.


## Other Convention
We follow basic React naming conventions. The names of components start with a capital letter, and filenames are as close to the folder name as possible.


## Features
**Button:**
1. By simply assigning attribute and size properties to the component, you can easily create and use six different buttons.
2. Depending on the icon property, you can choose to display an icon after the large button or not.
3. Implemented an active property that changes CSS effects when the button is clicked.
4. Implemented an alert window and a prompt window for user input when the large button is clicked.
5. Defined repeating strings as constants to reduce human error.
6. Extracted repeating properties in styled-components into a theme for reusability.

**Input:**
1. If you don't enter anything in the 'name' input and click the save button, it won't display the input value.
2. Only numbers can be entered in the 'price' input, and the default value is set to 0, so if you delete all numbers, 0 remains.
3. Implemented a feature to break up numbers into three digits when entering numbers in the 'price' input.
4. If the 'name' field is fully entered, the corresponding 'name' and 'price' values are displayed in an alert.
5. The save button reuses the previously created button component (Property: primary, Size: small).

**Modal:**
1. Clicking the button triggers a pop-up modal.
2. If you click the first button, the modal window cannot be closed by clicking the external area, and it can only be closed with a button.
3. If you click the second button, the modal window can be closed by clicking the external area, as well as by clicking the 'X' button.
4. These modals are implemented through a portal.
5. Since the portal is also used on the 'select' page, it has been separated into its own component, Modals.portal.jsx, for reuse.

**Select:**
1. There are two select buttons, and when you click a button, a dropdown window appears below to allow you to select options.
2. Clicking outside the dropdown area will close the dropdown.
3. The first option button uses a portal to allow child elements to be displayed outside the parent element.
4. The second option button does not use a portal, and when it goes outside the parent element, `overflow: hidden` is applied.
5. Both elements display the selected option on the button when an option is selected.
6. The hover property is applied when the mouse is hovered over an option, and the hover does not exceed the parent element.

