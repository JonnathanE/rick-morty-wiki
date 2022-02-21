// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Position and sizing of burger button
    bmBurgerButton: {
        position: "absolute",
        width: "20px",
        height: "20px",
        right: "42px",
        top: "35px",
    },
    // Color/shape of burger icon bars
    bmBurgerBars: {
        background: "#fff",
    },
    // Color/shape of burger icon bars on hover
    bmBurgerBarsHover: {
        background: "#a90000",
    },
    // Position and sizing of clickable cross button
    bmCrossButton: {
        height: "24px",
        width: "24px",
    },
    // Color/shape of close button cross
    bmCross: {
        background: "#fff",
    },
    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
    bmMenuWrap: {
        position: "fixed",
        width: "80%",
        height: "100%",
        top: "0px",
    },
    // General sidebar styles
    bmMenu: {
        background: "#373a47",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    // Morph shape necessary with bubble or elastic
    bmMorphShape: {
        fill: "#373a47",
    },
    // Wrapper for item list
    bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
    },
    // Individual item
    bmItem: {
        display: "inline-block",
    },
    // Styling of overlay
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
    },
};