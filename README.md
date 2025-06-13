# ACF Slider Block plugin

Forked from https://github.com/colorful-tones/acf-slider-block.

## Features

- Container slider
- Full width slider
- Thumbnails
- Various improvements

<img src="slider-container_test.PNG" alt="80x25" width="250"/>
<img src="slider-full_width_test.PNG" alt="80x25" width="800"/>


## Installation

__Required__ You must have [ACF PRO](https://https://www.advancedcustomfields.com/pro/) installed and activated in order to use the ACF Slider Block plugin.

## Manual

1. Upload the `acf-slider-block` folder to the plugins directory (typically `wp-content/plugins`) in your WordPress installation.
2. Activate the ACF Slider Block plugin.
3. Create a new post or page, and insert the Slider block.
4. That's it.

## Changelog

### Latest beta

- Add Slider options
  - Thumbnail justification
  - Height
  - Title
  - Arrows
- Add Slide options
  - Image position
  - Title
- ACF improvements
- Add/Improve Gutenberg editor css

### 0.1.2 – 2023-11-15

Squash the bugs 🐛

- Adjust `z-index` for 'Add Slide' button in editor for easier clicking.
- Adjust placeholder, default image paths for resilience.
- Remove unnecessary `console.log()`

### 0.1.1 – 2023-11-15

Initial release, which includes:

- Slider Block which uses [SwiperJS](https://swiperjs.com/) (v11.0.4)
  - Two style variations: "Default" and "Complex" - examples of how you might have different variations. Feel free to fork and modify!
