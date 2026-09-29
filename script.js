// ==========================================================================
// Web Application Development — Internal Practice Portal
// ==========================================================================

// --- MCQS DATASET (30 Syllabus Questions with Category & Detailed Explanation) ---
const mcqs = [
  {
    q: "Which language is used to structure the content of a webpage?",
    options: ["CSS", "HTML", "Python", "SQL"],
    ans: 1,
    cat: "HTML",
    exp: "HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. CSS is used for presentation/styling, Python is a general-purpose programming language, and SQL is used for database queries."
  },
  {
    q: "Which tag creates the largest HTML heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    ans: 2,
    cat: "HTML",
    exp: "<h1> defines the most important and largest heading in standard HTML hierarchy (ranging from <h1> down to <h6>). <head> contains metadata, and <heading> is not a standard HTML element."
  },
  {
    q: "Which attribute specifies the destination of a hyperlink in an <a> tag?",
    options: ["src", "href", "link", "url"],
    ans: 1,
    cat: "HTML",
    exp: "The 'href' (Hypertext REFerence) attribute specifies the URL of the page or resource the link goes to. 'src' is used for embedding media like images and scripts."
  },
  {
    q: "Which of the following is a void (self-closing / empty) element?",
    options: ["<p>", "<div>", "<br>", "<section>"],
    ans: 2,
    cat: "HTML",
    exp: "<br> is a void element in HTML. Void elements cannot have child nodes and have no closing tag (e.g. <img>, <br>, <hr>, <input>, <meta>, <link>)."
  },
  {
    q: "Which HTML list element creates numbered items?",
    options: ["<ul>", "<ol>", "<dl>", "<li>"],
    ans: 1,
    cat: "HTML",
    exp: "<ol> defines an Ordered List where items are automatically numbered (1, 2, 3...). <ul> creates an unordered bulleted list, and <dl> creates a description list."
  },
  {
    q: "Which HTML element is semantic?",
    options: ["<div>", "<span>", "<section>", "<b>"],
    ans: 2,
    cat: "HTML",
    exp: "<section> is a semantic element introduced in HTML5 that conveys its meaning to browsers and screen readers. <div> and <span> are non-semantic containers."
  },
  {
    q: "Which tag represents the main content of an HTML document, unique to the page?",
    options: ["<main>", "<bodycontent>", "<content>", "<primary>"],
    ans: 0,
    cat: "HTML",
    exp: "<main> designates the central, unique content of the <body>. It should exclude content repeated across pages like sidebars, navigation links, and footers."
  },
  {
    q: "Which element is commonly used to enclose major navigation links?",
    options: ["<nav>", "<navigate>", "<links>", "<menu-bar>"],
    ans: 0,
    cat: "HTML",
    exp: "<nav> is the semantic HTML5 element specifically intended for major navigation blocks containing links to other pages or parts within the page."
  },
  {
    q: "Which technology controls the presentation, colors, and layout of an HTML document?",
    options: ["HTML", "CSS", "JSON", "SQL"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "CSS (Cascading Style Sheets) is the stylesheet language designed to describe the presentation and styling of a document written in HTML."
  },
  {
    q: "Which CSS type is written directly inside an HTML element using the 'style' attribute?",
    options: ["External", "Internal", "Inline", "Embedded file"],
    ans: 2,
    cat: "CSS Selectors",
    exp: "Inline CSS is applied directly to an individual HTML element using the style attribute (e.g. <p style='color: red;'>). It has high specificity."
  },
  {
    q: "Which CSS selector targets an element with id='box'?",
    options: [".box", "#box", "box", "*box"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "The '#' hash symbol is the ID selector in CSS (e.g. #box). The dot '.' is for class selectors, and bare words target HTML elements."
  },
  {
    q: "Which selector targets all elements that have the class 'card'?",
    options: ["#card", ".card", "card", "@card"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "The '.' period symbol denotes a class selector in CSS. Therefore, .card matches any element with class='card'."
  },
  {
    q: "What character does the universal selector use in CSS?",
    options: ["#", "*", ".", "@"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "The asterisk '*' is the universal selector in CSS. It matches every single element on the page."
  },
  {
    q: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    ans: 2,
    cat: "CSS Selectors",
    exp: "In CSS, the property to set the foreground/text color is simply 'color'. 'font-color' does not exist in standard CSS."
  },
  {
    q: "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "bg", "color-background", "fill"],
    ans: 0,
    cat: "CSS Selectors",
    exp: "'background-color' sets the background color. 'background' is also a shorthand property that accepts colors, images, and repeats."
  },
  {
    q: "Which selector has higher specificity according to standard CSS cascading rules?",
    options: ["element selector (e.g. p)", "class selector (e.g. .card)", "ID selector (e.g. #header)", "universal selector (*)"],
    ans: 2,
    cat: "CSS Selectors",
    exp: "Specificity ranking order: Inline styles (1,0,0,0) > ID selectors (0,1,0,0) > Class / attribute / pseudo-class (0,0,1,0) > Element / pseudo-element (0,0,0,1) > Universal (0,0,0,0)."
  },
  {
    q: "Which style normally has the highest priority unless overridden by !important?",
    options: ["element selector", "class selector", "ID selector", "inline style"],
    ans: 3,
    cat: "CSS Selectors",
    exp: "Inline styles (written in the HTML style attribute) have a specificity weight of 1,0,0,0, overriding external or internal CSS rules unless !important is used."
  },
  {
    q: "What is CSS inheritance in the cascade?",
    options: ["Copying HTML files", "Child elements receiving property values from ancestor elements", "Adding margins", "Loading an external stylesheet"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "Inheritance is the mechanism by which certain CSS properties (such as color, font-family, line-height) pass down from parent/ancestor elements to their descendants."
  },
  {
    q: "What does the CSS cascade determine when multiple conflicting rules apply to an element?",
    options: ["Which HTML file loads", "Which CSS declaration wins and applies", "Image compression size", "Server network speed"],
    ans: 1,
    cat: "CSS Selectors",
    exp: "The Cascade resolves conflicts by evaluating Origin & Importance (!important), Specificity (Inline > ID > Class > Element), and Source Order (last declared wins)."
  },
  {
    q: "What are the four layers of the CSS Box Model from inside out?",
    options: ["Text, image, link, list", "Content, padding, border, margin", "Header, main, footer, nav", "Width, height, color, font"],
    ans: 1,
    cat: "Box Model",
    exp: "The standard CSS box model consists of: Content (where text/images appear) → Padding (clear space inside border) → Border → Margin (clear space outside border)."
  },
  {
    q: "Which property adds clear space INSIDE the border around the content?",
    options: ["margin", "padding", "spacing", "outline"],
    ans: 1,
    cat: "Box Model",
    exp: "Padding clears an area around the content inside the border. Margin clears an area outside of the border."
  },
  {
    q: "Which property adds transparent space OUTSIDE the border of an element?",
    options: ["margin", "padding", "inside", "outline"],
    ans: 0,
    cat: "Box Model",
    exp: "Margin is the outermost layer of the box model, creating space between the element's border and neighboring elements."
  },
  {
    q: "Which value of box-sizing causes the declared width and height to include padding and border?",
    options: ["content-box", "border-box", "padding-box", "full-box"],
    ans: 1,
    cat: "Box Model",
    exp: "With 'box-sizing: border-box', the element's specified width and height include the content, padding, and border, making responsive layouts much easier to manage."
  },
  {
    q: "What is the default initial value of the box-sizing property in standard CSS?",
    options: ["border-box", "content-box", "padding-box", "auto"],
    ans: 1,
    cat: "Box Model",
    exp: "'content-box' is the browser default. In content-box, width applies only to content; padding and border add extra width onto the declared value."
  },
  {
    q: "Which property controls how content is handled when it overflows its container's box?",
    options: ["display", "overflow", "float", "position"],
    ans: 1,
    cat: "Box Model",
    exp: "The 'overflow' property (with variants overflow-x, overflow-y) controls whether to clip content or add scrollbars when content exceeds element boundaries."
  },
  {
    q: "Which overflow value shows scrollbars ONLY when content actually exceeds the container?",
    options: ["hidden", "visible", "auto", "scroll"],
    ans: 2,
    cat: "Box Model",
    exp: "'overflow: auto' adds scrollbars only if the content overflows. 'overflow: scroll' always displays scrollbars regardless of whether content overflows."
  },
  {
    q: "Which property sets the minimum allowed width of an element?",
    options: ["min-width", "minimum-width", "width-min", "min-size"],
    ans: 0,
    cat: "Box Model",
    exp: "'min-width' defines the minimum width of an element. It prevents the used value of the width property from becoming smaller than the specified value."
  },
  {
    q: "Which property sets the maximum allowed height of an element?",
    options: ["height-max", "max-height", "maximum-height", "limit-height"],
    ans: 1,
    cat: "Box Model",
    exp: "'max-height' defines the maximum height of an element. It prevents the height from exceeding the specified threshold."
  },
  {
    q: "What is Generative AI primarily useful for during web application development?",
    options: ["Only changing computer hardware", "Generating starter code, explaining concepts, and debugging", "Replacing HTML entirely with SQL", "Only physical networking"],
    ans: 1,
    cat: "GenAI",
    exp: "Generative AI excels at generating boilerplate code, explaining complex algorithms or CSS behaviors, providing refactoring ideas, and diagnosing bug stack traces."
  },
  {
    q: "What is the recommended best practice when using GenAI-generated code in a web project?",
    options: ["Trust and deploy blindly", "Carefully inspect, test, and understand the code before integrating", "Never run the code", "Delete your version control history"],
    ans: 1,
    cat: "GenAI",
    exp: "GenAI models can hallucinate deprecated APIs, introduce security vulnerabilities, or provide sub-optimal CSS. Developers must inspect, understand, test, and verify all output."
  }
];

// --- CODING CHALLENGES DATASET (6 Challenges with Starter, Solution & Validators) ---
const challenges = [
  {
    id: 0,
    title: "Nature Gallery",
    level: "Easy",
    image: "assets/challenge1.svg",
    brief: "Build a clean nature gallery with a main title and three image cards arranged in a row with rounded corners and neat spacing.",
    req: [
      "Use an h1 heading for 'Nature Gallery'",
      "Create 3 image elements (referencing mini1, mini2, mini3)",
      "Use a flex or grid layout to display cards in a row",
      "Add rounded corners to the images (border-radius)",
      "Add spacing/gap between the cards"
    ],
    starterHtml: `<div class="gallery">
  <!-- 1. Add your h1 heading -->
  
  <!-- 2. Add container with 3 images -->
  <div class="cards">
    <img src="assets/mini1.svg" alt="Mountain">
    <img src="assets/mini2.svg" alt="Forest">
    <img src="assets/mini3.svg" alt="Lake">
  </div>
</div>`,
    starterCss: `body {
  font-family: Arial, sans-serif;
  background: #f6f7fb;
  padding: 30px;
}

.gallery {
  max-width: 850px;
  margin: auto;
}

/* Style cards container using flex or grid */
.cards {
  display: flex;
}

/* Style images with width and border-radius */
.cards img {
  width: 31%;
}`,
    solutionHtml: `<div class="gallery">
  <h1>Nature Gallery</h1>
  <div class="cards">
    <img src="assets/mini1.svg" alt="Mountain">
    <img src="assets/mini2.svg" alt="Forest">
    <img src="assets/mini3.svg" alt="Lake">
  </div>
</div>`,
    solutionCss: `body {
  font-family: Arial, sans-serif;
  background: #f6f7fb;
  padding: 30px;
}
.gallery {
  max-width: 850px;
  margin: auto;
  text-align: center;
}
.gallery h1 {
  font-size: 32px;
  color: #172033;
  margin-bottom: 24px;
}
.cards {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.cards img {
  width: 31%;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        /<h1[\s>]/.test(h) && (h.includes("nature") || h.includes("gallery")),
        (h.match(/<img[\s>]/g) || []).length >= 3,
        /display\s*:\s*(flex|grid)/.test(c),
        /border-radius\s*:\s*([^;]+)/.test(c),
        /(gap\s*:|margin\s*:|justify-content)/.test(c)
      ];
    }
  },

  {
    id: 1,
    title: "Student Profile",
    level: "Easy",
    image: "assets/challenge2.svg",
    brief: "Recreate a centered student profile card with an avatar photo, student name, department/course, short bio, and a styled action button.",
    req: [
      "Create a centered card container with a white background",
      "Include circular avatar image (assets/avatar.svg)",
      "Include a heading with the student name",
      "Include course designation and bio description",
      "Add a styled call-to-action button ('View Profile')"
    ],
    starterHtml: `<div class="profile-card">
  <!-- Add student avatar image -->
  <img src="assets/avatar.svg" alt="Alex Thomas" class="avatar">
  
  <!-- Add student name, course, and bio text -->
  
  <!-- Add View Profile button -->
</div>`,
    starterCss: `body {
  font-family: Arial, sans-serif;
  background: #f3f4f8;
  padding: 40px;
}

.profile-card {
  width: 340px;
  margin: 0 auto;
  background: #ffffff;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
}`,
    solutionHtml: `<div class="profile-card">
  <img class="avatar" src="assets/avatar.svg" alt="Alex Thomas">
  <h2>Alex Thomas</h2>
  <p class="course">B.Tech Computer Science (AI)</p>
  <p class="bio">Learning web development and building useful AI projects.</p>
  <button class="profile-btn">View Profile</button>
</div>`,
    solutionCss: `body {
  font-family: Arial, sans-serif;
  background: #f3f4f8;
  padding: 40px;
}
.profile-card {
  width: 340px;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
  padding: 32px 24px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 12px;
}
.profile-card h2 {
  font-size: 24px;
  margin: 8px 0 4px;
}
.course {
  color: #6d4aff;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
}
.bio {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 20px;
}
.profile-btn {
  background: #6d4aff;
  color: #ffffff;
  border: 0;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        (/class=["'][^"']*(profile|card)[^"']*["']/.test(h) || /<article/i.test(h)) && (/background\s*:\s*(#fff|white)/.test(c) || /margin\s*:\s*([^;]*auto)/.test(c)),
        /<img[\s>]/.test(h) && (c.includes("border-radius") || c.includes("50%")),
        /<h[1-3][\s>]/.test(h) && (h.includes("alex") || h.includes("thomas") || h.includes("name")),
        (h.match(/<p[\s>]/g) || []).length >= 2 || (h.includes("course") || h.includes("bio") || h.includes("b.tech")),
        /<button[\s>]/.test(h) && (/button|\.profile-btn/.test(c) || /padding/.test(c))
      ];
    }
  },

  {
    id: 2,
    title: "Food Card",
    level: "Medium",
    image: "assets/challenge3.svg",
    brief: "Build a modern restaurant product card with an image header, 'POPULAR' badge, food item title, description, price, and an 'Order Now' button.",
    req: [
      "Use an article or card container with rounded corners and hidden overflow",
      "Display full-width food photo (assets/food.svg)",
      "Include a tag/badge and dish title with description",
      "Display food price (₹249) prominently",
      "Add a styled action button ('Order Now')"
    ],
    starterHtml: `<article class="food-card">
  <!-- Food image -->
  <img src="assets/food.svg" alt="Garden Pasta">
  
  <div class="card-body">
    <!-- Badge tag & dish title -->
    
    <!-- Price and Order button row -->
    
  </div>
</article>`,
    starterCss: `body {
  font-family: Arial, sans-serif;
  background: #f7f2eb;
  padding: 40px;
}

.food-card {
  width: 340px;
  margin: auto;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
}`,
    solutionHtml: `<article class="food-card">
  <img src="assets/food.svg" alt="Garden Pasta" class="food-img">
  <div class="card-body">
    <span class="tag">POPULAR</span>
    <h2>Garden Pasta</h2>
    <p class="desc">Fresh vegetables, herbs, and creamy Italian sauce.</p>
    <div class="card-footer">
      <strong class="price">₹249</strong>
      <button class="order-btn">Order Now</button>
    </div>
  </div>
</article>`,
    solutionCss: `body {
  font-family: Arial, sans-serif;
  background: #f7f2eb;
  padding: 40px;
}
.food-card {
  width: 340px;
  margin: auto;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}
.food-img {
  width: 100%;
  display: block;
}
.card-body {
  padding: 22px;
}
.tag {
  font-size: 11px;
  font-weight: 800;
  color: #b45309;
  letter-spacing: 0.08em;
}
.card-body h2 {
  font-size: 22px;
  margin: 6px 0 8px;
}
.desc {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 18px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 22px;
  color: #111827;
}
.order-btn {
  background: #111827;
  color: #ffffff;
  border: 0;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        (/<article/i.test(h) || /class=["'][^"']*(food|card)[^"']*["']/.test(h)) && (/border-radius/.test(c) || /overflow\s*:\s*hidden/.test(c)),
        /<img[\s>]/.test(h) && (c.includes("width: 100%") || c.includes("width:100%")),
        /<h[1-3][\s>]/.test(h) && /<p[\s>]/.test(h),
        /₹|249|price/.test(h),
        /<button[\s>]/.test(h) && (/button|\.order-btn/.test(c) || /background/.test(c))
      ];
    }
  },

  {
    id: 3,
    title: "Travel Landing",
    level: "Medium",
    image: "assets/challenge4.svg",
    brief: "Build a travel hero banner with a dark overlay/background visual, destination eyebrow, large hero headline, supporting paragraph, and call-to-action button.",
    req: [
      "Create a hero section or container",
      "Display a large hero headline (font-size >= 40px)",
      "Add destination eyebrow and supporting paragraph",
      "Add a primary Call to Action (CTA) button ('Explore Trips')",
      "Apply background visual or gradient overlay"
    ],
    starterHtml: `<section class="travel-hero">
  <div class="hero-content">
    <!-- Eyebrow text -->
    <span class="eyebrow">EXPLORE INDIA</span>
    
    <!-- Large heading -->
    <h1>Find your next escape.</h1>
    
    <!-- Paragraph & button -->
  </div>
</section>`,
    starterCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.travel-hero {
  min-height: 480px;
  display: flex;
  align-items: center;
  padding: 50px;
  /* Add background gradient or image */
  background: #18202b;
  color: #ffffff;
}`,
    solutionHtml: `<section class="travel-hero">
  <div class="hero-content">
    <span class="eyebrow">EXPLORE INDIA</span>
    <h1>Find your next escape.</h1>
    <p>Discover misty mountains, tropical beaches, and unforgettable local experiences across India.</p>
    <button class="cta-btn">Explore Trips</button>
  </div>
</section>`,
    solutionCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.travel-hero {
  min-height: 480px;
  display: flex;
  align-items: center;
  padding: 60px;
  background: linear-gradient(90deg, #18202b 0%, rgba(24,32,43,0.7) 100%), url('assets/travel.svg') center/cover;
  color: #ffffff;
}
.hero-content {
  max-width: 600px;
}
.eyebrow {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #38bdf8;
  display: block;
  margin-bottom: 8px;
}
.travel-hero h1 {
  font-size: 52px;
  line-height: 1.1;
  margin: 10px 0 16px;
}
.travel-hero p {
  font-size: 16px;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 24px;
}
.cta-btn {
  background: #38bdf8;
  color: #0f172a;
  border: 0;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        /<(section|header|div)[^>]+class=["'][^"']*(hero|travel)[^"']*["']/.test(h),
        /<h1[\s>]/.test(h) && (/font-size\s*:\s*([4-9]\d|\d{3})px/.test(c) || /font-size\s*:\s*[3-9]rem/.test(c) || /font-size/.test(c)),
        /<p[\s>]/.test(h) && (h.includes("explore") || h.includes("escape") || h.includes("find")),
        /<button[\s>]/.test(h),
        /background(-image)?\s*:[^;]*(url|gradient|#18202b)/.test(c)
      ];
    }
  },

  {
    id: 4,
    title: "Pricing Cards",
    level: "Hard",
    image: "assets/challenge5.svg",
    brief: "Create a 3-tier pricing comparison section (Starter, Pro, Team) with tier titles, formatted prices, bulleted feature lists, and an elevated featured middle card.",
    req: [
      "Create 3 distinct pricing cards in a row",
      "Include headings for plan names (Starter, Pro, Team)",
      "Display prices in each tier (₹0, ₹499, ₹999)",
      "Include feature lists using <ul> and <li> in each card",
      "Use flexbox or grid layout and visually elevate the middle 'Pro' card"
    ],
    starterHtml: `<div class="pricing-container">
  <div class="plan">
    <h2>Starter</h2>
    <h1>₹0</h1>
    <!-- Feature list -->
    <button>Choose Plan</button>
  </div>
  
  <div class="plan featured">
    <h2>Pro</h2>
    <h1>₹499</h1>
    <!-- Feature list -->
    <button>Choose Plan</button>
  </div>
  
  <div class="plan">
    <h2>Team</h2>
    <h1>₹999</h1>
    <!-- Feature list -->
    <button>Choose Plan</button>
  </div>
</div>`,
    starterCss: `body {
  font-family: Arial, sans-serif;
  background: #f4f5f9;
  padding: 40px;
}

.pricing-container {
  max-width: 950px;
  margin: auto;
  display: flex;
  gap: 20px;
}

.plan {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  flex: 1;
}`,
    solutionHtml: `<div class="pricing-container">
  <div class="plan">
    <h2>Starter</h2>
    <div class="price">₹0</div>
    <ul>
      <li>5 Projects</li>
      <li>Basic Support</li>
      <li>Community Access</li>
    </ul>
    <button class="plan-btn">Choose Starter</button>
  </div>

  <div class="plan featured">
    <span class="badge">MOST POPULAR</span>
    <h2>Pro</h2>
    <div class="price">₹499</div>
    <ul>
      <li>Unlimited Projects</li>
      <li>Priority 24/7 Support</li>
      <li>Advanced GenAI Tools</li>
    </ul>
    <button class="plan-btn featured-btn">Choose Pro</button>
  </div>

  <div class="plan">
    <h2>Team</h2>
    <div class="price">₹999</div>
    <ul>
      <li>Team Workspaces</li>
      <li>Admin Controls & Roles</li>
      <li>Custom Integrations</li>
    </ul>
    <button class="plan-btn">Choose Team</button>
  </div>
</div>`,
    solutionCss: `body {
  font-family: Arial, sans-serif;
  background: #f4f5f9;
  padding: 40px;
}
.pricing-container {
  max-width: 960px;
  margin: auto;
  display: flex;
  gap: 20px;
  align-items: center;
}
.plan {
  background: #ffffff;
  padding: 30px;
  border-radius: 18px;
  flex: 1;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
}
.featured {
  border: 2px solid #6366f1;
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(99,102,241,0.15);
  position: relative;
}
.badge {
  font-size: 11px;
  font-weight: 800;
  color: #6366f1;
  display: block;
  margin-bottom: 6px;
}
.plan h2 {
  font-size: 20px;
  margin: 0 0 10px;
}
.price {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
}
.plan ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}
.plan li {
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  color: #475569;
  font-size: 14px;
}
.plan-btn {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
.featured-btn {
  background: #6366f1;
  color: #ffffff;
  border-color: #6366f1;
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        (h.match(/class=["'][^"']*(plan|tier|card)[^"']*["']/g) || []).length >= 3,
        (h.match(/<h[1-4][\s>]/g) || []).length >= 3,
        (h.match(/₹|\$|0|499|999|free/g) || []).length >= 3,
        /<ul[\s>]/.test(h) && (h.match(/<li[\s>]/g) || []).length >= 3,
        /display\s*:\s*(flex|grid)/.test(c) && (c.includes("featured") || c.includes("transform") || c.includes("border"))
      ];
    }
  },

  {
    id: 5,
    title: "Dashboard",
    level: "Hard",
    image: "assets/challenge6.svg",
    brief: "Build a responsive dashboard layout with a dark vertical sidebar navigation, main content header, and a grid of 3 key statistic cards.",
    req: [
      "Create a dark sidebar element (<aside>)",
      "Create a main content area (<main> or container)",
      "Add a welcome header/title in the main section",
      "Display 3 statistic cards with metric labels and numbers",
      "Use CSS Grid or Flexbox for layout positioning"
    ],
    starterHtml: `<div class="dashboard-layout">
  <!-- 1. Dark sidebar -->
  <aside class="sidebar">
    <h2>StudyHub</h2>
    <nav>
      <a href="#">Dashboard</a>
      <a href="#">Practice</a>
      <a href="#">Progress</a>
    </nav>
  </aside>

  <!-- 2. Main content -->
  <main class="main-content">
    <h1>Good morning!</h1>
    <div class="stats-grid">
      <!-- 3 stats cards -->
    </div>
  </main>
</div>`,
    starterCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 500px;
}

.sidebar {
  background: #17152b;
  color: #ffffff;
  padding: 24px;
}

.main-content {
  padding: 36px;
}`,
    solutionHtml: `<div class="dashboard-layout">
  <aside class="sidebar">
    <h2 class="brand">StudyHub</h2>
    <nav class="nav-menu">
      <a href="#" class="active">📊 Dashboard</a>
      <a href="#">💻 Practice</a>
      <a href="#">📈 Progress</a>
      <a href="#">⚙️ Settings</a>
    </nav>
  </aside>

  <main class="main-content">
    <div class="main-head">
      <h1>Good morning, Alex!</h1>
      <p>Here is your internal exam practice overview.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-title">MCQ SCORE</span>
        <strong class="stat-value">86%</strong>
        <small class="stat-sub">26/30 completed</small>
      </div>

      <div class="stat-card">
        <span class="stat-title">CODING CHALLENGES</span>
        <strong class="stat-value">12</strong>
        <small class="stat-sub">All requirements met</small>
      </div>

      <div class="stat-card">
        <span class="stat-title">CURRENT STREAK</span>
        <strong class="stat-value">7 Days</strong>
        <small class="stat-sub">Keep the momentum going</small>
      </div>
    </div>
  </main>
</div>`,
    solutionCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}
.dashboard-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 520px;
}
.sidebar {
  background: #0f172a;
  color: #ffffff;
  padding: 28px 20px;
}
.brand {
  font-size: 20px;
  color: #ffffff;
  margin: 0 0 28px;
}
.nav-menu a {
  display: block;
  color: #94a3b8;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 6px;
  font-size: 14px;
}
.nav-menu a.active, .nav-menu a:hover {
  background: #1e293b;
  color: #ffffff;
}
.main-content {
  padding: 36px 40px;
}
.main-head h1 {
  font-size: 26px;
  margin: 0 0 4px;
  color: #0f172a;
}
.main-head p {
  color: #64748b;
  margin: 0 0 24px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.stat-card {
  background: #ffffff;
  padding: 22px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.stat-title {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #64748b;
  letter-spacing: 0.08em;
}
.stat-value {
  display: block;
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  margin: 6px 0;
}
.stat-sub {
  color: #10b981;
  font-size: 12px;
  font-weight: 600;
}`,
    validate: (html, css) => {
      const h = html.toLowerCase();
      const c = css.toLowerCase();
      return [
        /<aside[\s>]/.test(h) || /class=["'][^"']*sidebar[^"']*["']/.test(h),
        /<main[\s>]/.test(h) || /class=["'][^"']*main[^"']*["']/.test(h),
        /<h[1-3][\s>]/.test(h) && (h.includes("good") || h.includes("morning") || h.includes("dashboard")),
        (h.match(/class=["'][^"']*stat[^"']*["']/g) || []).length >= 3,
        /display\s*:\s*(grid|flex)/.test(c)
      ];
    }
  }
];

// --- DESCRIPTIVE QUESTIONS & COMPREHENSIVE MODEL ANSWERS (15 Questions) ---
const desc = [
  {
    q: "Explain the basic structure of an HTML5 document with a suitable example.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "<!DOCTYPE html> document type declaration",
      "<html> root container element with lang attribute",
      "<head> section for metadata, title, character encoding (<meta charset='UTF-8'>)",
      "<body> section containing all visible content rendered to the user",
      "Proper indentation and nesting of elements"
    ],
    answer: `<p>An HTML5 document is built upon a standardized tree structure consisting of a document type declaration and two core sections: <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>.</p>
<h4>Standard Structure:</h4>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
      &lt;h1&gt;Welcome to Web Application Development&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;p&gt;This is the primary content area.&lt;/p&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;p&gt;&copy; 2026 University Exam Prep&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4>Key Components:</h4>
<ol>
  <li><strong>&lt;!DOCTYPE html&gt;:</strong> Informs the browser that this document complies with modern HTML5 standards.</li>
  <li><strong>&lt;html&gt;:</strong> The root element enclosing all content. The <code>lang="en"</code> attribute helps search engines and screen readers.</li>
  <li><strong>&lt;head&gt;:</strong> Contains machine-readable metadata, title, viewport settings, and links to external stylesheets/fonts.</li>
  <li><strong>&lt;body&gt;:</strong> Contains the viewable structure including headings, paragraphs, images, links, forms, and scripts.</li>
</ol>`
  },

  {
    q: "Explain ordered, unordered, and description lists in HTML with syntax and examples.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "<ol> for ordered lists with numerical or alphabetical markers",
      "<ul> for unordered lists with bullet points",
      "<dl>, <dt>, <dd> for description/definition lists",
      "Attributes: type, start, reversed for <ol>",
      "Practical use cases for navigation menus, terms/definitions, and sequential steps"
    ],
    answer: `<p>HTML supports three distinct list types tailored for different data relationships:</p>
<h4>1. Ordered List (&lt;ol&gt;):</h4>
<p>Used when item sequence matters (e.g. recipe steps, rankings). Items are marked with numbers or letters.</p>
<pre><code>&lt;ol type="1"&gt;
  &lt;li&gt;Write HTML structure&lt;/li&gt;
  &lt;li&gt;Style with CSS&lt;/li&gt;
  &lt;li&gt;Add interactivity with JavaScript&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<h4>2. Unordered List (&lt;ul&gt;):</h4>
<p>Used when the order of items does not change the meaning (e.g. grocery list, navigation menus).</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;HTML5&lt;/li&gt;
  &lt;li&gt;CSS3&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<h4>3. Description List (&lt;dl&gt;):</h4>
<p>Used for name-value pairs, glossaries, or metadata terms. Uses <code>&lt;dt&gt;</code> (definition term) and <code>&lt;dd&gt;</code> (definition description).</p>
<pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language for structuring web content.&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets for visual styling and layout.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>`
  },

  {
    q: "What are HTML hyperlinks? Explain the <a> tag, its key attributes, and anchor linking.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "Definition and fundamental purpose of hyperlinks on the World Wide Web",
      "Anchor tag <a> syntax and href attribute",
      "Absolute vs. relative URLs",
      "The target attribute (_blank, _self) and security with rel='noopener'",
      "Internal page bookmarking/anchor links using #id"
    ],
    answer: `<p>A hyperlink is an element that links one resource to another. In HTML, hyperlinks are created using the anchor element <code>&lt;a&gt;</code>.</p>
<h4>Syntax & Key Attributes:</h4>
<pre><code>&lt;!-- External absolute link opening in new tab --&gt;
&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;Visit Example&lt;/a&gt;

&lt;!-- Relative internal link --&gt;
&lt;a href="about.html"&gt;About Us&lt;/a&gt;

&lt;!-- Bookmark / Fragment link --&gt;
&lt;a href="#section2"&gt;Jump to Section 2&lt;/a&gt;</code></pre>
<h4>Core Attributes:</h4>
<ul>
  <li><strong>href (Hypertext REFerence):</strong> Specifies destination URL, path, mailto: address, or element ID.</li>
  <li><strong>target:</strong> Specifies where to open the linked document (<code>_self</code> in same tab, <code>_blank</code> in new window/tab).</li>
  <li><strong>rel="noopener noreferrer":</strong> Critical security attribute when using <code>target="_blank"</code> to prevent reverse tabnabbing and window.opener exploits.</li>
</ul>`
  },

  {
    q: "What are semantic HTML5 elements? Explain any five semantic elements and their benefits.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "Definition: Elements with meaning to browser and developer",
      "<header>: Introductory content or navigation container",
      "<nav>: Section containing major navigation links",
      "<main>: Dominant, unique content of the document",
      "<section> and <article>: Independent self-contained compositions",
      "<footer>: Author information, copyright, related links",
      "Benefits: SEO, Accessibility (screen readers), Code maintainability"
    ],
    answer: `<p><strong>Semantic HTML elements</strong> clearly describe their meaning to both the browser and the developer, replacing non-semantic generic tags like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>.</p>
<h4>Five Key Semantic HTML5 Elements:</h4>
<ol>
  <li><strong>&lt;header&gt;:</strong> Represents introductory content or navigational links for a page or section.</li>
  <li><strong>&lt;nav&gt;:</strong> Encloses major navigation blocks directing to pages or anchors.</li>
  <li><strong>&lt;main&gt;:</strong> Contains the central topic-related content unique to that document.</li>
  <li><strong>&lt;article&gt;:</strong> Encapsulates an independent, self-contained unit that could be distributed in an RSS feed or syndicated (e.g. blog post, news story, product card).</li>
  <li><strong>&lt;footer&gt;:</strong> Contains author, legal, copyright, and contact details.</li>
</ol>
<h4>Advantages:</h4>
<ul>
  <li><strong>Accessibility:</strong> Assistive screen-readers allow disabled users to skip directly to landmark regions (e.g. jumping to <code>&lt;main&gt;</code>).</li>
  <li><strong>SEO (Search Engine Optimization):</strong> Crawlers index content hierarchy accurately.</li>
  <li><strong>Clean Maintainability:</strong> Clear readable source code without 'div-soup'.</li>
</ul>`
  },

  {
    q: "What are void elements in HTML? Give five examples and contrast them with normal container elements.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "Definition: Elements that cannot have children and have no closing tag",
      "Examples: <br>, <hr>, <img>, <input>, <meta>, <link>",
      "Self-closing syntax (<br> vs <br /> in XML/HTML5)",
      "Difference from container elements: Cannot enclose text or nested elements"
    ],
    answer: `<p>In HTML, a <strong>void element</strong> is an element that cannot contain any child nodes (neither text nor other elements) and consequently <em>never has a closing tag</em>.</p>
<h4>5 Common Examples:</h4>
<ul>
  <li><code>&lt;img src="pic.jpg" alt="Photo"&gt;</code> — embeds an image.</li>
  <li><code>&lt;br&gt;</code> — inserts a line break.</li>
  <li><code>&lt;hr&gt;</code> — represents a thematic break / horizontal rule.</li>
  <li><code>&lt;input type="text"&gt;</code> — interactive form input.</li>
  <li><code>&lt;meta charset="UTF-8"&gt;</code> — document metadata in the head.</li>
</ul>
<h4>Void vs. Normal Container Elements:</h4>
<table border="1" cellpadding="8" style="border-collapse:collapse; width:100%; margin-top:8px;">
  <tr><th>Feature</th><th>Void Elements</th><th>Normal Elements</th></tr>
  <tr><td>Closing Tag</td><td>None (e.g. &lt;input&gt;)</td><td>Mandatory (e.g. &lt;p&gt;...&lt;/p&gt;)</td></tr>
  <tr><td>Content</td><td>Empty / attribute driven</td><td>Can contain text & child tags</td></tr>
  <tr><td>Examples</td><td>&lt;img&gt;, &lt;br&gt;, &lt;hr&gt;</td><td>&lt;div&gt;, &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;</td></tr>
</table>`
  },

  {
    q: "Explain the three ways of applying CSS to an HTML document with syntax and use cases.",
    cat: "CSS",
    marks: "5 Marks",
    points: [
      "Inline CSS: style attribute inside HTML tags",
      "Internal CSS: <style> tag in the <head>",
      "External CSS: separate .css file linked via <link>",
      "Priority order between them",
      "Industry best practice (External CSS for separation of concerns)"
    ],
    answer: `<p>CSS can be integrated into an HTML document using three distinct approaches:</p>
<h4>1. External CSS (Recommended):</h4>
<p>Styles are stored in a dedicated <code>.css</code> file and linked in the <code>&lt;head&gt;</code>.</p>
<pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
<p><em>Best practice:</em> Clean separation of concerns, browser caching, and site-wide consistency.</p>

<h4>2. Internal CSS:</h4>
<p>Styles are declared within a <code>&lt;style&gt;</code> tag inside the document's <code>&lt;head&gt;</code>.</p>
<pre><code>&lt;head&gt;
  &lt;style&gt;
    body { background-color: #f0f0f0; }
    h1 { color: #333333; }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
<p><em>Use case:</em> Single-page applications, email templates, or standalone landing pages.</p>

<h4>3. Inline CSS:</h4>
<p>Declared directly on a specific HTML element using the <code>style</code> attribute.</p>
<pre><code>&lt;h1 style="color: blue; font-size: 24px;"&gt;Hello World&lt;/h1&gt;</code></pre>
<p><em>Use case:</em> Quick testing or overriding specific styles dynamically via JavaScript.</p>`
  },

  {
    q: "Explain different types of CSS selectors with clear examples for each.",
    cat: "CSS",
    marks: "5 Marks",
    points: [
      "Universal selector (*)",
      "Element / Type selector (p, h1, div)",
      "Class selector (.card, .btn)",
      "ID selector (#main-header)",
      "Grouping, Descendant, and Attribute selectors ([type='text'])"
    ],
    answer: `<p>CSS selectors target specific HTML elements to apply stylistic declarations:</p>
<h4>1. Universal Selector (<code>*</code>):</h4>
<p>Targets every single element. Ideal for global resets:</p>
<pre><code>* { box-sizing: border-box; margin: 0; }</code></pre>

<h4>2. Element Selector:</h4>
<p>Matches all elements of a specified tag name:</p>
<pre><code>p { font-size: 16px; line-height: 1.5; }</code></pre>

<h4>3. Class Selector (<code>.class-name</code>):</h4>
<p>Matches elements having that class attribute. Can be reused across multiple elements:</p>
<pre><code>.btn-primary { background: #6366f1; color: #fff; }</code></pre>

<h4>4. ID Selector (<code>#id-name</code>):</h4>
<p>Matches the unique element with that ID attribute:</p>
<pre><code>#site-header { position: sticky; top: 0; }</code></pre>

<h4>5. Combinators & Attribute Selectors:</h4>
<pre><code>/* Descendant: any a inside nav */
nav a { text-decoration: none; }

/* Attribute: input of type submit */
input[type="submit"] { cursor: pointer; }</code></pre>`
  },

  {
    q: "Explain CSS specificity and the Cascade with the 4-tier weighting formula.",
    cat: "CSS",
    marks: "5 Marks",
    points: [
      "Concept of specificity and why conflicts arise",
      "The 4-category weighting system: (Inline, ID, Class/Attribute/Pseudo-class, Element)",
      "Examples calculating specificity tuples",
      "The role of !important and source order (last declaration wins)"
    ],
    answer: `<p><strong>CSS Specificity</strong> is the algorithm browsers use to determine which CSS rule applies to an element when multiple conflicting rules target it.</p>
<h4>The 4-Tier Specificity Tuple:</h4>
<table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
  <tr><th>Weight</th><th>Category</th><th>Examples</th></tr>
  <tr><td><strong>(1, 0, 0, 0)</strong></td><td>Inline styles</td><td><code>&lt;div style="..."&gt;</code></td></tr>
  <tr><td><strong>(0, 1, 0, 0)</strong></td><td>ID Selectors</td><td><code>#nav</code>, <code>#header</code></td></tr>
  <tr><td><strong>(0, 0, 1, 0)</strong></td><td>Classes, Attributes, Pseudo-classes</td><td><code>.btn</code>, <code>[type="text"]</code>, <code>:hover</code></td></tr>
  <tr><td><strong>(0, 0, 0, 1)</strong></td><td>Elements, Pseudo-elements</td><td><code>div</code>, <code>p</code>, <code>::before</code></td></tr>
</table>
<h4>Calculation Example:</h4>
<pre><code>/* Specificity: (0, 1, 2, 2) */
#nav .menu-item.active a:hover</code></pre>
<ul>
  <li>1 ID (<code>#nav</code>) = 0, 1, 0, 0</li>
  <li>2 Classes/Pseudo (<code>.menu-item</code>, <code>.active</code>, <code>:hover</code> = 3) -> 0, 0, 3, 0</li>
  <li>1 Element (<code>a</code>) = 0, 0, 0, 1</li>
  <li><strong>Total:</strong> (0, 1, 3, 1) — beats any rule lacking an ID!</li>
</ul>
<p><strong>Note on !important:</strong> Overrides normal specificity, but should be used sparingly.</p>`
  },

  {
    q: "Explain CSS inheritance. Which properties are inherited by default and how can you control it?",
    cat: "CSS",
    marks: "5 Marks",
    points: [
      "Definition: Passing property values from parent to child",
      "Naturally inherited properties (color, font-family, line-height, text-align)",
      "Non-inherited properties (margin, padding, border, width, background)",
      "CSS keyword values: inherit, initial, unset, revert"
    ],
    answer: `<p><strong>Inheritance</strong> is the mechanism where child elements automatically receive certain computed property values from their parent/ancestor elements.</p>
<h4>Inherited vs. Non-Inherited Properties:</h4>
<ul>
  <li><strong>Inherited by Default:</strong> Mostly typography and text styling:
    <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>, <code>text-align</code>, <code>letter-spacing</code>.
  </li>
  <li><strong>Not Inherited:</strong> Box model, layout, and backgrounds:
    <code>margin</code>, <code>padding</code>, <code>border</code>, <code>background</code>, <code>width</code>, <code>height</code>, <code>display</code>.
  </li>
</ul>
<h4>Controlling Inheritance with Keywords:</h4>
<pre><code>/* Forces child to take parent's border */
.child-box {
  border: inherit;
}

/* Resets property to browser default initial value */
p {
  color: initial;
}</code></pre>`
  },

  {
    q: "Explain the CSS Box Model in detail with a labeled diagram and dimension formula.",
    cat: "BoxModel",
    marks: "10 Marks",
    points: [
      "The four concentric rectangular layers: Content, Padding, Border, Margin",
      "Role and behavior of each individual layer",
      "Total width and height calculation in standard content-box",
      "Code example illustrating box model declarations",
      "Practical layout implications (collapsing margins, overflow)"
    ],
    answer: `<p>Every HTML element on a webpage is represented as a rectangular box by the browser layout engine. This concept is formalized as the <strong>CSS Box Model</strong>.</p>
<h4>The 4 Concentric Layers:</h4>
<ol>
  <li><strong>Content:</strong> The innermost area where text, images, and embedded media appear. Sized by <code>width</code> and <code>height</code>.</li>
  <li><strong>Padding:</strong> The transparent area surrounding the content, located inside the border. Inherits the element's background color.</li>
  <li><strong>Border:</strong> The line wrapping around the padding and content. Styled via <code>border-width</code>, <code>border-style</code>, and <code>border-color</code>.</li>
  <li><strong>Margin:</strong> The transparent spacing outside the border separating this element from neighboring elements.</li>
</ol>
<h4>Calculated Total Space in default <code>content-box</code>:</h4>
<pre><code>Total Rendered Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
Total Rendered Height = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom</code></pre>
<h4>Example Calculation:</h4>
<pre><code>.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}
/* Total rendered on-screen width = 300 + 40 (padding) + 10 (border) + 30 (margin) = 380px */</code></pre>`
  },

  {
    q: "Differentiate between CSS margin and padding with examples and background behavior.",
    cat: "BoxModel",
    marks: "5 Marks",
    points: [
      "Margin is outside the border; padding is inside the border",
      "Padding adopts element background-color; margin is always transparent",
      "Margin collapsing behavior on vertical block elements",
      "Negative margins are allowed; negative padding is invalid",
      "Clickable area includes padding but excludes margin"
    ],
    answer: `<p>While both <code>margin</code> and <code>padding</code> create whitespace, they behave fundamentally differently within the box model:</p>
<table border="1" cellpadding="8" style="border-collapse:collapse; width:100%;">
  <tr><th>Feature</th><th>Padding</th><th>Margin</th></tr>
  <tr><td>Location</td><td>Inside the border</td><td>Outside the border</td></tr>
  <tr><td>Background</td><td>Shows the element's background</td><td>Always transparent</td></tr>
  <tr><td>Clickable Area</td><td>Registers click events</td><td>Does not register clicks</td></tr>
  <tr><td>Negative Values</td><td>Invalid (ignored by browser)</td><td>Valid (pulls elements closer)</td></tr>
  <tr><td>Collapsing</td><td>Never collapses</td><td>Vertical margins collapse between siblings</td></tr>
</table>
<h4>Code Example:</h4>
<pre><code>button {
  background-color: #6366f1;
  color: white;
  padding: 12px 24px; /* Increases clickable colored area */
  margin: 10px 0;      /* Pushes neighboring buttons away */
}</code></pre>`
  },

  {
    q: "Explain the difference between content-box and border-box sizing with formulas.",
    cat: "BoxModel",
    marks: "5 Marks",
    points: [
      "content-box: default CSS behavior where width/height apply only to content",
      "border-box: width/height include content + padding + border",
      "Why border-box is universally preferred for responsive web development",
      "The universal reset snippet (* { box-sizing: border-box; })"
    ],
    answer: `<p>The <code>box-sizing</code> property determines how the browser calculates the total width and height of an element.</p>
<h4>1. content-box (Default):</h4>
<p>Declared width applies ONLY to the content box. Adding padding or borders increases the total visible width.</p>
<pre><code>/* Rendered width: 200 + 20(padding) + 4(border) = 224px */
.card {
  box-sizing: content-box;
  width: 200px;
  padding: 10px;
  border: 2px solid black;
}</code></pre>

<h4>2. border-box (Modern Standard):</h4>
<p>Declared width encompasses content, padding, and border combined. The content shrinks to fit.</p>
<pre><code>/* Rendered width: exactly 200px! (Content width = 200 - 20 - 4 = 176px) */
.card {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 2px solid black;
}</code></pre>
<h4>Universal Best Practice:</h4>
<pre><code>*, *::before, *::after {
  box-sizing: border-box;
}</code></pre>`
  },

  {
    q: "Explain CSS sizing properties (width/height, min/max) and the overflow property with its values.",
    cat: "BoxModel",
    marks: "5 Marks",
    points: [
      "width, height, min-width, max-width, min-height, max-height",
      "Preventing layout breakage with max-width: 100%",
      "overflow property and its values: visible, hidden, scroll, auto",
      "overflow-x and overflow-y controls"
    ],
    answer: `<p>Controlling element dimensions and content overflow is crucial for responsive and clean designs.</p>
<h4>Sizing Properties:</h4>
<ul>
  <li><code>width</code> / <code>height</code>: Sets fixed or relative dimensions.</li>
  <li><code>min-width</code> / <code>min-height</code>: Prevents element from shrinking below this threshold.</li>
  <li><code>max-width</code> / <code>max-height</code>: Prevents element from expanding beyond this limit. Essential for responsive images: <code>img { max-width: 100%; height: auto; }</code>.</li>
</ul>
<h4>The overflow Property Values:</h4>
<ul>
  <li><code>visible</code> (default): Content spills outside container without clipping.</li>
  <li><code>hidden</code>: Overspill is clipped and invisible; no scrollbars provided.</li>
  <li><code>scroll</code>: Scrollbars are permanently displayed whether needed or not.</li>
  <li><code>auto</code>: Scrollbars appear dynamically only when content exceeds container bounds.</li>
</ul>`
  },

  {
    q: "How can Generative AI assist in learning, developing, and debugging web applications? What precautions must be taken?",
    cat: "AI",
    marks: "5 Marks",
    points: [
      "Role in boilerplate generation, algorithm translation, and regex creation",
      "Debugging assistance: Interpreting console errors and CSS layout glitches",
      "Learning aid: Explaining syntax, modern APIs, and accessible markup",
      "Critical precautions: Verifying hallucinations, testing cross-browser, avoiding security vulnerabilities"
    ],
    answer: `<p>Generative AI (e.g. LLMs and coding assistants) has transformed modern web development workflows across several phases:</p>
<h4>Key Use Cases:</h4>
<ol>
  <li><strong>Scaffolding & Boilerplates:</strong> Quickly generating semantic HTML templates, responsive flex/grid layouts, and SVG vector graphics.</li>
  <li><strong>Code Explanation & Learning:</strong> Breaking down complex concepts like CSS specificity, flexbox alignments, and box model calculations into digestible steps.</li>
  <li><strong>Debugging Assistance:</strong> Analyzing error logs, pinpointing CSS cascade conflicts, and diagnosing missing attributes.</li>
  <li><strong>Accessibility Enhancements:</strong> Suggesting ARIA landmarks, alt descriptions, and proper contrast color schemes.</li>
</ol>
<h4>Essential Developer Precautions:</h4>
<ul>
  <li><strong>Hallucinations & Deprecated APIs:</strong> GenAI may output obsolete HTML tags or fictional CSS properties.</li>
  <li><strong>Always Test & Verify:</strong> Code must be loaded, inspected in browser devtools, and validated across viewports.</li>
  <li><strong>Security Awareness:</strong> Never paste sensitive API keys, production tokens, or confidential data into public prompts.</li>
</ul>`
  },

  {
    q: "Explain how HTML and CSS work together in the browser rendering pipeline.",
    cat: "HTML",
    marks: "5 Marks",
    points: [
      "HTML builds DOM (Document Object Model) tree",
      "CSS builds CSSOM (CSS Object Model) tree",
      "DOM and CSSOM combine into Render Tree",
      "Layout (Reflow) calculates geometry and positions",
      "Paint (Repaint) rasterizes pixels onto screen"
    ],
    answer: `<p>HTML and CSS collaborate through a structured sequence known as the <strong>Critical Rendering Path</strong>:</p>
<h4>The 5 Steps of the Browser Pipeline:</h4>
<ol>
  <li><strong>DOM Construction:</strong> Browser parses raw HTML bytes into tokens, nodes, and builds the Document Object Model (DOM) tree.</li>
  <li><strong>CSSOM Construction:</strong> Browser parses external, internal, and inline CSS styles to construct the CSS Object Model (CSSOM) tree.</li>
  <li><strong>Render Tree:</strong> The browser merges DOM and CSSOM trees into the Render Tree, containing only elements visible on screen (ignoring <code>&lt;head&gt;</code> and <code>display: none</code>).</li>
  <li><strong>Layout (Reflow):</strong> The engine calculates the exact geometry, coordinates, width, and height of every visible node on the viewport.</li>
  <li><strong>Painting:</strong> Pixels are painted onto layers (colors, borders, shadows, text), which are then composited into the final screen display.</li>
</ol>`
  }
];

// --- QUICK REVISION SHEET DATASET ---
const revision = [
  ["HTML5 Core Structure", "Every valid document requires <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang='en'&gt;</code>, <code>&lt;head&gt;</code> (metadata, charset, viewport), and <code>&lt;body&gt;</code>."],
  ["Semantic Landmarks", "Use semantic tags: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> for accessibility and SEO."],
  ["Void / Empty Elements", "Cannot have child elements or closing tags: <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>."],
  ["CSS Integration Types", "Inline (<code>style=''</code>) has highest specificity; Internal (<code>&lt;style&gt;</code> in head); External (<code>&lt;link rel='stylesheet'&gt;</code>) is industry best-practice."],
  ["CSS Specificity Order", "Inline (1,0,0,0) &gt; ID (0,1,0,0) &gt; Class/Attribute/Pseudo-class (0,0,1,0) &gt; Element/Pseudo-element (0,0,0,1). Last declared wins on tie."],
  ["Box Model Layers", "Inside-out: <strong>Content</strong> (width/height) &rarr; <strong>Padding</strong> (colored clear space) &rarr; <strong>Border</strong> &rarr; <strong>Margin</strong> (transparent outer gap)."],
  ["Box Sizing Modes", "<code>content-box</code>: width applies only to content. <code>border-box</code>: declared width includes content + padding + border."],
  ["CSS Sizing & Overflow", "Use <code>max-width: 100%</code> for responsive scaling. <code>overflow: auto</code> provides scrollbars only when content spills out."],
  ["Flexbox vs Grid", "Flexbox is ideal for 1-dimensional layouts (rows or columns, navbar, cards). Grid excels in 2-dimensional grid layouts with columns & rows."],
  ["GenAI Developer Protocol", "Use GenAI for boilerplate generation, explanations, and debugging; but <strong>always inspect, test, and verify</strong> in the browser."]
];

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
const STORAGE_KEY = "wad_prep_portal_state_v1";

let appState = {
  theme: "light",
  mcqAnswers: {},
  instantFeedback: true,
  currentCat: "all",
  currentChallenge: 0,
  userChallengeCode: {},
  descAnswers: {},
  completedChallenges: []
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load local storage state:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateGlobalStats();
  } catch (e) {
    console.error("Failed to save local storage state:", e);
  }
}

function updateGlobalStats() {
  const answeredMcqs = Object.keys(appState.mcqAnswers).length;
  const completedCh = appState.completedChallenges.length;
  const attemptedDesc = Object.values(appState.descAnswers).filter(txt => txt && txt.trim().length > 10).length;

  document.getElementById("statMcq").textContent = `${answeredMcqs}/${mcqs.length}`;
  document.getElementById("statCode").textContent = `${completedCh}/6`;
  document.getElementById("statDesc").textContent = `${attemptedDesc}/15`;
}

// ==========================================================================
// THEME SWITCHER
// ==========================================================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  document.documentElement.setAttribute("data-theme", appState.theme);
  toggleBtn.textContent = appState.theme === "dark" ? "☀️ Light" : "🌙 Dark";

  toggleBtn.onclick = () => {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", appState.theme);
    toggleBtn.textContent = appState.theme === "dark" ? "☀️ Light" : "🌙 Dark";
    saveState();
  };
}

// Reset All Data
document.getElementById("resetAllData").onclick = () => {
  if (confirm("Are you sure you want to reset all your practice progress, saved code, and answers?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};

// ==========================================================================
// SECTION A: MCQ PRACTICE LOGIC
// ==========================================================================
function renderMcqs(filter = "all") {
  const list = document.getElementById("mcqList");
  list.innerHTML = "";

  mcqs.forEach((q, i) => {
    if (filter !== "all" && q.cat !== filter) return;

    const card = document.createElement("div");
    card.className = "question-card";
    card.dataset.index = i;

    const hasAnswered = appState.mcqAnswers[i] !== undefined;
    const selectedVal = hasAnswered ? appState.mcqAnswers[i] : null;

    card.innerHTML = `
      <div class="question-header">
        <span class="q-category-tag">${q.cat}</span>
        <small class="text-muted">Question ${i + 1} of ${mcqs.length}</small>
      </div>
      <h3 class="question-title">${i + 1}. ${q.q}</h3>
      <div class="options-group">
        ${q.options.map((opt, j) => {
          let classes = "option-item";
          const isSelected = selectedVal === j;
          if (isSelected) classes += " selected";
          return `
            <label class="${classes}" data-opt="${j}">
              <input type="radio" name="mcq_${i}" value="${j}" ${isSelected ? "checked" : ""}>
              <span>${String.fromCharCode(65 + j)}. ${opt}</span>
            </label>
          `;
        }).join("")}
      </div>
      <div class="explanation-drawer hidden" id="exp_${i}">
        <strong>💡 Explanation & Syllabus Key Point:</strong>
        <p>${q.exp}</p>
      </div>
    `;

    // Event listener for option selection
    card.querySelectorAll("input[type=radio]").forEach(radio => {
      radio.onchange = (e) => {
        const val = Number(e.target.value);
        appState.mcqAnswers[i] = val;
        saveState();
        updateMcqProgress();

        card.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
        radio.closest(".option-item").classList.add("selected");

        if (appState.instantFeedback) {
          evaluateSingleMcq(card, i, val);
        }
      };
    });

    list.appendChild(card);

    if (hasAnswered && appState.instantFeedback) {
      evaluateSingleMcq(card, i, selectedVal);
    }
  });

  updateMcqProgress();
}

function evaluateSingleMcq(card, index, selectedVal) {
  const q = mcqs[index];
  const items = card.querySelectorAll(".option-item");
  items.forEach(el => el.classList.remove("correct", "incorrect"));

  if (selectedVal === q.ans) {
    items[selectedVal].classList.add("correct");
  } else {
    items[selectedVal].classList.add("incorrect");
    items[q.ans].classList.add("correct");
  }
  const exp = card.querySelector(`#exp_${index}`);
  if (exp) exp.classList.remove("hidden");
}

function updateMcqProgress() {
  const total = mcqs.length;
  const answeredCount = Object.keys(appState.mcqAnswers).length;
  const percent = Math.round((answeredCount / total) * 100);

  document.getElementById("mcqProgress").style.width = `${percent}%`;
  document.getElementById("progressText").textContent = `${answeredCount} answered of ${total}`;

  // Calculate score if evaluated
  let score = 0;
  Object.keys(appState.mcqAnswers).forEach(idx => {
    if (appState.mcqAnswers[idx] === mcqs[idx].ans) score++;
  });

  document.getElementById("mcqScore").textContent = `${score} / ${total}`;
  document.getElementById("mcqPercent").textContent = `${Math.round((score / total) * 100)}%`;
}

function checkAllMcqs() {
  let score = 0;
  const total = mcqs.length;
  const answered = Object.keys(appState.mcqAnswers).length;

  mcqs.forEach((q, i) => {
    const card = document.querySelector(`.question-card[data-index="${i}"]`);
    if (card) {
      const selected = appState.mcqAnswers[i];
      if (selected !== undefined) {
        evaluateSingleMcq(card, i, selected);
        if (selected === q.ans) score++;
      } else {
        // Show correct answer if unanswered
        const items = card.querySelectorAll(".option-item");
        items[q.ans].classList.add("correct");
        const exp = card.querySelector(`#exp_${i}`);
        if (exp) exp.classList.remove("hidden");
      }
    }
  });

  const banner = document.getElementById("mcqResult");
  banner.classList.remove("hidden", "good", "bad");
  banner.classList.add(score >= 24 ? "good" : "bad");
  banner.innerHTML = `
    <strong>${score >= 24 ? "🎉 Excellent Preparation!" : "📚 Good Practice Session!"}</strong>
    <p>You answered ${answered} of ${total} questions. Final Score: <b>${score} / ${total} (${Math.round((score/total)*100)}%)</b>. Correct answers and explanations are now visible above.</p>
  `;
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetMcqs() {
  if (confirm("Reset all MCQ selections and scores?")) {
    appState.mcqAnswers = {};
    saveState();
    renderMcqs(appState.currentCat);
    document.getElementById("mcqResult").classList.add("hidden");
  }
}

function revealAllMcqs() {
  document.querySelectorAll(".explanation-drawer").forEach(d => d.classList.remove("hidden"));
}

// Category filter chips
document.querySelectorAll(".filter-chip").forEach(chip => {
  chip.onclick = () => {
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    appState.currentCat = chip.dataset.cat;
    renderMcqs(appState.currentCat);
  };
});

// Instant feedback toggle
const instantToggle = document.getElementById("instantFeedbackToggle");
instantToggle.checked = appState.instantFeedback;
instantToggle.onchange = (e) => {
  appState.instantFeedback = e.target.checked;
  saveState();
  renderMcqs(appState.currentCat);
};

document.getElementById("checkMcq").onclick = checkAllMcqs;
document.getElementById("resetMcq").onclick = resetMcqs;
document.getElementById("revealAllMcqs").onclick = revealAllMcqs;

// ==========================================================================
// SECTION B: CODING PLAYGROUND LOGIC
// ==========================================================================
function renderChallengePicker() {
  const p = document.getElementById("challengePicker");
  p.innerHTML = challenges.map((c, i) => {
    const isPassed = appState.completedChallenges.includes(i);
    return `
      <button class="challenge-btn ${i === appState.currentChallenge ? "active" : ""} ${isPassed ? "passed" : ""}" data-ch="${i}">
        ${i + 1}. ${c.title}
      </button>
    `;
  }).join("");

  p.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => loadChallenge(Number(btn.dataset.ch));
  });
}

function loadChallenge(index) {
  appState.currentChallenge = index;
  const c = challenges[index];

  document.querySelectorAll(".challenge-btn").forEach((b, i) => {
    b.classList.toggle("active", i === index);
  });

  document.getElementById("targetImage").src = c.image;
  document.getElementById("challengeTitle").textContent = c.title;
  document.getElementById("challengeBrief").textContent = c.brief;
  
  const lvl = document.getElementById("challengeLevel");
  lvl.textContent = c.level;
  lvl.className = `pill pill-${c.level.toLowerCase()}`;

  const isCompleted = appState.completedChallenges.includes(index);
  const badge = document.getElementById("challengeBadge");
  badge.textContent = isCompleted ? "✓ Mastered" : "Needs Practice";
  badge.classList.toggle("completed", isCompleted);

  // Render requirement checklist
  renderRequirements(c.req, [false, false, false, false, false]);

  // Load user code if cached, else load starter template
  const saved = appState.userChallengeCode[index];
  if (saved) {
    document.getElementById("htmlCode").value = saved.html;
    document.getElementById("cssCode").value = saved.css;
  } else {
    document.getElementById("htmlCode").value = c.starterHtml;
    document.getElementById("cssCode").value = c.starterCss;
  }

  runCode();
  document.getElementById("codeResult").classList.add("hidden");
  saveState();
}

function renderRequirements(reqs, statuses) {
  const list = document.getElementById("requirements");
  list.innerHTML = reqs.map((r, i) => `
    <div class="req-item ${statuses[i] ? "passed" : ""}">
      <span class="req-icon">${statuses[i] ? "✓" : "□"}</span>
      <span>${r}</span>
    </div>
  `).join("");
}

function runCode() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const preview = document.getElementById("preview");

  preview.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;

  // Cache user code
  appState.userChallengeCode[appState.currentChallenge] = { html, css };
  saveState();
}

function checkCodeRequirements() {
  const c = challenges[appState.currentChallenge];
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;

  const results = c.validate(html, css);
  renderRequirements(c.req, results);

  const passedCount = results.filter(Boolean).length;
  const isAllPassed = passedCount === c.req.length;

  if (isAllPassed) {
    if (!appState.completedChallenges.includes(appState.currentChallenge)) {
      appState.completedChallenges.push(appState.currentChallenge);
    }
  }

  const badge = document.getElementById("challengeBadge");
  badge.textContent = isAllPassed ? "✓ Mastered" : `${passedCount}/${c.req.length} Passed`;
  badge.classList.toggle("completed", isAllPassed);

  renderChallengePicker();

  const res = document.getElementById("codeResult");
  res.classList.remove("hidden", "good", "bad");
  res.classList.add(passedCount >= 4 ? "good" : "bad");

  res.innerHTML = `
    <strong>${isAllPassed ? "🎉 All Requirements Satisfied!" : `${passedCount} of ${c.req.length} Requirements Met`}</strong>
    <p>${isAllPassed 
      ? "Outstanding! Your HTML and CSS fulfill all syllabus criteria for this challenge." 
      : "A few details are missing or need adjustment. Review the checklist items marked with □ above."}
    </p>
  `;
  saveState();
}

// Code Editor Tab switching (HTML / CSS)
document.querySelectorAll(".editor-tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".editor-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const isHtml = tab.dataset.editor === "html";
    document.getElementById("htmlEditorWrap").classList.toggle("hidden", !isHtml);
    document.getElementById("cssEditorWrap").classList.toggle("hidden", isHtml);
  };
});

// Viewport Switcher Controls
document.querySelectorAll(".viewport-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".viewport-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("previewWrapper").style.width = btn.dataset.width;
  };
});

// Helper Buttons: Template, Solution, Clear
document.getElementById("loadStarterBtn").onclick = () => {
  const c = challenges[appState.currentChallenge];
  document.getElementById("htmlCode").value = c.starterHtml;
  document.getElementById("cssCode").value = c.starterCss;
  runCode();
};

document.getElementById("loadSolutionBtn").onclick = () => {
  if (confirm("Load reference solution? This will overwrite the current editor content.")) {
    const c = challenges[appState.currentChallenge];
    document.getElementById("htmlCode").value = c.solutionHtml;
    document.getElementById("cssCode").value = c.solutionCss;
    runCode();
    checkCodeRequirements();
  }
};

document.getElementById("clearCodeBtn").onclick = () => {
  if (confirm("Clear editor code?")) {
    document.getElementById("htmlCode").value = "";
    document.getElementById("cssCode").value = "";
    runCode();
  }
};

// Enable Tab-key indentation and auto-run on typing
function setupCodeTextarea(textareaId) {
  const el = document.getElementById(textareaId);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = el.selectionStart;
      const end = el.selectionEnd;
      el.value = el.value.substring(0, start) + "  " + el.value.substring(end);
      el.selectionStart = el.selectionEnd = start + 2;
    }
  });

  let debounceTimer;
  el.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runCode, 600);
  });
}

setupCodeTextarea("htmlCode");
setupCodeTextarea("cssCode");

document.getElementById("runCode").onclick = runCode;
document.getElementById("checkCode").onclick = checkCodeRequirements;
document.getElementById("resetCode").onclick = () => loadChallenge(appState.currentChallenge);

// ==========================================================================
// SECTION C: DESCRIPTIVE PRACTICE LOGIC
// ==========================================================================
function renderDescriptive(filter = "all") {
  const list = document.getElementById("descriptiveList");
  list.innerHTML = "";

  desc.forEach((d, i) => {
    if (filter !== "all" && d.cat !== filter) return;

    const card = document.createElement("article");
    card.className = "desc-card";

    const savedText = appState.descAnswers[i] || "";
    const words = savedText.trim() ? savedText.trim().split(/\s+/).length : 0;

    card.innerHTML = `
      <div class="desc-header">
        <span class="q-category-tag">${d.cat}</span>
        <span class="desc-marks-pill">${d.marks}</span>
      </div>
      <h3>${i + 1}. ${d.q}</h3>
      <textarea class="desc-textarea" id="desc_input_${i}" placeholder="Type your structured exam answer here...">${savedText}</textarea>
      <div class="desc-footer-row">
        <div class="desc-btns">
          <button class="btn btn-secondary btn-sm" id="btn_key_${i}">🔑 Key Points</button>
          <button class="btn btn-ghost btn-sm" id="btn_model_${i}">📖 Full Model Answer</button>
        </div>
        <span class="word-count" id="wc_${i}">${words} words</span>
      </div>
      <div class="keypoints-box hidden" id="kp_${i}">
        <h5>Key Points to Include in Exam:</h5>
        <ul>${d.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
      </div>
      <div class="model-answer-box hidden" id="model_${i}">
        <h5>Comprehensive Model Answer:</h5>
        <div class="model-answer-content">${d.answer}</div>
      </div>
    `;

    // Input listener to auto-save and update word count
    const textarea = card.querySelector(`#desc_input_${i}`);
    textarea.oninput = () => {
      appState.descAnswers[i] = textarea.value;
      const w = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
      card.querySelector(`#wc_${i}`).textContent = `${w} words`;
      saveState();
    };

    // Toggle Key Points
    card.querySelector(`#btn_key_${i}`).onclick = () => {
      card.querySelector(`#kp_${i}`).classList.toggle("hidden");
    };

    // Toggle Model Answer
    card.querySelector(`#btn_model_${i}`).onclick = () => {
      card.querySelector(`#model_${i}`).classList.toggle("hidden");
    };

    list.appendChild(card);
  });
}

// Descriptive filter chips
document.querySelectorAll(".desc-chip").forEach(chip => {
  chip.onclick = () => {
    document.querySelectorAll(".desc-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderDescriptive(chip.dataset.dcat);
  };
});

// ==========================================================================
// SECTION D: REVISION & INTERACTIVE TOOLS
// ==========================================================================
function renderRevision(searchTerm = "") {
  const grid = document.getElementById("revisionGrid");
  const term = searchTerm.toLowerCase();

  const filtered = revision.filter(r => 
    r[0].toLowerCase().includes(term) || r[1].toLowerCase().includes(term)
  );

  grid.innerHTML = filtered.map(r => `
    <div class="revision-card">
      <h3>${r[0]}</h3>
      <p>${r[1]}</p>
    </div>
  `).join("");
}

document.getElementById("revisionSearch").oninput = (e) => {
  renderRevision(e.target.value);
};

// --- Interactive Box Model Playground ---
let bmState = {
  sizing: "content-box",
  width: 240,
  height: 100,
  padding: 20,
  border: 10,
  margin: 25
};

function updateBoxModelVisualizer() {
  document.getElementById("valWidth").textContent = bmState.width;
  document.getElementById("valHeight").textContent = bmState.height;
  document.getElementById("valPadding").textContent = bmState.padding;
  document.getElementById("valBorder").textContent = bmState.border;
  document.getElementById("valMargin").textContent = bmState.margin;

  document.getElementById("dispMargin").textContent = bmState.margin;
  document.getElementById("dispBorder").textContent = bmState.border;
  document.getElementById("dispPadding").textContent = bmState.padding;
  document.getElementById("dispContentDim").textContent = `${bmState.width} × ${bmState.height}`;

  const padTotal = bmState.padding * 2;
  const borTotal = bmState.border * 2;
  const marTotal = bmState.margin * 2;

  let totalWidth, totalHeight, contentCalculatedWidth, contentCalculatedHeight;

  if (bmState.sizing === "content-box") {
    totalWidth = bmState.width + padTotal + borTotal;
    totalHeight = bmState.height + padTotal + borTotal;
    contentCalculatedWidth = bmState.width;
    contentCalculatedHeight = bmState.height;
  } else {
    // border-box
    totalWidth = bmState.width;
    totalHeight = bmState.height;
    contentCalculatedWidth = Math.max(0, bmState.width - padTotal - borTotal);
    contentCalculatedHeight = Math.max(0, bmState.height - padTotal - borTotal);
  }

  const calc = document.getElementById("bmCalculation");
  calc.innerHTML = `
    <b>Mode: <code>box-sizing: ${bmState.sizing}</code></b><br>
    ${bmState.sizing === "content-box" 
      ? `• Total Rendered Width = ${bmState.width} (content) + ${padTotal} (padding) + ${borTotal} (border) = <b>${totalWidth}px</b><br>
         • Total Space with Margin = ${totalWidth} + ${marTotal} = <b>${totalWidth + marTotal}px</b>`
      : `• Specified Width = <b>${bmState.width}px</b> (encompasses content + padding + border)<br>
         • Content area shrinks to: ${bmState.width} - ${padTotal} - ${borTotal} = <b>${contentCalculatedWidth}px</b> wide.`
    }
  `;
}

// Box Sizing Toggle
document.querySelectorAll(".box-sizing-toggle button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".box-sizing-toggle button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    bmState.sizing = btn.dataset.sizing;
    updateBoxModelVisualizer();
  };
});

