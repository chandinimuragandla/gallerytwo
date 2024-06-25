# Image Gallery

This project creates a dynamic image gallery using only JavaScript, without any pre-defined HTML or CSS. The gallery includes features such as hidden scrollbars, navigation buttons, and hover effects on images.

## Features

- *Dynamic Image Generation*: Images are generated dynamically from an array of URLs.
- *Hidden Scrollbars*: The scrollbar is hidden while still allowing horizontal scrolling.
- *Navigation Buttons*: Buttons to scroll left and right through the gallery.
- *Hover Effects*: Images scale up slightly when hovered over.
- *Mouse Wheel Scrolling*: Allows horizontal scrolling using the mouse wheel.

## HTML Structure

The HTML file contains a basic structure with a container for the gallery and a script tag for including the JavaScript file.

```sh
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="img.css">
    <style id="dynamic-styles"></style>
</head>
<body>
    <div id="gallery-container">
    </div>
    <script src="img.js"></script>
</body>
</html>
```

## Explanation

### 1. DOM Content Loaded Event

Ensures the script runs after the HTML content is fully loaded.

### 2. Element References

galleryContainer gets the reference to the container <div> where the gallery will be inserted.
dynamicStyles gets the reference to the <style> tag where the CSS will be inserted.

### 3. Image URLs Array

Defines an array of image URLs to be used in the gallery.

### 4. Dynamic CSS Styles

Injects CSS styles dynamically to style the gallery and its components.

### 5. Creating the Gallery Element

Creates a div element with the ID gallery and appends it to the galleryContainer.

### 6. Creating Gallery Items

Iterates over the image URLs, creates div elements with the class gallery-item and img elements, then appends them to the gallery.


### 7. Creating Navigation Buttons

Creates prev and next buttons, styles them, and appends them to the galleryContainer.


### 8. Button Click Event Listeners

Adds event listeners to the buttons to scroll the gallery left and right smoothly when clicked.


### 9. Mouse Wheel Scroll Event Listener

Adds an event listener to the gallery to enable horizontal scrolling with the mouse wheel.


# Contact 

 ### @Chandini
    ```sh 
        chandini@cinereoustechnologies.com
    ```
 ### @Mounika
    ```sh 
        mounika@cinereoustechnologies.com
    ```