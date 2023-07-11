import {
  ATTRIBUTE_NEGATIVE,
  ATTRIBUTE_PRIMARY,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from "../button-utils";

export const theme = {
  attributes: {
    [ATTRIBUTE_PRIMARY]: {
      color: "rgb(0, 0, 0)",
      borderColor: "rgb(85, 239, 196)",
      backgroundColor: "rgb(85, 239, 196)",
      activeBackgroundColor: {
        [SIZE_LARGE]: "rgb(238, 238, 238)",
        [SIZE_MEDIUM]: "rgb(0, 184, 148)",
        [SIZE_SMALL]: "rgb(0, 184, 148)",
      },
    },
    [ATTRIBUTE_NEGATIVE]: {
      color: "rgb(214, 48, 49)",
      borderColor: "rgb(250, 177, 160)",
      backgroundColor: "rgb(250, 177, 160)",
      activeBackgroundColor: {
        [SIZE_LARGE]: "rgb(238, 238, 238)",
        [SIZE_MEDIUM]: "rgb(225, 112, 85)",
        [SIZE_SMALL]: "rgb(225, 112, 85)",
      },
    },
  },
  size: {
    [SIZE_LARGE]: {
      height: "50px",
      width: "200px",
      fontWeight: "600",
    },
    [SIZE_MEDIUM]: {
      height: "45px",
      width: "130px",
      fontWeight: "400",
    },
    [SIZE_SMALL]: {
      height: "40px",
      width: "100px",
      fontWeight: "400",
    },
  },
};
