// responsive.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Function to scale based on width
const scaleWidth = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;

// Function to scale based on height
const scaleHeight = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

// Function for scaling fonts based on screen size
const scaleFont = (size) => size * PixelRatio.getFontScale();

export { scaleWidth, scaleHeight, scaleFont };
