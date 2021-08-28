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
            apiId: 'f5d17d45-d898-42eb-b8ca-97c37147948a',
            buildHookId:
              'https://api.netlify.com/build_hooks/60b1a295f776af78ee4454ed',
            name: 'allstarconnections',
          },
          {
            title: 'Website',
            apiId: 'f5d17d45-d898-42eb-b8ca-97c37147948a',
            buildHookId:
              'https://api.netlify.com/build_hooks/60b1a29da84d5e7f4927d296',
            name: 'allstarconnections',
          },
        ],
      },
    },
  ],
};
