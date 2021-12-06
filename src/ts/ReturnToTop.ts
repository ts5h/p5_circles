import isMobile from 'ismobilejs';

// Return to top (TYpeScript version)
// Add button into body
const button = document.createElement('div');
button.classList.add('return-to-top');

const anchor = document.createElement('a');
anchor.textContent = 'Back';
anchor.setAttribute('href', '/');
button.appendChild(anchor);

const body = document.querySelector('body');
body.prepend(button);

// On mouse
if (isMobile().any) {
  button.addEventListener('touchstart', function () {
    this.classList.add('on');
  });
  button.addEventListener('touchend', function () {
    this.classList.remove('on');
  });
} else {
  button.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  button.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}

// Change theme
type themeType = {
  type: 'dark' | 'light';
};

export const setTheme = (theme: themeType) => {
  // Dark or Light
  if (theme.type === 'light') {
    button.classList.add('light');
  }
};




// $(document).ready(function () {
//   var buttonHtml = '' +
//     '<div class="return-to-top">' +
//     '<a href="/">Back</a>' +
//     '</div>';
//
//   $('body').prepend($(buttonHtml));
//   var button = $('.return-to-top');
//
//   if (pc) {
//     $(button)
//       .on('mouseover', function () {
//         $(this).addClass('on');
//       })
//       .on('mouseout', function () {
//         $(this).removeClass('on');
//       });
//   } else {
//     $(button)
//       .on('touchstart', function () {
//         $(this).addClass('on');
//       })
//       .on('touchend', function () {
//         $(this).removeClass('on');
//       });
//   }
//
//
//   // Change link theme
//   // Get script params
//   function GetScriptParam() {
//     var fileName = 'return-to-top.js';
//     var scripts = $('script');
//     var path = '';
//
//     $(scripts).each(function () {
//       var src = $(this).attr('src');
//       if (typeof src === 'string' &&
//         src.indexOf(fileName) > -1) {
//         path = src;
//         return true;
//       }
//     });
//
//     var query = '';
//     var parameters = '';
//     if (path.indexOf('?') > -1) {
//       query = path.substring(path.indexOf('?') + 1);
//       parameters = query.split('&');
//       for (var i = 0; i < parameters.length; i++) {
//         var el = parameters[i].split('=');
//
//         if (el[0] === 'type') {
//           return el[1];
//         }
//       }
//     }
//     return 'light';
//   }
//
//   var type = GetScriptParam();
//   if (type === 'dark') {
//     $(button).addClass('dark');
//   }
// });