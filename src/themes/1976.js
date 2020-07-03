const darkBrown= '#744f25'
const brown = '#2b1d0e'
const yellow = '#f1d248'
const orange = '#fe8c1b'
const red = '#fb4f28'
const teal = '#8ff0e0'
const cream = '#fffbf1'

const theme = {
  plain: {
    color: cream,
    backgroundColor: brown
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin", "important", "deleted", "type", "attr-name"],
      style: {
        color: red
      }
    },
    {
      types: ["inserted", "function"],
      style: {
        color: yellow
      }
    },
    // {
    //   types: ["deleted"],
    //   style: {
    //     color: "#ff441a"
    //   }
    // },
    {
      types: ["changed"],
      style: {
        color: yellow
      }
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: teal
      }
    },
    {
      types: ["string", "char", "selector"],
      style: {
        color: teal
      }
    },
    {
      types: ["keyword", "variable", "boolean", "number"],
      style: {
        color: orange,
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: darkBrown
      }
    },
    {
      types: ["tag"],
      style: {
        color: yellow
      }
    }
  ]
};

export default theme;
