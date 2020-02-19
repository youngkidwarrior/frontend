module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100pc': '100%',
    },
    borderRadius: {
      'none': '0',
      'sm': '1rem',
      'default': '2rem',
      'md': '2.5rem',
      'lg': '4rem',
      '3px': '3px',
      '4px': '4px',
      '5px': '5px',
      '6px': '6px',
      '30px': '30px',
      '50px': '50px',
      '50pc': '50%',
    },
    borderWidth: {
      '0': '0',
      'half': '0.5px',
      'default': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    },
    extend: {
      colors: theme => {
        const colors = {
          'almost-black': '#0a0a0a',
          'anothergrey': '#f3f3f3',
          'avail': '#2db400',
          'awp-label': '#fc02a7',
          'black': '#000000',
          'blue': '#7D78D1',
          'faq': '#f6f6f6',
          'green': '#2db400',
          'grey': '#b7b7b7',
          'grey-dark': '#cccccc',
          'grey-darkish': '#333333',
          'grey-light': '#f6f6f6',
          'insuf': '#f40a50',
          'label-blue': '#305cee',
          'label-cyan': '#1ec0ff',
          'label-green': '#2DB400',
          'label-purple': '#9080dc',
          'label-red': '#ff0053',
          'label-teal': '#79f2c3',
          'label-yellow': '#F8E71C',
          'label-yellow-alt': '#ffcd1d',
          'label-gradient': 'linear-gradient(to right, #f10096 0%, #21d7ff 100%)',
          'lightgrey': '#e6e6e6',
          'red': 'red',
          'web3-button': '#737373',
          'white': '#ffffff',
        };

        colors.TLT = colors['label-green'];
        colors.VTI = colors['label-teal'];
        colors.IEI = colors['label-cyan'];
        colors.GLD = colors['label-blue'];
        colors.GSG = colors['label-purple'];
        colors.BTC = colors['label-yellow-alt'];
        colors.ETH = colors['label-yellow-alt'];
        colors.LINK = colors['label-yellow-alt'];
        colors.ZRK = colors['label-yellow-alt'];
        colors.SNX = colors['label-yellow-alt'];
        colors.REN = colors['label-yellow-alt'];
        colors.LRC = colors['label-yellow-alt'];
        colors.KNC = colors['label-yellow-alt'];
        colors.BNT = colors['label-yellow-alt'];
        colors.MLN = colors['label-yellow-alt'];

        return colors;
      },
    },
    fontFamily: {
      'primary': ['Rubik', 'sans-serif'],
      'secondary': ['Roboto', 'monospace'],
    },
    fontSize: {
      'verybig': '10rem',
      'verybig-mobile': '7rem',
      'quiteverybig': '6rem',
      'quiteverybig-mobile': '5rem',
      'ratherbig': '4rem',
      'ratherbig-mobile': '2rem',
      'big': '2.3rem',
      'medium': '1.5rem',
      'medium-mobile': '1.3rem',
      'normal': '1.1rem',
      'onerem': '1rem',
      'prettysmall': '0.9rem',
      'almostverysmall': '0.83rem',
      'verysmall': '0.8rem',
      'table-mobile': '0.6rem',
      'label-mobile': '0.5rem',
      'hero-desktop': '9vw',
      'hero-big-desktop': '8vw',
      'hero-mobile': '16vw',
      'liquidity-amount': '7vw',
      'liquidity-amount-mobile': '20vw',
    },
    fontWeight: {
      'light': '300!important',
      'regular': '300',
      'bold': '500',
      'bolder': '700',
    },
    inset: {
      '0': '0',
      '1/2': '50%',
    },
    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'snug': 1.375,
      'normal': 1.5,
      'relaxed': 1.625,
      'loose': 2,
      '8': '2rem',
      '16': '5rem',
      '24': '6rem',
      '32': '8rem',
    },
    maxWidth: theme => ({
      ...theme('spacing'),
    }),
    minWidth: theme => ({
      ...theme('spacing'),
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
    }),
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      'xxl': '1600px',
    },
    spacing: {
      'auto': 'auto',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '120': '30rem',
      '144': '36rem',
      '240': '60rem',
      'minus-1px': '-1px',
      'px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      '5px': '5px',
      '6px': '6px',
      '10px': '10px',
      '15px': '15px',
      '16px': '16px',
      '20px': '20px',
      '28px': '28px',
      '30px': '30px',
      '34px': '34px',
      '40px': '40px',
      '50px': '50px',
      '70px': '70px',
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      '180px': '180px',
      '210px': '210px',
      '260px': '260px',
      '270px': '270px',
      '300px': '300px',
      '320px': '320px',
      '360px': '360px',
      '400px': '400px',
      '500px': '500px',
      '600px': '600px',
      '700px': '700px',
      '800px': '800px',
      '900px': '900px',
      '1280px': '1280px',
      '2pc': '2%',
      '1pc': '1%',
      '3pc': '3%',
      '4pc': '4%',
      '5pc': '5%',
      '6pc': '6%',
      '10pc': '10%',
      '12pc': '12%',
      '25pc': '25%',
      '27pc': '27%',
      '36pc': '36%',
      '38pc': '38%',
      '40pc': '40%',
      '64pc': '64%',
      '90pc': '90%',
      '80pc': '80%',
      '96pc': '96%',
      '92pc': '92%',
      '94pc': '94%',
      '99pc': '99%',
      '100pc': '100%',
    },
  },
  variants: {},
  plugins: [],
}
