**To run the project backend, follow these steps:**
1) Clone the repository:
git clone [repository_url]

2) Switch to the dev branch:
git checkout dev
 
3) Pull the latest changes from the dev branch:
git pull origin dev
 
4) Create your own branch in the format [name]_dev:
git checkout -b [name]_dev

5) Create virtual environment:
pip install virtualenv
virtualenv [env_name]

6) Activate the virtual environment:
source env/Scripts/activate  # for Windows
source env/bin/activate      # for macOS/Linux

7) Install the project dependencies:
pip install -r requirements.txt

8) Configure the database settings:
Open the settings.py file.
Locate the DATABASES section.
Update the values of 'NAME', 'USER', 'PASSWORD', 'HOST', and 'PORT' with your database credentials.

9) Apply database migrations:
python manage.py migrate

10) Create a superuser for accessing the admin panel:
python manage.py createsuperuser

11) Start the development server:
python manage.py runserver


**To run the project Frontend, follow these steps:**
1) Check the available Node.js versions on your system by running the following command:
nvm ls

2) If the required Node.js version (19.7.0) is not installed, you can install it using nvm (Node Version Manager). Run the following command to install Node.js version 19.7.0:
nvm install 19.7.0

3) Switch to the installed Node.js version by running:
npm use 19.7.0 

4) Install the required packages listed in the package.json file by running:
npm install

5) Once the installation is complete, start the development server by running:
npm run dev


