const cards = [
    {
      id: 'card-1',
      content: 'Learning ReactJs and Redux',
    },
    {
      id: 'card-2',
      content: 'Complete the caseStudy',
    },
    {
      id: 'card-3',
      content: 'Get the job!!',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards,
      },
      
    },
    listIds: ['list-1'],
  };
  
  export default data;