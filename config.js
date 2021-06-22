export const config = {
  component: 'li',
  id: 'cardWrapper',
  className: 'col-span-1 flex shadow-sm rounded-md',
  children: [
    {
      component: 'div',
      id: 'initialWrapper',
      className:
        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
      styles: [
        {
          name: 'backgroundColor',
          value: '#6366F1',
        },
      ],
      children: 'HB',
    },
    {
      component: 'div',
      id: 'infoWrapper',
      className:
        'flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate',
      children: [
        {
          component: 'div',
          id: 'info',
          className: 'flex-1 px-4 py-2 text-sm truncate',
          children: [
            {
              component: 'p',
              id: 'title',
              className: 'text-gray-900 font-medium hover:text-gray-600',
              children: 'GraphQL',
            },
            {
              component: 'p',
              id: 'readTime',
              className: 'text-gray-500',
              children: '10 min read',
            },
          ],
        },
        {
          component: 'div',
          id: 'buttonWrapper',
          className: 'flex-shrink-0 pr-2',
          children: [
            {
              component: 'button',
              id: 'optionButton',
              className:
                'w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              children: [
                {
                  component: 'span',
                  id: 'optionButtonSr',
                  className: 'sr-only',
                  children: 'Open Options',
                },
                {
                  component: 'verticalDots',
                  id: 'verticalDots',
                  className: 'w-5 h-5',
                  ariaHidden: 'true',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
