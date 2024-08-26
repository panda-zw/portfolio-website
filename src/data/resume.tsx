import { Icons } from "@/components/icons";
import {
  FolderKanban,
  HomeIcon,
  Laptop2Icon,
  NotebookIcon,
} from "lucide-react";

export const DATA = {
  name: "Panashe Mapika",
  initials: "PM",
  url: "https://panashe.me",
  description:
    "I'm a software engineer with a passion for building products that solve real-world problems and I like to have fun while doing it.",
  summary:
    "Innovative Software Engineer with 6 years of experience, adept at thriving in dynamic and challenging environments to deliver cutting-edge software solutions. Skilled in designing, building, and developing software across various industries, with a strong focus on efficiency and precision. A collaborative team player dedicated to driving projects to successful completion, ensuring both speed and accuracy in achieving objectives.",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Python",
    "PHP",
    "Javascript",
    "Postgres",
    "MySQL",
    "MongoDB",
    "Convex",
    "Redis",
    "Docker",
    "Laravel",
    "FastAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://shortie.one/ZFVzdp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://shortie.one/9BkgMx",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://shortie.one/Totdcs",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@panashemapika.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Staxo Group",
      href: "https://staxo.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/staxo-logo.webp",
      start: "October 2021",
      end: "Present",
      description:
        "Led the end-to-end development of enterprise web applications, ensuring successful deployment and seamless user experience across platforms. Collaborated with cross-functional teams to implement features like investment management tools and document manipulation, driving innovation and teamwork. Streamlined workflows and automated processes, reducing development time by 20% and boosting team productivity.",
    },
    {
      company: "Digitalkrapht",
      badges: [],
      href: "https://digitalkrapht.com",
      location: "Harare, Zimbabwe",
      title: "Software Engineer",
      logoUrl: "/digitalkrapht-logo.webp",
      start: "January 2020",
      end: "September 2021",
      description:
        "Orchestrated large-scale software deployments from design to feature implementation, ensuring seamless integration. Led prototyping and testing efforts, delivering high-quality code on time. Enhanced system performance by optimizing and refactoring code, resulting in a 25% increase in processing speed.",
    },
    {
      company: "African Century Limited",
      href: "https://www.africancentury.co.zw/",
      badges: [],
      location: "Harare, Zimbabwe",
      title: "Systems Developer",
      logoUrl: "/acl-logo.webp",
      start: "April 2019",
      end: "January 2020",
      description:
        "Coordinated the development and deployment of software updates and bug fixes, achieving timely and successful releases. Implemented automation systems that boosted process efficiency by 70% and reduced manual workload. Collaborated with stakeholders to align development with business goals, ensuring project success and high stakeholder satisfaction.",
    },
    {
      company: "23rd Century Limited",
      href: "https://ttcsglobal.com/",
      badges: [],
      location: "Harare, Zimbabwe",
      title: "Software Developer",
      logoUrl: "/ttcs-logo.webp",
      start: "September 2018",
      end: "March 2019",
      description:
        "Designed and maintained reusable code for distributed cloud environments, ensuring system reliability and scalability. Collaborated with a diverse team to implement effective solutions while integrating new technologies to enhance project outcomes. Optimized code to improve system stability, achieving a 15% increase in uptime by refactoring legacy code and reducing downtime incidents.",
    },
    {
      company: "Ministry of Information Communication Technology",
      href: "https://www.ictministry.gov.zw/",
      badges: [],
      location: "Harare, Zimbabwe",
      title: "Junior Software Developer",
      logoUrl: "/ministry-ict-logo.webp",
      start: "January 2018",
      end: "April 2018",
      description:
        "Contributed to business acquisition by designing customized solutions for proposals, enhancing client engagement. Gained hands-on experience across the software development life cycle, building a solid foundation in development practices. Collaborated with senior developers to troubleshoot technical issues, reducing resolution time by 30% through efficient debugging and continuous learning.",
    },
  ],
  education: [
    {
      school: "University of Zimbabwe",
      href: "https://uz.ac.zw",
      degree: "Bachelor's Degree of Computer Science (BSc)",
      logoUrl: "/uz-logo.webp",
      start: "2014",
      end: "2018",
    },
    {
      school: "Treehouse",
      href: "https://teamtreehouse.com",
      degree: "Python Development",
      logoUrl: "/team-treehouse-logo.webp",
      start: "2017",
      end: "2017",
    },
    {
      school: "Treehouse",
      href: "https://teamtreehouse.com",
      degree: "PHP Development",
      logoUrl: "/team-treehouse-logo.webp",
      start: "2017",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Oono Events",
      href: "https://oono.events",
      dates: "January 2024 - Present",
      active: true,
      description:
        "Developed an event management solution to streamline event organization with features like offline ticketing, addressing payment gateway limitations in regions with infrastructure challenges.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "FastAPI",
        "Python",
        "Redis",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://oono.events",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Oono Cloud",
      href: "https://oono.cloud",
      dates: "May 2024 - Present",
      active: true,
      description:
        "A platform designed for easy file organization and access, featuring real-time updates and secure access from anywhere. Simplifies digital workflows for users across various environments.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://oono.cloud",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Oono Chat",
      href: "https://oono.chat",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "A secure chat application with end-to-end encryption, real-time updates, and support for audio and video calls, enabling efficient and protected communication",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "Zegocloud",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://oono.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Kidsalert",
      href: "https://kidsalert.co.zw",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A platform that empowers communities to monitor and protect children using facial recognition and rapid response to risks involving missing or vulnerable kids, ensuring their safety through collaborative efforts",
      technologies: [
        "React",
        "React Native",
        "Typescript",
        "MySQL",
        "FastAPI",
        "Python",
        "Docker",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://kidsalert.co.zw",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Android",
          href: "https://shortie.one/FDJdnx",
          icon: <Icons.android className="size-3" />,
        },
        {
          type: "iOS",
          href: "#",
          icon: <Icons.apple className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  other_projects: [
    {
      title: "Oono Events",
      dates: "January 2024 - Present",
      location: "",
      description:
        "Developed an event management solution to streamline event organization with features like offline ticketing, addressing payment gateway limitations in regions with infrastructure challenges.",
      image: "/project-logo.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://oono.events",
        },
      ],
    },
    {
      title: "Oono Cloud",
      dates: "May 2024 - Present",
      location: "",
      description:
        "A platform designed for easy file organization and access, featuring real-time updates and secure access from anywhere. Simplifies digital workflows for users across various environments.",
      image: "/project-logo.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://oono.cloud",
        },
      ],
    },
    {
      title: "Oono Chat",
      dates: "July 2024 - July 2024",
      location: "",
      description:
        "A secure chat application with end-to-end encryption, real-time updates, and support for audio and video calls, enabling efficient and protected communication",
      image: "/project-logo.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://oono.chat",
        },
      ],
    },
    {
      title: "URL Shortener",
      dates: "July 2024 - July 2024",
      location: "",
      description:
        "Developed a URL shortener that allows users to create custom short links for easy sharing and tracking of links. This was mostly for personal use and for my own projects. This only took a few hours to build and deploy.",
      image: "/project-logo.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://url.shortie.one",
        },
      ],
    },
    {
      title: "Kidsalert",
      dates: "April 2023 - March 2024",
      location: "",
      description:
        "A platform that empowers communities to monitor and protect children using facial recognition and rapid response to risks involving missing or vulnerable kids, ensuring their safety through collaborative efforts",
      image: "/project-logo.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://kidsalert.co.zw",
        },
        {
          title: "Android",
          icon: <Icons.android className="h-4 w-4" />,
          href: "https://shortie.one/FDJdnx",
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
  ],
} as const;
