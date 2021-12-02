import img1 from "../../images/svg-1.svg"
import img2 from "../../images/svg-2.svg"

export const homeObjOne = { // object one for landing poge
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Food Oraganizer',
    headline: 'Reduce food waste',
    description: `Using this web application a normal person can keep track of their inventory so that he can
     get an overview of what to buy in the next month so as to reduce the wastage indirectly implies in money saving`,
    buttonLabel: 'Get started',
    imgStart: false,
    img: img1,
    alt: 'Image',
    dark: true,
    primary:true,
    darkText: false,
    targetPath: "about"
}

export const homeObjTwo = { //object 2 for landing page
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact us',
    headline: 'Write to us Any time',
    description: `Feel Free to share your Feedback and difficulties`,
    buttonLabel: 'Contact us',
    imgStart: true,
    img: img2,
    alt: 'Contact',
    dark: false,
    primary:false,
    darkText: true,
    targetPath:"contact"
}

export const homeObjThree = {// object 3 for landing page
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join us Now',
    headline: 'Creating an account is much easier',
    description: `Get everything setup and ready in under 10 min. All you need to do is Add your Information and Done`,
    buttonLabel: 'Start Now',
    imgStart: false,
    img: img1,
    alt: 'Image',
    dark: true,
    primary:true,
    darkText: false,
    targetPath: "signup"

}