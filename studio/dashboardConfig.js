export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f9d6c56b267d7aea98d0b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-3-studio-1sonsnqa',
                  apiId: '2de44ffe-47b7-47c5-bd92-a7bfc5ae63b9'
                },
                {
                  buildHookId: '62f9d6c50d26997786423e37',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-3-web-v7eovx5c',
                  apiId: '0f623a3e-dc3b-48eb-bd22-f479d8fb833a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckvgemmy/sanity-kitchen-sink-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-3-web-v7eovx5c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
