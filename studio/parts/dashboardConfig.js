export default {
  widgets: [
    {
      name: 'notes',
      options: {
        title: 'My notes',
        placeholder: 'Make a note so you remember!',
        backgroundColor: '#242a2f',
        color: '#efeff2',
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'a8596547-7e93-4d8c-8030-8c73123c690a',
            buildHookId:
              'https://api.netlify.com/build_hooks/6168a70f5e435138cf718f98',
            name: 'aristocracysalon',
          },
          {
            title: 'Website',
            apiId: 'a8596547-7e93-4d8c-8030-8c73123c690a',
            buildHookId:
              'https://api.netlify.com/build_hooks/6168a9229edff333049acdcb',
            name: 'aristocracysalon',
          },
        ],
      },
    },
  ],
};
