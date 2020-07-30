export default {
    breakpoints: ["40em", "52em", "64em"],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
        primary: "#A3DEFC",
        secondary: "#FCE597",
        gray: "#DCDCE6",
        lightgray: "#f6f6ff",
        darkgray: "#3D3D40"
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: "Open Sans, sans-serif",
        heading: "Oswald, sans-serif"
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25
    },
    shadows: {
        small: "0 0 4px rgba(0, 0, 0, .125)",
        large: "0 0 24px rgba(0, 0, 0, .125)"
    },
    variants: {},
    text: {},
    buttons: {
        primary: {
            color: "white",
            bg: "darkgray",
            borderRadius: 4,
            fontFamily: "heading",
            textTransform: "uppercase",
            fontWeight: "bold"
        },
        secondary: {
            color: "white",
            bg: "darkgray",
            borderRadius: 4
        },
        highlight: {
            color: "black",
            bg: "secondary",
            borderRadius: 4
        },
        outline: {
            color: "darkgray",
            bg: "lightgray",
            border: "2px solid",
            borderColor: "darkgray",
            fontFamily: "heading",
            textTransform: "uppercase",
            fontWeight: "bold"
        }
    }
};
