$('#luckmoshy').luckmoshyPagination({
totalPages: 3,
// the current page that show on start
startPage: 1,

// maximum visible pages
visiblePages: 2,

initiateStartPageClick: true,

// template for pagination links
href: false,

// variable name in href template for page number
hrefVariable: '{{number}}',

// Text labels


// carousel-style pagination
loop: true,

// callback function
onPageClick: function (event, page) {
   $('.page-active').removeClass('page-active');
   $('#container-pagnation'+page).addClass('page-active');
},

// pagination Classes
paginationClass: 'pagination',
nextClass: 'next',
prevClass: 'page-item',
pageClass: 'page-item',
activeClass: 'active',
disabledClass: 'disabled'

});