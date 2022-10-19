export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '634ff1a494043d00b52f444c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4v9hxvq6',
                  apiId: 'afc94080-0310-4f90-84e4-0b26dea0daf9'
                },
                {
                  buildHookId: '634ff1a43718620082e9f9f5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-homn8zic',
                  apiId: '1b30dcd5-c10b-46d2-80ba-e3e331d8b6e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/viarms/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-homn8zic.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
