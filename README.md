# Sorti

Sorti is a simple and efficient tab display system built using HTML, CSS, and JavaScript (with jQuery). It allows for better content organization and sorting by providing a clean tabbed interface.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Sorti aims to provide a straightforward solution for creating tabbed content displays on web pages. It leverages jQuery for ease of use and simplicity in handling DOM manipulations.

## Features

- Simple and clean design
- Easy to integrate into existing projects
- Responsive and accessible
- Customizable styles and behavior

## Demo

Download and open the index file (in your browser) from the project folder.

## Installation

To use Sorti in your project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jvkrakowski/Sorti.git
    ```

2. **Include the necessary files in your project:**

    ```html
    <!-- Include CSS files -->
    <link rel="stylesheet" type="text/css" href="path/to/normalize.css">
    <link rel="stylesheet" type="text/css" href="path/to/style.css">

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

    <!-- Include Sorti JavaScript file -->
    <script src="path/to/sorti.js"></script>
    ```

3. **Add the HTML structure for the tabs:**

    ```html
    <div class="wrapper">
        <h1>Sorti &mdash; Demo</h1>
        <p>Simple tabs for better content display and organization.</p>

        <nav class="tab-nav" role="tablist">
            <a role="tab" id="1" class="active" aria-controls="1-panel" aria-selected="true">Tab 1</a>
            <a role="tab" id="2" class="inactive" aria-controls="2-panel" aria-selected="false">Tab 2</a>
            <a role="tab" id="3" class="inactive" aria-controls="3-panel" aria-selected="false">Tab 3</a>
            <a role="tab" id="4" class="inactive" aria-controls="4-panel" aria-selected="false">Tab 4</a>
        </nav>

        <div class="tab-panel" id="1-panel" role="tabpanel" aria-labelledby="1">
            <h2>Tab 1</h2>
            <p>Content for Tab 1...</p>
        </div>
        <div class="tab-panel" id="2-panel" role="tabpanel" aria-labelledby="2">
            <h2>Tab 2</h2>
            <p>Content for Tab 2...</p>
        </div>
        <div class="tab-panel" id="3-panel" role="tabpanel" aria-labelledby="3">
            <h2>Tab 3</h2>
            <p>Content for Tab 3...</p>
        </div>
        <div class="tab-panel" id="4-panel" role="tabpanel" aria-labelledby="4">
            <h2>Tab 4</h2>
            <p>Content for Tab 4...</p>
        </div>
    </div>
    ```

## Usage

Once you have included the necessary files and added the HTML structure, Sorti will automatically handle the tab switching functionality.

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="normalize.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="sorti.js"></script>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Judia Krakowski">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorti | Tab Display </title>
</head>
<body>
    <div class="wrapper">
        <h1>Sorti &mdash; Demo</h1>
        <p>Simple tabs for better content display and organization.</p>

        <nav class="tab-nav" role="tablist">
            <a role="tab" id="1" class="active" aria-controls="1-panel" aria-selected="true">Tab 1</a>
            <a role="tab" id="2" class="inactive" aria-controls="2-panel" aria-selected="false">Tab 2</a>
            <a role="tab" id="3" class="inactive" aria-controls="3-panel" aria-selected="false">Tab 3</a>
            <a role="tab" id="4" class="inactive" aria-controls="4-panel" aria-selected="false">Tab 4</a>
        </nav>

        <div class="tab-panel" id="1-panel" role="tabpanel" aria-labelledby="1">
            <h2>Tab 1</h2>
            <p>Content for Tab 1...</p>
        </div>
        <div class="tab-panel" id="2-panel" role="tabpanel" aria-labelledby="2">
            <h2>Tab 2</h2>
            <p>Content for Tab 2...</p>
        </div>
        <div class="tab-panel" id="3-panel" role="tabpanel" aria-labelledby="3">
            <h2>Tab 3</h2>
            <p>Content for Tab 3...</p>
        </div>
        <div class="tab-panel" id="4-panel" role="tabpanel" aria-labelledby="4">
            <h2>Tab 4</h2>
            <p>Content for Tab 4...</p>
        </div>
    </div>
</body>
</html>
```

## Customization

### CSS Customization

You can customize the appearance of the tabs by modifying the `style.css` file. Here are some common customizations:

- Change the tab colors
- Adjust the padding and margin
- Modify the border styles

### JavaScript Customization

You can also customize the behavior of the tabs by modifying the `sorti.js` file. For example, you can change the animation speed or add additional functionality when a tab is clicked.

## Contributing

We welcome contributions to improve Sorti! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

Sorti is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
