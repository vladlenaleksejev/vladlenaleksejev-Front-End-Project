# CTEC3905 Assignment

This is very basic boilerplate code for you to get started with.

## index.html

The `index.html` file includes a basic template with a link to the `css/styles.css` file and a script tag after the main content which links to the `js/scripts.js` file.

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P-Number</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  
  <h1>Hello World</h1>

  <script src="js/scripts.js"></script>
</body>
</html>
```

## css/styles.css

The `css/styles.css` file contains a basic starting template for a responsive page.

```
/* MOBILE AND GLOBAL STYLES */

/* applies to screens smaller than 500px (first breakpoint) */
/* and above unless overwritten below */

body {
  background: #fcc;
} 



/* TABLET STYLES */

@media screen and (min-width: 500px) {

  /* applies to screens wider than 499px */
  
  body {
    background: #cfc;
  } 
}



/* DESKTOP STYLES */

@media screen and (min-width: 1000px) {

  /* applies to screens wider than 999px */

  body {
    background: #ccf;
  } 
}

```

## js/scripts.js

The `js/scripts.js` file contains a simple console.log statement to confirm that it is being executed.

```
console.log("hello");
```


# References
- image gallery adapted from [here] (https://ggpc.co.nz/gaming-pc-nz-build-gallery/)
- image logo for contact us adapted from [here] (https://m.media-amazon.com/images/S/aplus-media/vc/d6d3c3bf-ba43-488d-8370-21b061c754b6.__CR0,0,1464,600_PT0_SX1464_V1___.jpg)
- images and information for the guide adapted from [here] (https://www.tomshardware.com/uk/reviews/how-to-build-a-pc,5867.html)
- Google maps code adapted from [here](https://www.google.com/maps/place/Big+Ben/@51.5007325,-0.1268141,17z/data=!3m1!4b1!4m5!3m4!1s0x487604c38c8cd1d9:0xb78f2474b9a45aa9!8m2!3d51.5007292!4d-0.1246254)
- nav bar idea adapted from [here](https://www.youtube.com/watch?v=gXkqy0b4M5g)
- Gallery pop up idea adapted from [here](https://www.youtube.com/watch?v=dkLpo4shS6c)
- Additional resources used from [here](https://www.w3schools.com/)


