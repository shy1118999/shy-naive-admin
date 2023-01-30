/*
 * @Author: shaohang-shy
 * @Date: 2023-01-30 16:20:37
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 16:39:54
 * @Description: guide step
 */
export default [
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom',
    },
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom',
    },
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: 'Set the page into fullscreen',
      position: 'left',
    },
  },
  {
    element: '#darkswitch',
    popover: {
      title: 'Switch Dark/Light',
      description: 'Switch dark or light mode',
      position: 'left',
    },
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: 'The history of the page you visited',
      position: 'bottom',
    },
    padding: 0,
  },
]
