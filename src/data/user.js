const icons = {
	react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	javascript: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
	css: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
	html: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
	mongodb: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb-svgrepo-com.svg",
	graphql: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
	feathers: "https://feathersjs.com/logo.svg",
	sql: "https://upload.wikimedia.org/wikipedia/commons/4/44/SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png",
	sqlite: "https://upload.wikimedia.org/wikipedia/commons/d/db/SQLite_Database_Browser_icon.png",
	python: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
	c: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
}

const INFO = {
	main: {
		title: "Homepage | Derrick Cham",
		name: "Derrick Cham",
		email: "derrickcham2000@gmail.com",
		logo: "../Derrick-Photo.jpg",
	},

	socials: {
		github: "https://github.com/DerrickCham2000",
		linkedin: "https://www.linkedin.com/in/derrick-cham-858653227/",
	},

	homepage: {
		title: "Full-stack developer, Computer Science Graduate and...",
		description:
			"I am a highly motivated and detail-oriented Computer Science graduate seeking a challenging entry-level position in software development. Leveraging my foundation in programming, algorithms, and data structures, I aim to contribute to the development of software while improving my technical skills in a collaborative team environment.",
		zingers: ["Full-Time Foodie", "Fighting Game Lover", "World Traveller", "Solo Game Developer", "AI Enthusiast"]
	},

	about: {
		title: "Hard-working, Motivated, Diligent.",
		description:
		'\"Hello there! I\'m Derrick Cham, a freshly graduated developer with an unwavering passion for crafting exceptional digital experiences.\n As a detail-oriented individual, I believe that the smallest nuances can make a world of difference in the final product.\n\nDuring my academic journey, I honed my skills in computer science and web development, culminating in a one-year co-op experience as a full-stack web developer. This invaluable opportunity not only allowed me to apply my theoretical knowledge but also exposed me to real-world challenges and collaborative projects.\n\nThroughout my co-op, I eagerly delved into the world of front-end and back-end development, where I reveled in the art of turning code into intuitive, user-friendly interfaces. The joy of finding elegant solutions to complex problems and optimizing performance became my driving force.\n\nHaving navigated the intricate landscape of web technologies, I am ready to embark on new ventures and contribute my expertise to creating cutting-edge digital solutions. With a keen eye for detail and a determination to produce top-notch work, I am committed to delivering the best user experiences possible.\n\nJoin me on this exciting journey as I continue to grow, learn, and explore the boundless possibilities of web development!\"',
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "PixelVerse Adventures",
			description:
				"A real-time online multiplayer game where players can log-in to race to collect coins.",
			logo: icons.javascript,
			subtitle: "Made with HTML, JavaScript and CSS and leverages Firebase's real-time database system.",
			linkText: "View Project",
			photo: '../pixelverse.png',
			link: "https://pixelverse-adventures.web.app/",
		},

		{
			title: "TaskMaster",
			description:
				"A web app to-do list, made to empower user productivity. Features a secure and robust login system, along with Google authentication.",
			logo: icons.react,
			subtitle: "Made with React, JavaScript and CSS. Also uses Firebase services to store data and provide authentication.",
			linkText: "View Project",
			photo: '../taskmaster.png',
			link: "https://derrick-cham-to-do-list.web.app/",
		},

		{
			title: "Realm Clickers: Idle Adventures",
			description:
				"A clicker-type game, where players embark on a journey to defeat a dragon! Hire adventurers and click your way to victory!",
			logo: icons.javascript,
			subtitle: "Made with React, JavaScript and CSS. Made to practice state management in React",
			linkText: "View Project",
			photo: "../clicker.png",
			link: "https://derrickcham2000.github.io/Realm-Clickers-Idle-Adventure/",
		},

		{
			title: "YuGiOh Card Quiz",
			description:
				"A web app made to test user's YuGiOh knowledge. The user is quizzed for the card's name based off it's art and card effect.",
			logo: icons.react,
			subtitle: "Made with React, JavaScript and CSS. Axios was used to practice API usage.",
			linkText: "View Project",
			photo: "../yugioh.png",
			link: "https://derrickcham2000.github.io/yugioh-what-card/",
		},

		{
			title: "Personal Portfolio",
			description:
				"A personal website made to showcase my skills and talents!",
			subtitle: "Made with React, JavaScript and CSS. Special care was taken towards styling to provide a visually pleasant experience.",
			logo: icons.react,
			linkText: "View Project",
			photo: "../portfolio.png",
			link: "https://derrickcham2000.github.io/",
		},

		{
			title: "Rouge Lights",
			description:
				"A sidescrolling-2d platformer game, where players can hack and slash their way through 2 hand-crafted levels!",
			subtitle: "Made with C# using the Unity game engine.",
			logo: icons.c,
			linkText: "View Project",
			photo: "../roguelights.png",
			link: "https://drive.google.com/file/d/187afR_ElcB1bvzZpr_99KRbPczuDxeJq/view?usp=sharing",
		},

		{
			title: "Housemusic",
			description:
				"A web-based music sequencer, where users can choose a variety of instruments to make their own funky beats. Features real-time project sharing!",
			subtitle: "Made with HTML, JavaScript, CSS and Node. Uses socket.io for real-time communication between clients.",
			logo: icons.html,
			linkText: "View Project Code",
			photo: "../housemusic.png",
			link: "https://github.com/DerrickCham2000/Housemusic",
		},
	],

	skills: [
		{
			title: "ReactJS",
			description:
				"Experienced in using Front-end frameworks, like ReactJS, to develop gorgeous user facing interfaces.",
			logo: icons.react,
			linkText: "View Project",
		},

		{
			title: "JavaScript",
			description:
				"Experienced in JavaScript to develop efficient features, while maintaining the highest degree of code quality.",
			logo: icons.javascript,
			linkText: "View Project",
		},

		{
			title: "CSS",
			description:
				"Skilled in leveraging CSS to craft visually stunning user interfaces with exceptional attention to detail.",
			logo: icons.css,
			linkText: "View Project",
		},

		{
			title: "HTML",
			description:
				"Proficient in utilizing HTML to build well-structured and semantically meaningful web pages, ensuring optimal accessibility and compatibility across different browsers and devices.",
			logo: icons.html,
			linkText: "View Project",
		},

		{
			title: "MongoDB",
			description:
				"Experienced in leveraging MongoDB, a powerful NoSQL database, to efficiently store, retrieve, and manage data for web applications.",
			logo: icons.mongodb,
			linkText: "View Project",
		},
		{
			title: "GraphQL",
			description:
				"Skilled in utilizing GraphQL, a powerful query language for APIs, to efficiently retrieve and manipulate data in web applications.",
			logo: icons.graphql,
			linkText: "View Project",
		},
		{
			title: "FeathersJS",
			description:
				"Experienced in utilizing FeathersJS, a modern JavaScript framework for building scalable and real-time applications, to develop robust and efficient web services.",
			logo: icons.feathers,
			linkText: "View Project",
		},
		{
			title: "SQL",
			description:
				"Proficient in utilizing SQL (Structured Query Language) to manage relational databases and perform efficient data manipulation and retrieval.",
			logo: icons.sql,
			linkText: "View Project",
		},
		{
			title: "SQlite",
			description:
				"Experienced in working with SQLite, a lightweight and embedded relational database management system.",
			logo: icons.sqlite,
			linkText: "View Project",
		},
		{
			title: "Python",
			description:
				"Proficient in Python, a versatile and powerful programming language, for developing a wide range of applications.",
			logo: icons.python,
			linkText: "View Project",
		},
		{
			title: "C/C#/C++",
			description:
				"Proficient in C/C++/C#, versatile programming languages known for their performance, efficiency, and low-level control.",
			logo: icons.c,
			linkText: "View Project",
		},
	],
};

export default INFO;
