# Class Management Git Repo Utility

## Installation

```bash
npm install git-mgmt-classroom-cli
```

## Commands

```bash
new-lesson <name-of-directory-to-copy/create>
```

## Requirements

1. a `.gitignore` file at the root of your (the instructor's) local copy of the repo with at least the following entries:

```txt
instructor
*instructor*
node_modules
```

This gives you an area to freely work on, and add lessons to your local repo. This ignores as files inside of the `instructor/` directory as well as any files that contain _instructor_ anywhere in the name, so its easy to ensure any given file is ignored.

2.A plain text file with a list of your students at the root of your project repo with the name **students_instructor.txt**. Our cli looks for this file. Right now, this is static, but we may change this in the future to be more flexible.

e.g.

```txt
mary
kiya
steven
darnell
```

3.As an instructor, you create your lesson with starter code, instructions, etc. inside of a lesson directory inside of instructor, e.g. `instructor/03` for lesson 3.

Then, when you are ready to share this with your students, you can run (from the root of your project):

```bash
new-lesson 03
```

This will create a new lesson dir `03`, as well as directories for each student inside of it.

For example:

```bash
...
03/mary
03/steven
...
```

Inside each student dir, our bin command will copy what was inside of your matching dir inside of `instructor`.

This ensure each student gets a copy of his/her/their starter files.

4.Add/commit your changes and push to the remote origin. Then instruct students to `git pull` and they will recieve the materials for that lesson.

This way, you can go about managing your repo in two ways:

1. Students have read-only access, and strictly pull down new course material, that they can work on directly in their local.

2. Students have the option of pushing material that they have saved back to the origin should they choose or want to submit their work in this fashion.