["Width", "Height", "Padding", "Border", "Margin"].forEach(param => {
  const slider = document.getElementById(`input${param}`);
  slider.oninput = (e) => {
    bmState[param.toLowerCase()] = Number(e.target.value);
    updateBoxModelVisualizer();
  };
});

// --- CSS Specificity Calculator ---
function calculateSpecificity(selector) {
  let s = (selector || "").trim();
  if (!s) return { inline: 0, ids: 0, classes: 0, elements: 0 };

  let ids = (s.match(/#[a-zA-Z0-9_-]+/g) || []).length;
  let classes = (s.match(/\.[a-zA-Z0-9_-]+/g) || []).length;
  let attributes = (s.match(/\[[^\]]+\]/g) || []).length;
  let pseudoClasses = (s.match(/:[a-zA-Z0-9_-]+(?!\:)/g) || []).length;
  let pseudoElements = (s.match(/::[a-zA-Z0-9_-]+/g) || []).length;

  // Clean matched items to count plain elements
  let cleaned = s
    .replace(/#[a-zA-Z0-9_-]+/g, " ")
    .replace(/\.[a-zA-Z0-9_-]+/g, " ")
    .replace(/\[[^\]]+\]/g, " ")
    .replace(/::[a-zA-Z0-9_-]+/g, " ")
    .replace(/:[a-zA-Z0-9_-]+/g, " ")
    .replace(/[>+~*]/g, " ");

  let elements = (cleaned.match(/[a-zA-Z0-9_-]+/g) || []).length + pseudoElements;

  return {
    inline: 0,
    ids: ids,
    classes: classes + attributes + pseudoClasses,
    elements: elements
  };
}

function updateSpecificityUI() {
  const sel = document.getElementById("specificityInput").value;
  const spec = calculateSpecificity(sel);

  document.getElementById("specInline").textContent = spec.inline;
  document.getElementById("specId").textContent = spec.ids;
  document.getElementById("specClass").textContent = spec.classes;
  document.getElementById("specElement").textContent = spec.elements;

  document.getElementById("specificityDesc").innerHTML = `
    Specificity Weight: <b>(${spec.inline}, ${spec.ids}, ${spec.classes}, ${spec.elements})</b>.<br>
    Contains <b>${spec.ids} ID(s)</b>, <b>${spec.classes} Class/Attribute/Pseudo-class(es)</b>, and <b>${spec.elements} Element(s)</b>.
  `;
}

document.getElementById("calcSpecificityBtn").onclick = updateSpecificityUI;
document.getElementById("specificityInput").oninput = updateSpecificityUI;

// ==========================================================================
// SECTION E: EXAM SIMULATOR LOGIC
// ==========================================================================
let examSession = null;
let examTimerInterval = null;

function startExamSimulator() {
  // Generate randomized paper according to blueprint:
  // Part A: 10 random MCQs
  const shuffledMcqs = [...mcqs].sort(() => 0.5 - Math.random()).slice(0, 10);

  // Part B: 2 random coding challenges (choose 1)
  const shuffledCode = [...challenges].sort(() => 0.5 - Math.random()).slice(0, 2);

  // Part C: 3 random descriptive questions (choose 2)
  const shuffledDesc = [...desc].sort(() => 0.5 - Math.random()).slice(0, 3);

  examSession = {
    startTime: Date.now(),
    durationMinutes: 45,
    mcqs: shuffledMcqs,
    coding: shuffledCode,
    desc: shuffledDesc,
    activeCodingChoice: 0,
    answers: {
      mcq: {},
      codeHtml: shuffledCode[0].starterHtml,
      codeCss: shuffledCode[0].starterCss,
      desc: {}
    }
  };

  document.getElementById("simulatorIntro").classList.add("hidden");
  document.getElementById("simulatorPaper").classList.remove("hidden");
  document.getElementById("simulatorReport").classList.add("hidden");
  document.getElementById("examTimerBox").classList.remove("hidden");

  renderSimulatorPaper();
  startExamTimer(45 * 60);
}

function startExamTimer(secondsLeft) {
  clearInterval(examTimerInterval);
  const clock = document.getElementById("timerClock");

  function tick() {
    if (secondsLeft <= 0) {
      clearInterval(examTimerInterval);
      alert("⏱️ Time is up! Submitting your exam paper.");
      submitExamSimulator();
      return;
    }
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    clock.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    secondsLeft--;
  }

  tick();
  examTimerInterval = setInterval(tick, 1000);
}

function renderSimulatorPaper() {
  // Part A: MCQs
  const mcqWrap = document.getElementById("simMcqContainer");
  mcqWrap.innerHTML = examSession.mcqs.map((q, i) => `
    <div class="question-card" style="margin-bottom:12px;">
      <h4 style="font-size:15px; margin-bottom:8px;">${i + 1}. ${q.q} (1 Mark)</h4>
      <div class="options-group">
        ${q.options.map((opt, j) => `
          <label class="option-item" style="padding:8px 12px;">
            <input type="radio" name="sim_mcq_${i}" value="${j}">
            <span>${String.fromCharCode(65 + j)}. ${opt}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  mcqWrap.querySelectorAll("input[type=radio]").forEach(radio => {
    radio.onchange = (e) => {
      const qIndex = Number(e.target.name.replace("sim_mcq_", ""));
      examSession.answers.mcq[qIndex] = Number(e.target.value);
    };
  });

  // Part B: Coding Choice Tabs
  const codeTabs = document.getElementById("simCodingTabs");
  codeTabs.innerHTML = examSession.coding.map((c, i) => `
    <button class="btn ${i === examSession.activeCodingChoice ? "btn-primary" : "btn-ghost"}" data-simch="${i}">
      Option ${i + 1}: ${c.title} (${c.level})
    </button>
  `).join("");

  codeTabs.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      examSession.activeCodingChoice = Number(btn.dataset.simch);
      renderSimulatorCoding();
    };
  });

  renderSimulatorCoding();

  // Part C: Descriptive (Choose 2 of 3)
  const descWrap = document.getElementById("simDescContainer");
  descWrap.innerHTML = examSession.desc.map((d, i) => `
    <div class="desc-card" style="margin-bottom:16px;">
      <h4>Question ${i + 1}: ${d.q} (5 Marks)</h4>
      <textarea class="desc-textarea" id="sim_desc_${i}" placeholder="Write your 5-mark answer here..."></textarea>
    </div>
  `).join("");

  descWrap.querySelectorAll("textarea").forEach((txt, i) => {
    txt.oninput = () => {
      examSession.answers.desc[i] = txt.value;
    };
  });
}

