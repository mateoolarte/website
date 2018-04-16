const DataProjects = [
  {
    id: "1",
    title: "Ecoactua",
    url: "https://ecoactua-rails.herokuapp.com",
    thumbnail:
      "https://res.cloudinary.com/mateoolarte/image/upload/v1522387717/personal_brand/projects/ecoactua/thumbnail-ecoactua.jpg",
    image:
      "https://res.cloudinary.com/mateoolarte/image/upload/v1522388978/personal_brand/projects/ecoactua/hero-ecoactua.jpg",
    year: "2018",
    description:
      "Ecoactua looks for the maintenance and preservation of all of our natural environments. We are trying to solve the main problems related to natural resources that are present in the city.",
    process: [
      {
        text1:
          "In the building process of this application, I based myself principally in the original concept of Ecoactuar that was an old idea, but I wanted to improve and add some useful features to that. Given that information, I proceeded to build some user cases which were divided into two categories: Administrators and Users.",
        image1:
          "https://res.cloudinary.com/mateoolarte/image/upload/v1522390286/personal_brand/projects/ecoactua/process1-ecoactua.jpg"
      },
      {
        text2:
          "Each one of this cases can make different actions in the application, like report creation, administrators evaluation and the execution of the correct process to mark a report as solved,  administrators also can use a dashboard where they are able to manage all reports that users created.",
        image2:
          "https://res.cloudinary.com/mateoolarte/image/upload/v1523847662/personal_brand/projects/ecoactua/process2-ecoactua.jpg"
      }
    ],
    challenges: {
      description:
        "The challenges found in the building process were the creation of a profile for each user and its capability to manage the reports if their state hasn’t changed yet, I  made an effort to create the administrators dashboard and to implement a report manager role for them as well, besides, it was a challenging experience to create a search field for users to filter the reports and get information based on their labels and states.",
      image1:
        "https://res.cloudinary.com/mateoolarte/image/upload/v1523847662/personal_brand/projects/ecoactua/challenge1-ecoactua.jpg",
      image2:
        "https://res.cloudinary.com/mateoolarte/image/upload/v1523847662/personal_brand/projects/ecoactua/challenge2-ecoactua.jpg"
    }
  },
  {
    id: "2",
    title: "Expensify",
    url: "https://expensify-rails.herokuapp.com",
    thumbnail:
      "https://res.cloudinary.com/mateoolarte/image/upload/v1522388007/personal_brand/projects/expensify/thumbnail-expensify.jpg",
    image:
      "https://res.cloudinary.com/mateoolarte/image/upload/v1522388999/personal_brand/projects/expensify/hero-expensify.jpg",
    year: "2018",
    description:
      "Web application for taking control and record of your personal expenses, also show you graphs for different types of expenses and which save the number of outgoings in all month.",
    process: [
      {
        text1:
          "In the building of the project, I use some libraries for the different components of the application such graphs, interface, expenses, show date, and filters. Also, save all of the records in the database for later get them and show the correct way.",
        image1:
          "https://res.cloudinary.com/mateoolarte/image/upload/v1522390259/personal_brand/projects/expensify/process1-expensify.jpg"
      },
      {
        text2:
          "The design of graphs was divided into four tables which were: last six months, current month, per category and total with the last month. Later in the list of expenses, I was some filters for show information per type of expense and category, besides I added the feature of creating a new expense and the drop-down menu for filter per month.",
        image2:
          "https://res.cloudinary.com/mateoolarte/image/upload/v1522390259/personal_brand/projects/expensify/process2-expensify.jpg"
      }
    ],
    challenges: {
      description:
        "In general, the building the application was a challenge because I had never made a project with hard features and manage data. But mainly was two features that I was very hard to make and I was learned a lot. First was the create graphs where I needed not only filter the information else I was managing the data the correct way. The second was the filter by type of expense and at the same time, I needed to filter by category of expense all this without refresh the application. This was an interesting project because that effort me to create things that I never think  I can’t make.",
      image1:
        "https://res.cloudinary.com/mateoolarte/image/upload/v1522390259/personal_brand/projects/expensify/challenge1-expensify.jpg",
      image2:
        "https://res.cloudinary.com/mateoolarte/image/upload/v1522390259/personal_brand/projects/expensify/challenge2-expensify.jpg"
    }
  }
];

export default DataProjects;
