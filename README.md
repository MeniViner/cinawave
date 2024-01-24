# 1. Make a Change
# (Manually edit the file)

# 2. Stage and Commit the Change
cd path/to/your/local/repository
git add path/to/your/file
git commit -m "Describe your change here"

# 3. Push Changes to GitHub
git push origin master

# 4. Friend Checks for Changes
git fetch origin
git diff --name-only master origin/master

# 5.Friend pull code
git pull origin master