function renderSimulatorCoding() {
  const c = examSession.coding[examSession.activeCodingChoice];
  const container = document.getElementById("simCodingContainer");

  container.innerHTML = `
    <div style="background:var(--surface-alt); padding:16px; border-radius:var(--radius); margin-bottom:12px;">
      <b>Selected: Option ${examSession.activeCodingChoice + 1} — ${c.title}</b>
      <p style="font-size:13px; color:var(--text-muted); margin:4px 0 10px;">${c.brief}</p>
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <img src="${c.image}" style="max-height:160px; border-radius:8px; border:1px solid #ddd;" alt="Target">
        <ul style="font-size:13px; padding-left:18px;">
          ${c.req.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="editor-wrap" style="margin-bottom:10px;">
      <label style="font-size:12px; font-weight:700;">HTML Code:</label>
      <textarea id="simHtmlCode" style="height:140px; margin-bottom:8px;">${c.starterHtml}</textarea>
      <label style="font-size:12px; font-weight:700;">CSS Code:</label>
      <textarea id="simCssCode" style="height:140px;">${c.starterCss}</textarea>
    </div>
  `;

  setupCodeTextarea("simHtmlCode");
  setupCodeTextarea("simCssCode");
}

function submitExamSimulator() {
  clearInterval(examTimerInterval);
  document.getElementById("examTimerBox").classList.add("hidden");

  // Grade Part A (MCQ: 10 marks)
  let mcqMarks = 0;
  examSession.mcqs.forEach((q, i) => {
    if (examSession.answers.mcq[i] === q.ans) mcqMarks++;
  });

  // Grade Part B (Coding: 10 marks)
  const chosenCode = examSession.coding[examSession.activeCodingChoice];
  const simHtml = document.getElementById("simHtmlCode") ? document.getElementById("simHtmlCode").value : "";
  const simCss = document.getElementById("simCssCode") ? document.getElementById("simCssCode").value : "";

  const codeChecks = chosenCode.validate(simHtml, simCss);
  const codePassedCount = codeChecks.filter(Boolean).length;
  const codeMarks = Math.round((codePassedCount / chosenCode.req.length) * 10);

  // Grade Part C (Descriptive: estimated based on word count & attempt)
  const descAnswers = Object.values(examSession.answers.desc || {});
  let descAttempted = descAnswers.filter(t => t && t.trim().length > 30).length;
  let estimatedDescMarks = Math.min(10, descAttempted * 4 + 1);

  const totalMarks = mcqMarks + codeMarks + estimatedDescMarks;

  document.getElementById("simulatorPaper").classList.add("hidden");
  document.getElementById("simulatorReport").classList.remove("hidden");

  document.getElementById("repMcqScore").textContent = `${mcqMarks} / 10`;
  document.getElementById("repCodeScore").textContent = `${codeMarks} / 10`;
  document.getElementById("repDescScore").textContent = `${estimatedDescMarks} / 10 (${descAttempted}/2 attempted)`;
  document.getElementById("repTotalScore").textContent = `${totalMarks} / 30`;

  let grade = "C";
  if (totalMarks >= 26) grade = "A+";
  else if (totalMarks >= 22) grade = "A";
  else if (totalMarks >= 18) grade = "B";
  else if (totalMarks >= 14) grade = "C";
  else grade = "Needs Revision";

  document.getElementById("reportGrade").textContent = `GRADE: ${grade}`;

  document.getElementById("reportFeedback").innerHTML = `
    <h4>Diagnostic Analysis:</h4>
    <ul>
      <li><b>Part A (MCQs):</b> You scored ${mcqMarks} of 10 marks. ${mcqMarks >= 8 ? "Strong theoretical foundation." : "Focus on CSS selectors and the box model."}</li>
      <li><b>Part B (Coding):</b> Recreated ${chosenCode.title} passing ${codePassedCount}/5 requirements (${codeMarks}/10 marks).</li>
      <li><b>Part C (Descriptive):</b> You attempted ${descAttempted} question(s). Practice writing standard 5-mark structures with code blocks.</li>
    </ul>
  `;
}

document.getElementById("startExamBtn").onclick = startExamSimulator;
document.getElementById("submitExamBtn").onclick = submitExamSimulator;
document.getElementById("submitExamBtn2").onclick = submitExamSimulator;
document.getElementById("retakeExamBtn").onclick = startExamSimulator;
document.getElementById("reviewExamBtn").onclick = () => {
  document.querySelector(".tab[data-tab='mcq']").click();
};

// ==========================================================================
// TAB NAVIGATION INITIALIZATION
// ==========================================================================
document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const targetPanel = document.getElementById(btn.dataset.tab);
    if (targetPanel) targetPanel.classList.add("active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});

// ==========================================================================
// APPLICATION BOOTSTRAP
// ==========================================================================
loadState();
initTheme();
renderMcqs("all");
renderChallengePicker();
loadChallenge(appState.currentChallenge || 0);
renderDescriptive("all");
renderRevision();
updateBoxModelVisualizer();
updateSpecificityUI();
updateGlobalStats();
