// Design tokens for typography aligned with style guide

export const typography = {
  heading: {
    h1: {
      fontFamily: "Monument Extended, sans-serif",
      fontWeight: "400", // Regular
      fontSize: "72px",
    },
    h2: {
      fontFamily: "Monument Extended, sans-serif",
      fontWeight: "400",
      fontSize: "41px",
    },
    h3: {
      fontFamily: "Monument Extended, sans-serif",
      fontWeight: "400",
      fontSize: "32px",
    },
    h4: {
      fontFamily: "Monument Extended, sans-serif",
      fontWeight: "400",
      fontSize: "24px",
    },
    h5: {
      fontFamily: "Monument Extended, sans-serif",
      fontWeight: "400",
      fontSize: "20px",
    },
  },

  body: {
    xlarge: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "400", // Regular
      fontSize: "30px",
    },
    large: {
      regular: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "400",
        fontSize: "19px",
      },
      medium: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "500",
        fontSize: "19px",
      },
      semibold: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "600",
        fontSize: "19px",
      },
    },
    normal: {
      regular: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "400",
        fontSize: "16px",
      },
      medium: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "500",
        fontSize: "16px",
      },
      semibold: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "600",
        fontSize: "16px",
      },
    },
    small: {
      regular: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "400",
        fontSize: "14px",
      },
      semibold: {
        fontFamily: "Epilogue, sans-serif",
        fontWeight: "600",
        fontSize: "14px",
      },
    },
  },

  button: {
    large: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "700", // Bold
      fontSize: "19px",
    },
    normal: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "700",
      fontSize: "16px",
    },
    small: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "700",
      fontSize: "14px",
    },
  },

  display: {
    d1: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "600", // SemiBold
      fontSize: "72px",
    },
    d2: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "600",
      fontSize: "48px",
    },
    d3: {
      fontFamily: "Epilogue, sans-serif",
      fontWeight: "600",
      fontSize: "20px",
    },
  },
} as const;

export type TypographyKey = keyof typeof typography;
