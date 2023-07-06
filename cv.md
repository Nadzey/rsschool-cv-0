# Nadzeya Kaluzayeva
# Junior Frontend Developer

- **Email:** nadiakoluzaeva@gmail.com
- **Phone:** +1 215 268 8878
- **LinkedIn:** [https://www.linkedin.com/in/nadzeya-kaluzayeva/](https://www.linkedin.com/in/nadzeya-kaluzayeva/)
- **Discord:** Nadia#9022

---

## Summary
I am an experienced QA Automation Engineer with 4 years of hands-on experience in designing and implementing automated testing solutions using Cypress and JavaScript for web applications. I have a solid background in maintaining and executing comprehensive test cases for regression, integration, and end-to-end testing, as well as conducting API testing using tools like Postman.

Currently, I am transitioning my career into the field of Frontend Development, leveraging my expertise in automated testing to build robust and high-quality web applications. With a strong understanding of the software development lifecycle and testing methodologies, I am well-equipped to contribute to the development process from both a quality assurance and development perspective.

Throughout my career, I have worked in Agile and remote environments, collaborating effectively with cross-functional teams. I am proficient in initializing new projects with GitHub and configuring basic CI settings, ensuring streamlined workflows and efficient project management.

With my combined experience in QA automation and my passion for frontend development, I am excited to apply my skills and knowledge to create exceptional user experiences and contribute to the success of innovative web projects.

## Technical Skills
- **Automation tools, frameworks, and libraries:** Cypress, Mocha with Chai/Axios libraries, Playwright, Puppeteer, Selenium-Webdriver, Webdriver.io
- **Programming languages:** JavaScript, SQL, HTML/CSS
- **API Tools:** Postman
- **Reporters:** Cypress Cloud, cypress-mochawesome-reporter
- **Databases:** MySQL, PostgreSQL
- **SD Methodologies:** Agile Scrum / Kanban
- **Project Management:** Jira/Confluence, Git, GitHub
- **CI/CD:** GitHub Actions

## Professional Experience

### Teambook, Minsk, Belarus
**QA Automation Engineer** | Apr. 2023 – current (part-time)

Project: Web app for Project Resource Planning.

- Designed, developed, and maintained automated test scripts using Selenium, Python, and Postman API to validate the functionality, performance, and security of Teambook's software products.
- Collaborated with the QA team and stakeholders to define comprehensive test plans and strategies encompassing different test types, environments, and platforms.
- Created and maintained a repository of scalable and reusable automation test cases that accurately reflected the functional requirements of the software.
- Executed automated tests, analyzed results, and documented defects and issues in a clear and concise manner. Generated comprehensive test reports to communicate testing progress and provide insights to the development team.
- Integrated automated tests into the CI/CD pipeline to facilitate continuous testing and ensure software stability during frequent releases and deployments.
- Collaborated with cross-functional teams, including developers, product owners, and designers, to understand requirements, provide feedback, and contribute to the overall quality assurance process.
- Documented test processes, methodologies, and best practices to facilitate knowledge sharing and support the onboarding of new team members.

### Clarip INC, Wilmington, DE
**QA Automation Engineer** | Feb. 2022 – Mar. 2023

Project: Privacy governance platform for data protection compliance.

- Designed and implemented automated testing solutions using Cypress and Mocha with Axios/Chai libraries for web applications, utilizing JavaScript for automation tests.
- Maintained and updated automated test scripts using Cypress with JavaScript, ensuring their relevance and effectiveness over time.
- Maintained and automated 500+ comprehensive test cases for regression, integration, and end-to-end testing.
- Developed test plans, test cases, and test scripts for various features of the privacy governance platform. Conducted manual testing to ensure application quality and identify potential issues not caught by automated testing. Tested user interfaces, workflows, and data validation.
- Utilized SQL to query and verify data integrity in databases, ensuring high data quality and accuracy.
- Conducted API testing using tools such as Postman, ensuring seamless integration between different systems.
- Contributed to Agile development meetings and provided valuable insights and input on testing strategies.
- Managed multiple tasks and priorities in a fast-paced remote work environment, adapting to changing priorities and deadlines.
- Collaborated closely with the development team, product managers, and stakeholders to ensure all requirements were met and the product delivered high quality. Provided feedback on design and usability, ensuring a user-friendly application that met end-users' needs.
- Implemented CI/CD pipelines, streamlining testing processes and enabling faster deployment.
- Initialized new projects with GitHub and configured basic CI settings, contributing to an efficient and effective workflow.

## Code example:

**KATA from CODEWARS:**
- An Array consisting of "0" and "1"'s also called a binary array is given as an input.
- Task:
- Find the length of the longest contiguous subarray which consists of Equal number of "0"s and "1"s.

<pre>
```javascript
function binarray(a) {
  let count = 0;
  let countMap = new Map();
  countMap.set(0, -1);
  let maxLength = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      count++;
    } else {
      count--;
    }
    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }
  
  return maxLength;
}
```
</pre>

### Languages

- English: C2 (Fluent)
- Russian: Native
- Polish: Advanced