# GitSearch
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A web application for searching GitHub users and saving profiles as potential candidates for an employer. 

## Features

- **Search GitHub Users**: Quickly search for users on GitHub by username.
- **View Profile Information**: Access key details about each user, including:
  - Profile Image
  - Username
  - Location
  - Email
  - Company
  - Bio
- **Save Candidates**: Save users as potential candidates for future reference.
- **Remove Candidates**: Easily remove users from the saved candidates list.

## Technologies Used

- **React**: For building the user interface.
- **GitHub API**: For fetching user data from GitHub.
- **CSS**: For styling the components.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DarioJZB/GitSearch
   cd GitSearch
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up GitHub API Access**

   - Create a `.env` file in the root directory and add your GitHub API token:
     ```plaintext
     VITE_GITHUB_TOKEN=your_github_token
     ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

   The app will run locally at `http://localhost:5173`.

## Usage

1. **Search for Users**: Enter a GitHub username to retrieve and display profiles.
2. **Save Candidates**: Click "Save" to add a user to the list of saved candidates.
3. **View Saved Candidates**: Navigate to the "Saved Candidates" page to review saved profiles.
4. **Remove Candidates**: Click "Reject" to remove a user from the saved list.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License.

---

## Contact

Created by [Dario Zambrano](https://github.com/DarioJZB). Feel free to reach out with any questions or suggestions!

--- 

This README includes the purpose of the application, setup instructions, usage guidelines, folder structure, and contribution instructions. You can customize the placeholder links, images, and URLs as needed.
