# The New ARS Landing Site

## Contributing to The New ARS Landing Project

1. **Fork the Repository**
   - Go to [ars-landing-new on GitHub](https://github.com/Advanced-Robotics-Systems/ars-landing-new) and click the "Fork" button at the top right of the page.

2. **Clone Your Fork**
   - Run the following command to clone your fork to your local machine:
     ```bash
     git clone https://github.com/<your-username>/ars-landing-new.git
     ```

3. **Set Upstream Remote**
   - Navigate to your project directory:
     ```bash
     cd ars-landing-new
     ```
   - Add the original repository as an upstream remote:
     ```bash
     git remote add upstream https://github.com/Advanced-Robotics-Systems/ars-landing-new.git
     ```

4. **Pull Updates from Upstream**
   - Fetch the latest changes from the original repository:
     ```bash
     git fetch upstream
     ```
   - Merge changes into your local branch:
     ```bash
     git merge upstream/main
     ```

5. **Create a Pull Request**
   - Push your changes to your fork:
     ```bash
     git push origin <your-branch>
     ```
   - Open a pull request from your fork's branch to the main repository's `main` branch.

## Conventions and Practices

- **Folder Structure**
  - **`sections/`**: Contains the main sections of the application. Edit files within this folder as needed.
  - **`components/`**: Contains reusable components. Edit files within this folder as needed.
  - **`index.js`**: Each folder has an `index.js` file that exports the respective sections or components.

- **Editing Files**
  - Only modify files within the `sections` and `components` folders.
  - Ensure to follow the existing naming conventions and file structure.

- **Code Standards**
  - Adhere to the project's coding style and conventions.
  - Write clear and concise commit messages.
  - Test your changes thoroughly before submitting a pull request.
